<% provide(:title, 'Tal Rabin: 51% Attacks are Hard') %>
# Tal Rabin: 51% Attacks are Hard
<time datetime="2019-03-06">March 06, 2019</time>

<figure>
  <%= image_tag "rsa-conference-2019-cryptographers-panel.jpg", class: "m-full-width" %>
  <figcaption>From left to right: Zulfikar Razman, Ron Rivest, Shafi Goldwasser, Whitfield Diffie, Tal Rabin, Paul Kocher</figcaption>
</figure>

The RSA Conference 2019 Cryptographers’ Panel was probably the most legit panel I have ever had the privilege of attending. Tal Rabin, awarded this morning the Award for Excellence in Mathematics, claimed it would cost $250,000 to 51% attack Bitcoin for 1 hour. Tal Rabin, your math is wrong! That number is actually on the order of 1000 times too small.

<figure>
  <%= image_tag "51-percent-attack-cost.png", class: "m-full-width" %>
  <figcaption>Likely the source of confusion: What’s $294,745 × 0? Source: crypto51.app</figcaption>
</figure>

Rabin encouraged the audience to google it, so here we are, I did. And found this piece of information closely matching her quote. This source claims that using “the prices NiceHash lists for different algorithms we are able to calculate how much it would cost to rent enough hashing power to match the current network hashing power for an hour.” The problem is that the entirety of NiceHash doesn’t have even 1% of the hash power of the Bitcoin network.

So then, let’s do some napkin math. What does it actually cost?

Let’s buy the best miners available which are also the most power efficient. Bitmain’s next generation (shipping April 1–10) Antminer T15 does 23 Tera hashes per second at 1541W and costs $710.

<figure>
  <%= image_tag "bitcoin-hash-per-second.jpg", class: "m-full-width" %>
  <figcaption>https://www.blockchain.com/en/charts/hash-rate</figcaption>
</figure>
For the sake of simplicity let’s

- Add a 10% bulk discount (so $639 per miner)
- Use the lowest hash rate in the past year of ~ 24,000,000 TH/s
- Ignore the guanxi and manufacturing limitations 24,000,000 ÷ 23 = 1,043,478 miners at once from Bitmain would entail
- Ignore that we’re in the USA and have 25% import duty from China
- Pretend we get all-but-free $0.03/kWh Chinese electricity rates
- Pretend the units don’t require an additional ~$100 1600W power supply to run
- Ignore the overhead that setting up and managing a system of one million machines would entail

So then 1,043,478 miners × $639 = $666,782,442 as a fixed cost. Add $0.03kWh × 1541W × 1,043,478 miners = $48,240 per hour. ==Therefore, the total cost for an imaginary best-case scenario to take over on bitcoin network for an hour is a pittance of $667 million.== Beyond beastly.

Bitcoin was designed with the one intention of being difficult to alter. If it uses as much power as Singapore then one would need to harness at least that much power to launch a 51% attack. If Bitcoin were only $250,000 away from a meltdown, wouldn’t some deep-pocketed fork see its end through? Seeing the greatest cryptographers among us oversimplify the nuances that make the network work only make it clear how difficult it is to see through the noise, or, learn with errors. This morning’s panel was watched by 40,000 cybersecurity professionals. Misinformation (i.e. fake news) from trusted authority, even if well-intentioned, spreads wildly.

To give credit where credit is due, despite the small human slip-up, I ought to thank Tal Rabin at IBM for her extensive work including threshold cryptography, multi-party computation, batch verification, and the work she mentioned today cleverly making use of cryptography to empower women of the #MeToo movement. You inspire me to decipher my cryptography homework. You inspire me to make individuals’ decisions carry weight. You inspire me to be useful.

Thank you! 🤓

