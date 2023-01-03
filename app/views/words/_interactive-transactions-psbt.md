<% provide(:title, 'Interactive Transactions with PSBT') %>

# Iterative Partial Transactions with PSBT

<span class="by-line">by Dan Gould</span>

Partially signed bitcoin transaction (PSBT) is a data format for interactive transactions. Want to sign using an airgapped device that’s never on the internet and broadcast from your laptop? Use PSBT. Need to get signatures from multiple signers in a multisig? PSBT. Writing software for PayJoin or CoinJoin? Again, you want PSBT. Since what we do with transactions has evolved, so has the format. The following is a brief history and future hopes for our best transaction format friend.

<figure>
   <%= image_tag("psbt-scaffold.jpeg", alt: "lightning bolts contained by privacy shutters")  %>
   <figcaption>"Workers constructing a bamboo scaffold cantilevered over a busy Hong Kong street" by Greg Hume, licensed under <a href="https://creativecommons.org/licenses/by-sa/3.0/deed.en">CC BY-SA 3.0</a>. "PSBT sign edit by Dan Gould using DALL·E 2.</figcaption>
</figure>

The version 0 (there is no version 1) PSBT data format includes a global unsigned raw transaction. The raw transaction format was hacked together for efficient verification, not mutation. PSBTv0 augments it specifically to mutate between partially signed states.

Take a watch-only Sparrow wallet signing from a COLDCARD hardware signing device for example. Imagine Sparrow creates a new PSBT to sweep an input to one output and writes the unsigned transaction as such. Since COLDCARD stores minimal data and logic, it relies on Sparrow to update input and output data to the PSBT. However, the [raw transaction format](https://btcinformation.org/en/developer-reference#raw-transaction-format) has only room for the txid and output index (vout) which identifies the output it spends. Required input script and derivation path data for signing are saved in the PSBT map for that input.

COLDCARD accepts this PSBT from Sparrow to sign using its cold keys. Once signed, an input finalizer determines if the input has enough data to pass validation, constructs finalized scripts, and removes any non-essential data before the next step, transaction extraction. Sparrow may extract and broadcast a valid consensus transaction given the finalized transaction.

While PSBTv0 makes simple cold storage standard, it struggles to do anything more involved. Take [Lightning PayJoin](/words/lightning-payjoin) for example. In the simplest case, a sender proposes an original PSBT with output to the receiver’s address. Upon send request, the receiver makes a channel open multisig address with their lightning peer. They then substitute the original PSBT output address with the channel address to make a payjoin proposal PSBT. But therein lies the problem. PSBTv0 has no way to substitute outputs. In practice today the PayJoin receiver creates a whole new proposal PSBT, piecemeal parsing input/output details from the original PSBT maps and raw transaction separately, then makes their own additions. The PayJoin spec piles on PSBT validation because the PSBTv0 spec does not define how inputs or outputs might change. Changing them is a hack at best. Raw transaction is a patchwork map nested like a Russian doll inside PSBT’s map, making such changes infeasible. If you ask me, instantiating a new struct because of an immutable raw transaction defeats the purpose of a mutable format.

## Enter Version 2

PSBTv2 removes the fixed raw transaction and replaces it with a key-value map for every piece of data it managed. It also introduces "transaction modifiable flags" to track when state changes are allowed. Unlike the raw transaction format, this design facilitates input and output changes.

With PSBTv2, Lightning PayJoin becomes just a few key-value pair updates. Just replace a specified output map with a substitute. The data is all neat in one place. After the output substitution, the PSBT's "outputs modifiable flag" is set to false to signal no more mutation and allow only signing thereafter. All of this construction can be handled by a PSBTv2-specified constructor role since the state is explicit to manage. The one role replaces the version 0 combiner, updater, and input finalizer roles with their siloed and paranoid validation. After signers sign, a transaction extractor can try and extract a complete raw transaction from the data in the maps alone.

PSBT started as scaffolding for multiple signers around a raw transaction and evolved to support bigger changes. The idea fertilized space for interactive transaction innovation, which ran into snags when protocols could not change inputs and outputs once they were set. Version 2 makes that possible. Now innovators can advance dual funding (where both ends of a lightning channel add funds), splicing (where existing channels are replaced without downtime), CoinJoin privacy preservation, and whatever new conglomerations we might devise. The data transfer problem is solved so we can focus on novel bits.
