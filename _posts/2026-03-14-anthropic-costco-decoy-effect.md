---
layout: post
title: "What Anthropic and Costco Got Right About Human Psychology"
date: 2026-03-14 09:00:00
categories: social-science
tags: behavioral-economics decision-theory economics
thumbnail: assets/img/claude_pricing_forked_path.jpg
description: The hidden economics of decoys, memberships, and $1.50 hot dogs — exploring the decoy effect, prospect theory, and reciprocity through Anthropic's Claude pricing tiers and Costco's rotisserie chicken.
giscus_comments: false
related_posts: true
---
Happy Pi Day! The last few months have been surrounded by nervous excitement in the economics and technology space, with talks of datacenters in space, [PewDiePie](https://youtu.be/aV4j5pXLP-I?si=jkDGckqciiiH4BBZ) joining the local LLM movement, and a [prominent academic economist's proposal](https://causalinf.substack.com/p/claude-code-32-a-modest-proposal) to ban AI usage from top journals, all while society is inching closer to the sci-fi age (The Phillip K. Dick version, it seems like).

I took a hiatus from writing blogs earlier this year, certainly not because of the banality of life — quite the contrary — ever since I deleted my Instagram and Facebook accounts. Paradoxically, I have been kept quite busy with the resulting surplus of free time, mostly devoting it to classes and sci-fi books. However, I'd be lying to deny that I still get distracted by the occasional Hacker News threads prophesying the future regarding Agentic AIs. This is when I spotted the anomaly in Anthropic's pricing for Claude.

![Spending $20/month vs $100/month on Claude, a forked path meme](/assets/img/claude_pricing_forked_path.jpg)

## The "Nudging" From the Decoy
For the warm-up, let's take a look at the age-old experiment by Dan Ariely on the pricing of the Economist Magazine Subscription. The setup of the experiment is presented to a group of MIT students as follows:

A. Web-only subscription: <span>$</span>59 (chosen by 16%)

B. Print-only subscription: <span>$</span>125 (chosen by 0%)

C. Print & Web subscription: <span>$</span>125 (chosen by 84%)

Depending on your familiarity with behavioral science, you may recognize the following paradox as a violation of the Independence of Irrelevant Alternatives principle in economic theory, which states that adding an irrelevant option B should not affect the relative preference between option A and option C. As demonstrated by this experiment, the result is as follows once option B is removed:

A. Web-only subscription: <span>$</span>59 (chosen by 68%)

C. Print & Web subscription: <span>$</span>125 (chosen by 32%)

In this experiment, adding a third "irrelevant" option somehow flipped the probability that people would choose Option A over C, directly violating the consistency of the [Independence of Irrelevant Alternatives](https://en.wikipedia.org/wiki/Independence_of_irrelevant_alternatives) principle in economic decision theory. (Note: these are aggregate frequencies, not to be confused with individual-level revealed preferences)

![A context-dependent choice pattern in preferences, with and without the decoy option](/assets/img/economist_decoy_chart.png)

The decoy (option B) serves as a behavioral nudge to make it a no-brainer to choose the more premium option C over the bargain option A in this case. Failing to incorporate these behavioral nuances into your pricing strategy, you're leaving consumer surplus uncaptured, which can result in sub-optimal revenue capture in technical terms. In other words, choose your pricing wisely for the product-minded folks reading this; the "why it happens" in causality should not be neglected in chasing the "what will happen" in machine learning.

Can we apply the same principle to Anthropic's pricing model for Claude Code?

The base Claude Pro plan offers standard usage at <span>$</span>20/month, while the two-tiered Max plan offers the following: 1) <span>$</span>100/month for 5x usage. 2) <span>$</span>200/month for 20x usage. Essentially, the Max 5x serves as the decoy in the middle in terms of per-unit cost—both Pro and Max 5x anchor the per-unit cost at <span>$</span>20/unit, while the Max 20x gives a 50% discount at <span>$</span>10/unit.

Below is a plot illustrating how rational agents will choose the Max 20x plan over the Max 5x plan in this model, assuming no budget constraints and risk aversion.

![The decoy effect applied to Claude pricing tiers under linear versus concave utility](/assets/img/claude_decoy_utility_chart.png)

Reading from left to right, the x-axis measures how much you value each unit of AI usage, with the casual user on the left and the power user on the right.

Assuming a linear utility function as shown on the left, the Max 20x plan should be seen as a steal compared to the Max 5x. However, the utility function is often concave, implying there is a marginal diminishing return on LLM tokens. In relative terms, the Max 5x is the dominated inferior choice compared to the Max 20x. In reality, depending on your perceived personal usage and budget constraints, Max 5x can be the optimal choice in absolute terms. Personally, I have yet to burn through the 5x plan with my weekly usage, so I'm sticking with the 5x plan. Does this choice make me irrational using the naive model?

In the complex reality of economic models, users are often heterogeneous; they exhibit uncertainty about future usage and liquidity constraints. These violations will disallow the usage of the naive models demonstrated here.

In conclusion, as Kahneman & Tversky suggested in *Thinking, Fast and Slow*, people don't evaluate outcomes in absolute terms; instead, reference points are used as anchors when making decisions. Individual decisions can be messy and unpredictable.

## Losses and Gains under Uncertainty
Before we talk about Prospect Theory, here's a quick refresher on the [Expected Utility Theory](https://en.wikipedia.org/wiki/Expected_utility_hypothesis): Given risky choices, individuals will make choices based on the expected utility of the expected outcome rather than monetary outcomes alone.

$$E[U(L)] = \sum_{i=1}^n p_i u(x_i)$$

Here's the setup to illustrate how humans process gains and losses cognitively differently when a lottery is introduced. You're offered two choices: A) you get <span>$</span>100 for certain, B) you flip a fair coin for either 0<span>$</span> or <span>$</span>200.

Now, for the next lottery, choices of gains become losses instead. Again, you're offered two choices: A) you lose <span>$</span>100 for sure, B) you flip a coin for either losing <span>$</span>0 or <span>$</span>200.

In the realm of economic theory, if you choose the sure-gain, you should choose the sure-loss as well, after all, they are the same mirrored choices given a constant level of risk-aversion. One should not dislike losses more than one loves gains. However, under empirical evidence presented by prospect theory, most people are risk-loving when it comes to losses. In other words, most of us would take the gamble with the loss, but be risk-averse with gains.

This behavior of inconsistent decision-making can be extended to other domains of losses when confronted with sunk costs, with increased spending at the end of the subscription year for membership-based consumer goods. If you have already spent <span>$</span>100 on a yearly subscription service you did not use much, it should not matter to you whether you use it now to spend more money in absolute terms. Yet, people tend to overspend when confronted with a sunk cost. The same principle applies to quitting; here's one of my favorite podcast episodes on the [Economics of Quitting](https://freakonomics.com/podcast/annie-duke-thinks-you-should-quit-update/), where Steven Levitt explains why most people quit too late with toxic relationships and sclerotic careers.

## The Gift of the <span>$</span>4.99 Rotisserie Chicken
I am obligated to mention the <span>$</span>4.99 rotisserie chicken and the <span>$</span>1.50 hot dogs, presented to you by the behavioral economists at Costco, defying the classical model assumptions of rationality and self-interest. In classical economics, a "gift" serves as an exogenous shock, and it should not affect your willingness to pay for additional goods.

In game theory, a dictatorship game is traditionally played in a one-shot fashion, where a player is offered to split <span>$</span>10 with another person, but the other person makes the final binary choice on whether to agree to the split amount or reject (both get <span>$</span>0 if rejected). (Using game theory, what is the optimal split in this one-shot version?)

To illustrate the concept of reciprocity, the [dictator game](https://en.wikipedia.org/wiki/Dictator_game) is played repeatedly with role reversal every round. In the repeated version, the experimental results consistently show that generosity in previous rounds is rewarded by further generous splits, exhibiting *conditional altruism*. This implies that humans make decisions that rely on balancing a social ledger; we feel obligated to reciprocate kindness.

This brings us to the famous Costco <span>$</span>1.50 hot dog combo and <span>$</span>4.99 rotisserie chicken. It is a well-known fact that Costco has held the price of the hot dogs constant since its introduction in 1985. Relying on behavioral models, it would suggest that shoppers spend more given the generous offering of the rotisserie chicken and hot dog combo.

In reality, it would be difficult to test empirically—selection bias exists, and Costco Execs are unlikely to agree to running RCTs for hot dogs (A/B Testing). Perhaps, this causal question can be answered via natural experiments exploiting the [temporary remodeling](https://www.reddit.com/r/Costco/comments/12qzeta/chicken_room_closed_for_a_renovation_or_something/) of the food court and the rotisserie chicken ovens. By applying a Difference-in-Difference (DiD) estimator, we can compare the change in high-margin spending at the treated store (no hot dogs available) against a highly correlated control store (one of the cool use cases of ML is predicting those controls) in a similar demographic area where the food court remained open. Examples such as this are what make Difference-in-Difference estimators so popular, to the point that 90% of publications in top field journals use this method.

Against my strong urge to expand on the mechanics of causal inference and applied econometrics, I will cap the applied methods discussion here and dedicate future blog posts to those topics specifically, phew!

## Your Turn as the Choice Architect
Now it's your turn. How would you redesign the Costco Membership choice given the Decoy Effect to maximize consumer surplus:

![Costco Executive Membership at $130/yr versus Gold Star Membership at $65/yr](/assets/img/costco_membership_tiers.png)

Leave a comment below with your answer (there's no right or wrong answer), and share this with your friends to maximize the network externality.

> The purpose of studying economics is not to acquire a set of ready-made answers to economic questions, but to learn how to avoid being deceived by economists.

### References
1. **von Neumann, J., & Morgenstern, O.** (1944). *Theory of Games and Economic Behavior*. Princeton University Press.
2. **Pratt, J. W.** (1964). Risk Aversion in the Small and in the Large. *Econometrica, 32*(1/2), 122–136.
3. **Allais, M.** (1953). Le Comportement de l'Homme Rationnel devant le Risque: Critique des Postulats et Axiomes de l'École Américaine. *Econometrica, 21*(4), 503–546.
4. **Ellsberg, D.** (1961). Risk, Ambiguity, and the Savage Axioms. *The Quarterly Journal of Economics, 75*(4), 643–669.
5. **Kahneman, D., & Tversky, A.** (1979). Prospect Theory: An Analysis of Decision under Risk. *Econometrica, 47*(2), 263–291.
6. **Tversky, A., & Kahneman, D.** (1981). The Framing of Decisions and the Psychology of Choice. *Science, 211*(4481), 453–458.
7. **Samuelson, P. A.** (1963). Risk and Uncertainty: A Fallacy of Large Numbers. *Scientia, 98*, 108–113.
8. **Ariely, D.** (2008). *Predictably Irrational: The Hidden Forces That Shape Our Decisions*. HarperCollins.
9. **Thaler, R. H., & Sunstein, C. R.** (2008). *Nudge: Improving Decisions About Health, Wealth, and Happiness*. Yale University Press.
