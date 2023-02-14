# A Better Payjoin Design Flow

<% provide(:title, 'A Better Payjoin Design Flow') %>
<% set_meta_tags title: 'A Better Payjoin Design Flow', description: 'Reflecions on the Yashraj Deshmukh apropach to private payments', og: { image: image_url('payjoin-challenge-design-flow-yashraj.png') } %>

<span class="by-line">by Dan Gould</span>

In December 2022, we put out a bitcoin design challenge for a payment flow centered on making a private purchase. [Yashraj](https://iris.to//npub1yashrajtj3ddn9u2ypzalp4qew4f9u8wls0tpf5kuvqarenqwckql8adnu) took a swing at it and <a href="https://docs.google.com/document/d/16HmzGnI1620W5HqFGw2KhjqytLzByBwD4uXMKW3RFxQ/edit" target="_blank">knocked it out of the park</a>. Not only did he design a flow to make payjoin a default privacy upgrade anywhere bitcoin is accepted, he identified the key areas it should improve and continues to push for their evolution. He keeps finding new edge and I can't wait to see what comes next.

> Bob wants to buy an engagement ring to surprise Alice. He has to pay on-chain because it's a large expense. Alice recently sent him sats, so she has a view into the sats in Bob's wallet. Design a low-fidelity flow Bob might follow to spend his sats using PayJoin. In contrast to a naïve transaction, thanks to PayJoin, even if Alice sees the resulting transaction on-chain she won't be able to discern whether it is a small transfer, output consolidation, or the large purchase that would spoil the surprise.
>
> <span>[Design Challenge 6: Private Purchase](https://bitcoin.design/guide/resources/design-challenges/#challenge-6-private-purchase)</span>

## The Resulting Flow

The resulting flow differs from the existing Bitcoin UI Kit in three key ways. It keeps the same controls in the success case.

First, when Bob scans the merchant's QR, the transaction overview shows it's a payjoin with a colorful toggle. There is some information to show a privacy-preserving transaction will be used by default.

Second, a loading spinner shows up during a transition screen for what he calls the "payjoin handshake" during which sender and receiver cooperatively construct the payjoin transaction.

Third, the UI shows the destination as a [unified bitcoin uri](https://bitcoinqr.dev/) rather than a raw address or lightning invoice.

Because payjoin is built on bitcoin uri and basic http, so long as both parties are online the experience is much the same as using lightning. The payjoin specifics are encoded into the QR so that neither Bob nor the merchant notice a difference. The biggest change is that senders select a fee budget in the interface instead of an absolute fee. This hides complex details by leveraging optional payjoin fee parameters outside of the UI.

<figure>
   <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="740" height="827" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FhCHA4qjxQGiX06ddnWADyW%2F%255Byashraj's-copy%255D-Bitcoin-Wallet-UI-Kit-%2526-Design-System%3Fnode-id%3D4331%253A66395%26t%3DnhmM7q2r11uYaV6Z-1" allowfullscreen></iframe>
   <figcaption>Yashraj's proposed payjoin UI flow</figcaption>
</figure>

## Limitations for Bob, the Sender

In this design challenge Bob attempts privacy from a curious Alice. In the fallback case, where a surveillance-vulnerable fallback transaction gets sent if a payjoin can't, Bob would be exposed. This may be solved in one of two ways:

Either Bob only makes his purchase from a so-called "interactive" (I prefer "live" to specify non-robot) merchant who does not broadcast the naïve fallback, and instead may try again.

Or, assuming Alice has an incomplete view of the contents of his wallet, he constructs the original fallback psbt in such a way that it conforms to unnecessary input heuristic and itself looks like a payjoin. In doing so, Alice would still have a few ambiguous interpretations of the fallback transaction, should it be posted, and Bob retains some degree of security that the surprise won't be ruined.

## Limitations for the Receiver

While the challenge focused on the sender, Yashraj's findings leave us with two main barriers in the way of receiver adoption.

First, they have to run a public server endpoint. That can be difficult even for a business since they need to get an https certificate to be reached online. This requirement is above and beyond the requirement to accept lightning.

Second, the merchant requires a hot wallet. In practice on BTCPay that is separate from their lightning wallet even though that lightning comes with a suitable hot wallet.

If there were a way to accept payjoin using the lightning wallet then the two bitcoin apps could share the reserve bitcoin with no harm to uptime while sharing setup costs.

## Case study

Yashraj has brought an incredible new perspective to the bitcoin privacy process. Stay tuned for his case study on the current state of payjoin. Yashraj is breaking down the payjoin user experience [between BlueWallet and BTCPayServer](https://twitter.com/i/status/1313822205286010883) to see where payjoin can go from here.
