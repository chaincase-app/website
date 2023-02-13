<% provide(:title, 'Lightning Powered PayJoin') %>
<% set_meta_tags title: 'Lightning Powered PayJoin', description: 'Privacy preserving channel opening batches', og: { image: image_url('lightning-striking-surveilled-bitcoins.jpg') } %>

# Lightning Powered PayJoin

<span class="by-line">by Dan Gould</span>

<%= image_tag("lightning-striking-surveilled-bitcoins.jpg", alt: "lightning bolts contained by privacy shutters")  %>

The Lightning Network and Pay-to-Endpoint (P2EP) [PayJoin](https://bitcoinops.org/en/topics/payjoin/) both let two bitcoin peers interact to transact. Interactive transactions help both parties preserve their privacy and save money. They can share chain space by communicating rather than communicate by sharing chain space. PayJoin is the fundamental interactive transaction, set out to break common blockchain surveillance heuristics. Lightning makes instant payments possible through a network of peer to peer payment channels. Funny nobody connected these together. It's easy to do.

Let's understand Pay-to-Endpoint first. Most commonly used for PayJoin, it lets a sender propose a transaction for a receiver to modify. In typical bitcoin transfers, only the sender has transaction input. If the receiver adds input, they break that pattern which chain surveillance uses to intrude on people's privacy. Second, the receiver will merge their input with the incoming payment so they get one big transaction output (txo). Otherwise they would end up with two smaller ones. Anyone with a lot of inbound bitcoin saves money on block space fees with this kind of txo consolidation. The more txos you spend the more space you have to pay miners for. Thwarting surveillance comes as a bonus. Take a look.

~~~ console
Rhys    2 btc  →  ❓ 3 btc
Sally   5 btc     ❓ 4 btc
~~~

Since public transaction data is just inputs and outputs, we can't tell how big the payment was or which party got which output. Did Sally send Rhys 1 or 2 btc? There's not enough data to say for sure. PayJoin is not the whole bitcoin privacy story, but it helps.

Now what about lightning? Say I'm a business who gets bitcoin settlements. If I had lightning channel capacity I could make near-free and instant bitcoin payments with cash finality. But I'd have to lock up bitcoin first to do that. Locking up channel funding might look like this.

~~~ console
💁🏻‍♀️🪙  4,900,000 sat  → 👝 4,889,000 sat → ⚡️ Funding 4,878,000 sat
                    ⏳                 ⏳
                 ~10 minutes   +    ~10 minutes
~~~

In the best, and most expensive case, I wait around ten minutes to move funds from my merchant stash to my lightning node wallet. And then I wait again for my node to speak the language of lightning to another and lock up a channel funding transaction. I pay network fees each time. As of writing that's at least 11,000 sats (~$2.50) a pop. Times two.

P2EP makes that one. One transaction is a strict upgrade in speed and cost. Nevermind the privacy benefit. Instead of a separate stash withdrawal and funding transaction, P2EP does it all at once. Before any transfer, a PayJoin-receiving lightning node writes down their plans to open channels. [Someone with PayJoin support](https://en.bitcoin.it/wiki/PayJoin_adoption) (which includes an exchange today) can send a PayJoin proposal instead on old school transaction. Preconfigured, that receiver then pings their channel counterpart, works out the channel funding output, and sends it back to the sender in place of their original proposal. Since the response still sends the same amount, the sender signs it. The resulting transaction opens a channel on behalf of the reciever.

~~~ console
 💁🏻‍♀️🪙  4,900,000 sat → ⚡️ Funding 4,889,000 sat
                    ⏳
                 ~10 minutes
~~~

In practice, this would help [BTCPayServer](https://btcpayserver.org) merchants immediately. BTCPayServer uses separate invoicing and lightning-funding on-chain wallets. Because they already support PayJoin send and receive for invoicing, extending support to lightning would unify the two wallets. That way they could open lightning channels directly out of their invoicing on-chain wallet. And with PayJoin, they can join txos to spend out of both at the same time. Heck, incoming customer PayJoins could open lightning channels. Even without hot wallet funds, a P2EP channel open can replace a would-be on-chain payment. The sender pays it all. This soothes the pain of moving and waiting and moving and waiting.

Lightning PayJoin appears compatible with [dual funding](https://bitcoinops.org/en/topics/dual-funding/) channels too. So one's very first channel can be a balanced one, too. Upon proposal, a receiver has all the information to negotiate for *inbound* capacity in response to a liquidy ad. So as long as the sender receives a response that falls within her budget, for which all inputs are signed except for her own, she'll sign. She will transact with her sovereignty in tact.
