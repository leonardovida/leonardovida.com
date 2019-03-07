---
title: "Remodelling Interactions on Facebook: my current thoughts"
date: "2019-02-11T12:00:00.000Z"
template: "post"
draft: false
slug: "/blog/remodeling-interaction-on-facebook/"
img: "/media/neural-network-post/network3.png"
category: "tech"
tags:
  - "Facebook"
  - "Tech"
description: "A summary of my current thoughts around Facebook. I focus on the interaction between 2018's events and the strategic signals from Facebook's Q4 earnings call. ."
prev: "/blog/properly-size-images/"
next: "/blog/better-profanity-detection-with-scikit-learn/"
---
## **Context**

In the past 2 years, Facebook has been under attacked from media, regulators and governments in a myriad of countries. This attention derives in the first place by mistakes Facebook committed. But policymakers' misinterpretation [did not help.](https://www.theverge.com/2018/12/14/18140146/does-facebook-sell-data-debate-volume-infinity) Today's narrative sees policymakers willing to regulate Facebook and a growing number of people pushing for a mass exodus out of Facebook altogether [[1](https://www.nytimes.com/2018/11/24/opinion/sunday/facebook-immoral.html); [2](https://medium.com/s/story/yes-you-should-delete-facebook-heres-why-bc623a3b4625); [3](https://medium.com/newco/its-the-advertising-model-stupid-b843cd7edbe9) ] (although Facebook's latest number do not show any significant impact). 

During Facebook's recent [earnings call](https://s21.q4cdn.com/399680738/files/doc_financials/2018/Q4/Q4-2018-earnings-call-transcript.pdf), Zuckerberg highlighted the main steps that Facebook has been taking. The key phrase representing the company's decision is:

> "[...] we've fundamentally **changed how we run this company**. We’ve changed how we build services to **focus more on preventing harm**. We've invested billions of dollars in security, which has affected our profitability. We've taken steps that **reduced engagement** in WhatsApp to stop misinformation, and reduced viral videos in Facebook by more than 50 million hours a day to **improve well-being.**" (Accents are mine).

Summarising the Q4 conference call, Zuckerberg's ambition is to:

1.  Make progress on the major social issues facing the internet and the company;
2.  Build new experiences to that "_meaningfully"_ improve people's lives;
3.  Continue improving services offered to (small) businesses;
4.  Communicate about what Facebook is doing and the role of its services.

## **Goal**

In this context there is one key point that Facebook must take into consideration to prevent and reduce future harm to its business:

*   **Self-regulation will lead to better outcomes than to external regulation.** As a consequence, there is the need of **remodelling  how interactions currently take place on the platform.** The real danger is not represented by the regulators. Instead it is the growing opinion that "_Using Facebook is bad for you_".

In particular, going back to Zuckerberg's points:

> Make progress on the major social issues facing the internet and the company

There is a scaring lack of numbers on the "progresses made on major social issues". This point ties with (4), as Facebook needs become better at communicating its actions. A higher degree of transparency can shape public opinion and be used as a competitive advantage:

*   Becoming the first tech company with an open and clear policy on social issues;
*   Opening up to third-party research projects;
*   Listening to critique and engaging in debates.

> Build new experiences to that "_meaningfully"_ improve people's lives

Major improvements to people's lives go along with improvements to small businesses (3). Here Mark wants people to feel like they are "_doing something new that were not doing before"_. This is very important. This translates into a shift from **passively** receiving information to **actively** engaging with the content on Facebook.

## **Proposed approaches**

Clearly, the shift from maximising "Times Spent" (TS) to maximising "Time Well Spent" (TWS)  is not a one-step solution. The concept of "Time Well Spent" is similar to what Zuckerberg already outlined in [this post](https://www.facebook.com/notes/mark-zuckerberg/a-blueprint-for-content-governance-and-enforcement/10156443129621634/). This idea has already been around for quite some time; but only recently received the a wave of attention. A very interesting academic paper on this topic is this [one, which proves the beneficial effects of TWS.](https://psycnet.apa.org/record/2015-08049-001)

As this is not a one-step solution but rather a strategic direction, here below I share three of the most realistic and fast actions I see possible for Facebook:

*   **Establish a present and direct communication with Facebook communities/ groups.** By creating new communication channels with groups and communities Facebook would make them feel more empowered and able to self-direct. Facebook could put itself into direct communication with groups empowering them with the creation of local policies (in line with the Community Guidelines) but allowing them to overall respond faster to the rise of controversial content and improving the interactions' quality. I would see these people running a position similar to what now Facebook gives to its "Market Operation Specialists" ([Example](https://www.facebook.com/careers/jobs/1712152178894262/))
*   **Introduce tool(s) to regulate personal Facebook usage.** This would allow the user to select limits to Facebook categories  (videos, groups, newsfeed) or to the whole platform. The tool could also have a standard baseline set by default and modified as required by the user. This could result in the user feeling more "empowered" thanks to the ability of controlling "his Facebook".
    *   Last year, Facebook presented a similar approach at F8\. However, although it is still cited in the <a href="">Hard Questions</a> and [Safety and Wellbeing](https://newsroom.fb.com/news/category/safety-and-wellbeing/) section of Facebook, no more updates were shared on its progress. 
*   **Improve the "tweaking ability" of personal preferences**. This point could take the form of preferences that would allow to modify the algorithmic "polarisation" of recommended content. This could also push the user to discovery more diverse content.  

## **Impact**

Adopting this strategic choice would have radical effects on Facebook's business model. 

We have to recognise that there could be a negative impact on content engagement. This would be in line with the strategic choice of reducing total TS per user, while increasing TWS per user. In this regard, there are some points that one needs to consider before jumping to the conclusion of a negative impact on revenues from advertisers. 

While it is true that with a reduction on total TS less ads will be served, this **does not necessarily implies less revenues per ad and user**. From a basic economics standpoint, Facebook is duopolist in the digital advertisement business and therefore is able to extract higher-than-normal profits from its customers (advertisers). In this context, ads "_views_" (engagement metrics) in a context of maximisation of TS are worth less than ads _views_ in a context of maximisation of TWS. Put in other words, when around non-meaningful content, **ads are worth less to the user** (and therefore also to the advertisers) than when surrounded by significative and engaging content. If a person is used to consume a lot of non-meaningful content, ads will be seen as belonging to the same category (if not worse - because of their intrusiveness). On the other hand, if the content would be more engaging and meaningful (the TWS maximisation-paradigm), people **would hold ads in higher consideration**. If the content with which I usually read and engage with is good and high quality content, _I will continue to assume so even if this content is sponsored_ (in this regard I would be interested in discussing possible upper limits of ad-quality). Assuming the truth of what written above, the reduced amount of time on people would spend on Facebook thanks to tools and self limitation, would become effectively a ceiling for which the advertisers would have to bid to have access to. This bidding process could not only lead to higher revenues for Facebook, but also to **higher ads content quality** - Facebook could give discounts to ads prices the higher the quality of the content (measured in TWS metrics).

**On the flip side**, this opportunity could bring attention from the public, decreased regulation pressure by the authority, and stabilise Facebook position even more. Q4 numbers showed an increase in MAUs (US & Canada were stable) and DAUs across the board. Recent articles showed not only how difficult it is to make people leave Facebook ([1000$-2000$ to leave Facebook for a year](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0207101)), but also how difficult it is to make people substitute Facebook with other services. This point goes hand in hand with the previous one. [A New York Times article](https://www.nytimes.com/2019/01/30/health/facebook-psychology-health.html) reporting on a study of effects from leaving facebook says: "“I would have expected more substitution from Facebook to other digital things — Twitter, Snapchat, online browsing,” said Dr. Gentzkow. “That didn’t happen, and for me, at least, it was a surprise.”. This result is important because it highlights two effects. First, it shows Facebook has the leverage of modifying itself much more than what we first believed. Second, it shows that people are already searching for new compelling ways to engage with content. More precisely, the article and paper show a higher demand for content that allows you to know "[you are consuming content] with people interested in the same thing"; this highlights the weight of live streaming and communities. Interestingly enough, the [Stanford study](http://web.stanford.edu/~gentzkow/research/facebook.pdf) found out that after 2 months, only 5% of the people were still abstaining from using Facebook.

I believe that Facebook has **not only the power and the luxury** to make a shift of this proportion without alarming impacts on its balance sheet, **but it also has the moral duty** to try to do so.

Thanks for reading!
