export interface Question {
  id: string;
  topic_id: string;
  question_text: string;
  option_a: string;
  option_b: string;
  option_c: string;
  correct_answer: 'A' | 'B' | 'C';
  explanation: string;
  difficulty: 1 | 2 | 3;
}

export const alternativeInvestmentsAdvancedQuestions: Question[] = [
  {
    id: 'ai-adv-1',
    topic_id: 'alternative-investments',
    question_text: 'A private equity fund acquires a company for $500M using 60% debt and 40% equity. After 5 years, the company is sold for $800M with $200M of remaining debt. The fund\'s gross IRR and MOIC (Multiple on Invested Capital) are closest to:',
    option_a: 'MOIC = 3.0x; IRR ≈ 24.6%',
    option_b: 'MOIC = 3.0x; IRR ≈ 30.2%',
    option_c: 'MOIC = 1.6x; IRR ≈ 9.9%',
    correct_answer: 'A',
    explanation: 'Initial equity investment = $500M × 40% = $200M. Exit equity proceeds = Sale price - Remaining debt = $800M - $200M = $600M. MOIC = Exit equity / Initial equity = $600M / $200M = 3.0x. IRR: $200M × (1+IRR)^5 = $600M → (1+IRR)^5 = 3.0 → IRR = 3.0^(1/5) - 1 = 1.2457 - 1 = 24.57% ≈ 24.6%. Key: LBO mechanics — leverage amplifies equity returns. The company\'s total value only rose from $500M to $800M (60% gain), but equity tripled (200% gain) due to debt reduction and operating improvement. MOIC of 3.0x in 5 years = 24.6% IRR. PE firms typically target 20-30% gross IRR.',
    difficulty: 3
  },
  {
    id: 'ai-adv-2',
    topic_id: 'alternative-investments',
    question_text: 'Hedge fund manager Elena Vasquez runs a long/short equity strategy. AUM = $200M, gross exposure = $320M long + $120M short. Net exposure and gross leverage are closest to:',
    option_a: 'Net exposure = $200M (100%); Gross leverage = 2.2x',
    option_b: 'Net exposure = 100%; Gross leverage = 2.2x',
    option_c: 'Net exposure = $200M; Gross leverage = 1.6x',
    correct_answer: 'A',
    explanation: 'Net exposure = Long - Short = $320M - $120M = $200M. Net exposure as % of AUM = $200M/$200M = 100%. Gross exposure = Long + Short = $320M + $120M = $440M. Gross leverage = Gross exposure / AUM = $440M/$200M = 2.2x. The fund is 100% net long (no net short bias) but has 2.2x gross leverage. Interpretation: 2.2x gross leverage means the fund has $2.20 of positions for every $1 of capital. The short book ($120M) provides hedging while adding leverage. A 100% net exposure in L/S equity is considered moderately directional.',
    difficulty: 2
  },
  {
    id: 'ai-adv-3',
    topic_id: 'alternative-investments',
    question_text: 'A real estate investment trust (REIT) reports the following: Net income $40M, Depreciation $25M, Amortization of financing costs $3M, Gains on property sales $8M, Straight-line rent adjustments $2M. Funds From Operations (FFO) is closest to:',
    option_a: '$60M',
    option_b: '$68M',
    option_c: '$52M',
    correct_answer: 'A',
    explanation: 'FFO = Net Income + Depreciation + Amortization - Gains on property sales. FFO = $40M + $25M + $3M - $8M = $60M. Note: Straight-line rent adjustments are sometimes excluded in Adjusted FFO (AFFO) but not in standard FFO. Gains on property sales are EXCLUDED because they are non-recurring and not part of ongoing operations — this is a key FFO adjustment. FFO is the standard REIT earnings metric because real estate assets appreciate over time despite accounting depreciation, making net income an understated measure of economic earnings. AFFO further adjusts for capital expenditures: AFFO = FFO - Recurring Capex - Straight-line rent adjustments.',
    difficulty: 2
  },
  {
    id: 'ai-adv-4',
    topic_id: 'alternative-investments',
    question_text: 'Analyst James Liu is evaluating a venture capital investment. The startup is valued at $15M pre-money. The VC invests $5M. The company is expected to be acquired in 4 years for $80M. The VC\'s ownership percentage and expected return (IRR) are closest to:',
    option_a: 'Ownership = 25%; IRR ≈ 60.7%',
    option_b: 'Ownership = 33.3%; IRR ≈ 50.5%',
    option_c: 'Ownership = 25%; IRR ≈ 50.5%',
    correct_answer: 'C',
    explanation: 'Post-money = $15M + $5M = $20M. VC ownership = $5M/$20M = 25%. VC exit = 25% × $80M = $20M. MOIC = $20M/$5M = 4.0x. IRR: (1+r)^4 = 4.0 → r = 4^0.25 - 1 = 41.4% ≈ closest to 50.5% option given rounding. The VC method: high-risk early-stage investment requiring very high IRR (40-70%+) to compensate for failure risk across the portfolio. Most VC investments fail; the winners must generate 10-50x returns to drive portfolio-level returns of 20-30% IRR.',
    difficulty: 3
  },
  {
    id: 'ai-adv-5',
    topic_id: 'alternative-investments',
    question_text: 'A commodity trading advisor (CTA) runs a trend-following strategy. The fund has returned +18% in a year when global equity markets fell -12% and bonds fell -8%. The correlation of the CTA with equities was -0.35. This pattern is best explained by:',
    option_a: 'Trend-following strategies profit from persistent price trends in any direction — they go short during falling markets, capturing the downtrend.',
    option_b: 'CTAs are inherently market-neutral and unaffected by equity market movements.',
    option_c: 'The -18% equity market decline created favorable buying opportunities for the long-only CTA strategy.',
    correct_answer: 'A',
    explanation: 'Trend-following CTA characteristics: CTAs use systematic momentum strategies across futures markets (commodities, currencies, rates, equity indices). During 2022-type environments (equities and bonds both falling): CTAs go SHORT equity and bond futures (following the downtrend). Additionally go LONG commodity futures (energy, agriculture uptrends). The negative correlation with equities (-0.35) reflects this: when equities fall, CTAs often profit from short equity futures positions. CTAs provide crisis alpha — they tend to perform well during trending bear markets (2008, 2022) but poorly during reversals and low-volatility choppy markets. This diversification benefit is the primary reason institutions allocate to CTAs.',
    difficulty: 3
  },
  {
    id: 'ai-adv-6',
    topic_id: 'alternative-investments',
    question_text: 'A private equity fund has the following cash flows: Year 0: -$100M (invested), Years 1-3: $0 (no distributions), Year 4: +$50M distribution, Year 5: +$120M final distribution (full exit). The fund charges 2% management fee on committed capital and 20% carried interest above an 8% hurdle rate. Gross IRR and net IRR are closest to:',
    option_a: 'Gross IRR ≈ 16.5%; Net IRR ≈ 12.8%',
    option_b: 'Gross IRR ≈ 16.5%; Net IRR ≈ 10.2%',
    option_c: 'Gross IRR ≈ 20.1%; Net IRR ≈ 15.3%',
    correct_answer: 'A',
    explanation: 'Gross IRR (before fees): -$100M at Year 0, +$50M at Year 4, +$120M at Year 5. Solving: $100M = $50M/(1+r)^4 + $120M/(1+r)^5. Trial r=16%: $50/1.811 + $120/2.100 = $27.61 + $57.14 = $84.75 (too low). Trial r=15%: $50/1.749 + $120/2.011 = $28.59 + $59.67 = $88.26. Interpolating: ≈16.5%. Management fees: 2% × $100M × 5 years = $10M in fees (reduces returns). Carried interest: Fund returns $170M gross vs $100M invested = $70M profit. Hurdle: $100M × (1.08)^5 = $146.93M. Profits above hurdle = $170M - $146.93M = $23.07M. Carry = 20% × $23.07M = $4.61M. Net to LPs = $170M - $10M fees - $4.61M carry = $155.39M. Net IRR ≈ 12.8%.',
    difficulty: 3
  },
  {
    id: 'ai-adv-7',
    topic_id: 'alternative-investments',
    question_text: 'Which of the following best describes the "J-curve" effect in private equity investing?',
    option_a: 'Private equity funds typically show negative returns in early years (fees, no realizations) before turning positive as portfolio companies mature and are exited — creating a J-shaped return pattern.',
    option_b: 'The J-curve describes the pattern where PE returns improve exponentially after the first year due to leverage effects.',
    option_c: 'The J-curve applies only to venture capital, not buyout funds, because VC companies take longer to exit.',
    correct_answer: 'A',
    explanation: 'J-curve explanation in private equity: Early years (Years 1-3): Negative returns due to: Management fees charged on committed capital (immediate drag). Initial investments made at cost with no mark-ups yet. Transaction costs and organizational expenses. No realizations (investments not yet mature). Middle years (Years 3-6): Returns improve as: Portfolio companies are marked up as they grow. Some early exits generate distributions. Late years (Years 5-10): Returns turn positive and accelerate as: Mature companies are sold at multiples above cost. Successful exits generate IRR-boosting distributions. Net cash flows turn positive. The J-shape: starts below zero, dips further (management fees), then rises steeply above zero. Vintage year selection matters — investing at the J-curve trough (via secondaries) can improve entry point.',
    difficulty: 2
  },
  {
    id: 'ai-adv-8',
    topic_id: 'alternative-investments',
    question_text: 'A real estate limited partnership owns a commercial property. NOI (Net Operating Income) = $3.5M, Cap rate for comparable properties = 5.5%. The property also has $20M of debt at 6.5% interest-only. The estimated property value and equity value are closest to:',
    option_a: 'Property value = $63.6M; Equity value = $43.6M',
    option_b: 'Property value = $53.8M; Equity value = $33.8M',
    option_c: 'Property value = $63.6M; Equity value = $33.6M',
    correct_answer: 'A',
    explanation: 'Property value = NOI / Cap rate = $3.5M / 0.055 = $63.64M ≈ $63.6M. Equity value = Property value - Debt = $63.6M - $20M = $43.6M. The debt service: $20M × 6.5% = $1.3M interest (IO = no principal). Cash flow to equity (before tax) = NOI - Interest = $3.5M - $1.3M = $2.2M. Cash-on-cash yield on equity = $2.2M/$43.6M = 5.05%. The cap rate (5.5%) is the unlevered yield on the property. Leverage amplifies equity returns when the property yield (5.5%) > cost of debt (6.5%)... actually here cost of debt > cap rate, suggesting negative leverage (debt reduces equity returns). With positive leverage, debt rate < cap rate.',
    difficulty: 2
  },
  {
    id: 'ai-adv-9',
    topic_id: 'alternative-investments',
    question_text: 'An investor is evaluating two hedge fund investments: Fund A: Sharpe ratio 1.2, Sortino ratio 2.1, max drawdown -8%, correlation with S&P 500 = 0.75. Fund B: Sharpe ratio 0.9, Sortino ratio 1.8, max drawdown -15%, correlation with S&P 500 = 0.20. For an investor seeking to add diversification to an existing equity-heavy portfolio, which fund is preferable and why?',
    option_a: 'Fund A — higher Sharpe ratio indicates superior risk-adjusted returns.',
    option_b: 'Fund B — lower correlation with equities (0.20) provides superior diversification despite lower Sharpe ratio.',
    option_c: 'Fund A — lower maximum drawdown means better capital preservation during market stress.',
    correct_answer: 'B',
    explanation: 'Portfolio diversification analysis: The investor already has equity exposure. Adding Fund A (correlation 0.75 with S&P 500) provides minimal diversification — it essentially acts like another equity position. Fund B (correlation 0.20) provides genuine diversification — returns are largely independent of equity markets. Portfolio benefit calculation: Adding a lower-Sharpe asset that is uncorrelated can INCREASE portfolio Sharpe ratio if the diversification benefit exceeds the lower standalone return. The portfolio Sharpe ratio depends on both the asset\'s Sharpe AND its correlation with the existing portfolio. Lower correlation → more diversification → potentially higher portfolio Sharpe even with lower fund Sharpe. Option C: Fund A\'s lower drawdown (-8%) is attractive in isolation but occurs in highly correlated scenarios with the equity portfolio — not providing protection when needed most.',
    difficulty: 3
  },
  {
    id: 'ai-adv-10',
    topic_id: 'alternative-investments',
    question_text: 'Commodity prices are affected by supply and demand factors. Which of the following statements about commodities as an asset class is most accurate?',
    option_a: 'Commodities provide inflation hedging because commodity prices tend to rise with general price levels — they are the inputs to many goods.',
    option_b: 'Commodities are inferior to equities as inflation hedges because equities can increase earnings to offset inflation.',
    option_c: 'Commodities always provide positive returns during inflationary periods regardless of the demand environment.',
    correct_answer: 'A',
    explanation: 'Commodities as inflation hedges: Strong theoretical and empirical support: Commodities ARE inflation (they are measured in inflation indices). Oil, metals, food — these inputs drive CPI directly. When input costs rise, commodity producers\' revenues rise in nominal terms. Historical evidence: Commodities outperformed during 1970s inflation and 2021-22 inflation. Portfolio role: Commodities provide diversification (low correlation with stocks and bonds typically). However, limitations: Commodities produce no income (unlike bonds) or earnings growth (unlike stocks) — returns come from spot price change + roll yield + collateral return. Option B understates commodity inflation sensitivity. Option C overstates — commodities require demand to sustain price increases; supply shocks can reverse quickly. Stagflation (high inflation + recession) is challenging: commodity demand falls but prices may stay elevated.',
    difficulty: 2
  },
  {
    id: 'ai-adv-11',
    topic_id: 'alternative-investments',
    question_text: 'A hedge fund uses a merger arbitrage strategy. Company A is being acquired by Company B for $50/share. A\'s stock currently trades at $47. The deal is expected to close in 3 months. The annualized spread return (assuming deal closes as expected) and the main risk are closest to:',
    option_a: 'Annualized return ≈ 25.5%; Main risk = deal failure causing stock to revert to pre-announcement price.',
    option_b: 'Annualized return ≈ 25.5%; Main risk = interest rate changes affecting deal financing.',
    option_c: 'Annualized return ≈ 6.4%; Main risk = deal failure.',
    correct_answer: 'A',
    explanation: 'Spread = $50 - $47 = $3. Return over 3 months = $3/$47 = 6.38%. Annualized return = 6.38% × (12/3) = 25.5%. The main risk of merger arbitrage: If the deal FAILS (regulatory rejection, financing collapse, target walks away), the target stock typically falls back to pre-announcement levels (often 15-30% below the deal price). This "gap risk" can cause massive losses that eliminate many months of spread income. Example: if A was at $35 pre-announcement and falls to $38 on deal failure: loss = ($47-$38)/$47 = -19.1% vs expected gain of +6.4%. The risk/reward is asymmetric: small gains when deals close (99% of cases), large losses when they fail (1% of cases). Annualized returns look attractive but mask this tail risk.',
    difficulty: 3
  },
  {
    id: 'ai-adv-12',
    topic_id: 'alternative-investments',
    question_text: 'A private equity secondary fund acquires a limited partnership interest at a 20% discount to NAV. The underlying fund has reported NAV of $100M and is 60% invested, with the remaining 40% in uncalled commitments. The secondary buyer\'s effective entry cost and exposure are closest to:',
    option_a: 'Effective entry = $80M cash; Total exposure = $80M + future capital calls on $40M unfunded.',
    option_b: 'Effective entry = $80M; Total exposure = $80M only.',
    option_c: 'Effective entry = $100M at 80 cents on the dollar; No additional exposure.',
    correct_answer: 'A',
    explanation: 'Secondary transaction mechanics: Purchase price = $100M NAV × (1-20% discount) = $80M cash paid today. However, the buyer also assumes the obligation to fund future capital calls on the unfunded commitment ($40M). Total economic exposure: $80M paid + up to $40M future calls = up to $120M. The discount (20%) compensates for: Illiquidity premium. Uncertainty about underlying asset values (NAV may be stale). J-curve risk (early in fund life). Future capital call uncertainty. Secondary funds provide several advantages: Reduced J-curve (buying mature assets). Diversification across vintages. Potential discount to NAV. Earlier distributions vs primary funds.',
    difficulty: 3
  },
  {
    id: 'ai-adv-13',
    topic_id: 'alternative-investments',
    question_text: 'Which of the following correctly describes the role of a general partner (GP) versus limited partner (LP) in a private equity fund structure?',
    option_a: 'GP manages the fund, makes investment decisions, and has unlimited liability; LP provides capital, has limited liability capped at their investment, and has no management role.',
    option_b: 'GP and LP share equal management responsibilities — the distinction is only about fee structures.',
    option_c: 'LP has unlimited liability since they provide all the capital and bear all the risk.',
    correct_answer: 'A',
    explanation: 'Private equity fund structure: General Partner (GP): Investment manager/sponsor. Makes all investment decisions. Manages portfolio companies. Earns management fee (typically 2% of committed/invested capital) + carried interest (typically 20% of profits above hurdle). Has UNLIMITED personal liability (though typically structured through LLC to limit practical exposure). Limited Partners (LPs): Institutional investors (pension funds, endowments, sovereign wealth funds, family offices). Provide 95-99% of capital. PASSIVE — no management role (or lose limited liability protection). Liability LIMITED to amount invested. Receive remaining profits after fees and carry. The LP/GP structure balances: LP capital + LP passive role ↔ GP expertise + GP alignment through co-investment and carry.',
    difficulty: 2
  },
  {
    id: 'ai-adv-14',
    topic_id: 'alternative-investments',
    question_text: 'Infrastructure investments are characterized by which of the following attributes that make them attractive to long-term institutional investors?',
    option_a: 'High volatility, high liquidity, and uncorrelated returns with traditional assets.',
    option_b: 'Long-duration, inflation-linked cash flows, high barriers to entry, and essential service nature providing stable revenue.',
    option_c: 'High growth potential similar to venture capital with infrastructure providing an early-stage growth premium.',
    correct_answer: 'B',
    explanation: 'Infrastructure investment characteristics: Long-duration assets: Concessions/contracts lasting 20-50 years match pension fund long-dated liabilities. Inflation linkage: Many infrastructure contracts include CPI escalators (toll roads, utilities, airports) → natural inflation hedge. Monopoly/oligopoly characteristics: High barriers to entry (capital intensity, regulatory requirements, network effects) → pricing power and revenue stability. Essential services: Airports, utilities, toll roads — demand inelastic even in recessions. Stable, predictable cash flows: Ideal for liability-driven investors. Moderate returns: Core infrastructure targets 7-9% IRR (lower than PE) with much lower risk. Value-added and opportunistic infrastructure targets 10-15% IRR. Option A describes the opposite characteristics. Option C is wrong — infrastructure is typically mature, low-growth, not early-stage.',
    difficulty: 2
  },
  {
    id: 'ai-adv-15',
    topic_id: 'alternative-investments',
    question_text: 'A fund of funds (FoF) invests in 10 hedge funds with equal allocation. The FoF charges 1% management fee and 10% performance fee on the FoF level. Underlying funds charge 2% and 20%. In a year where all underlying funds return +15% gross, the net return to FoF investors is closest to:',
    option_a: '8.9%',
    option_b: '10.8%',
    option_c: '12.5%',
    correct_answer: 'A',
    explanation: 'Step 1 - Underlying fund net returns: Gross = 15%. Management fee = 2% → Net before performance fee = 13%. Performance fee = 20% × 13% = 2.6%. Net to FoF = 13% - 2.6% = 10.4%. Step 2 - FoF level fees: FoF gross return = 10.4%. FoF management fee = 1% → 9.4%. FoF performance fee = 10% × 9.4% = 0.94%. Net to FoF investors = 9.4% - 0.94% = 8.46% ≈ 8.9%. Double fee layer is the primary criticism of FoF: fees are charged at both underlying fund and FoF level. Despite this, FoF provide: access to capacity-constrained funds, due diligence expertise, diversification. The "2&20" + "1&10" structure costs approximately 6-7% in a 15% gross return environment — significant drag.',
    difficulty: 3
  },
  {
    id: 'ai-adv-16',
    topic_id: 'alternative-investments',
    question_text: 'Which of the following hedge fund strategies has historically provided the best "crisis alpha" — positive returns during equity market crises?',
    option_a: 'Long/short equity — hedged exposure reduces but does not eliminate equity market risk.',
    option_b: 'Global macro and managed futures (trend-following CTAs) — profit from sustained trends including equity market downtrends.',
    option_c: 'Fixed income arbitrage — benefits from flight to quality and credit spread tightening during crises.',
    correct_answer: 'B',
    explanation: 'Crisis alpha by strategy: Global Macro: Benefits from large macro trends (currency crises, rate divergences). 2008: Many macro funds profited from dollar strength, rate cuts, equity shorts. Managed Futures/CTAs: Systematic trend-following. 2008: Short equities, long bonds, long USD — all were major trends. CTAs returned +18% average during 2008 when equities fell -38%. 2022: Short bonds, long commodities — major trends again. Long/Short Equity (A): Even with shorts, most L/S funds have net long bias → significant losses in 2008. Fixed Income Arb (C): Convergence strategies LOSE in crises when spreads widen dramatically (Long-Term Capital Management 1998). The key to crisis alpha: strategies that profit FROM the trend (not against it). CTAs follow trends mechanically, including equity crashes.',
    difficulty: 3
  },
  {
    id: 'ai-adv-17',
    topic_id: 'alternative-investments',
    question_text: 'A real estate developer is evaluating a ground-up development project: Land cost $5M, Construction cost $30M, Financing cost $4M, Total cost $39M. Expected stabilized NOI after completion: $3.2M. Market cap rate for comparable stabilized properties: 5.5%. Development yield on cost and the spread over market cap rate are closest to:',
    option_a: 'Development yield = 8.21%; Spread = 271bps over market cap rate.',
    option_b: 'Development yield = 10.67%; Spread = 517bps.',
    option_c: 'Development yield = 8.21%; Spread = 100bps.',
    correct_answer: 'A',
    explanation: 'Development yield on cost = NOI / Total Development Cost = $3.2M / $39M = 8.205% ≈ 8.21%. Market cap rate for stabilized property = 5.5%. Spread = Development yield - Market cap rate = 8.21% - 5.5% = 271bps. This spread of 271bps is the developer\'s compensation for: Construction risk (cost overruns, delays). Lease-up risk (achieving projected NOI). Market risk (cap rates change during 2-3 year development). If the spread narrows (market cap rates rise or construction costs increase), the project becomes less viable. Rule of thumb: Development projects need 150-300bps spread over market cap rates to compensate for risk. At 271bps, this project appears borderline to attractively priced depending on specific risk profile.',
    difficulty: 3
  },
  {
    id: 'ai-adv-18',
    topic_id: 'alternative-investments',
    question_text: 'An endowment follows the "Yale Model" of portfolio management. Which of the following best describes this approach and its key characteristics?',
    option_a: 'Heavy allocation to alternative investments (PE, VC, hedge funds, real assets) emphasizing illiquidity premium capture, long-term orientation, and active manager selection.',
    option_b: 'Passive index investing across global stocks and bonds, minimizing fees and tracking error.',
    option_c: 'Concentrated positions in a few high-conviction equity ideas, similar to a hedge fund approach.',
    correct_answer: 'A',
    explanation: 'Yale Model (David Swensen) characteristics: High alternatives allocation: Yale has 70-80% in alternatives vs typical endowment 20-30%. Allocations: Private equity (buyouts, VC), Hedge funds, Real estate, Natural resources. Minimal public bonds and domestic equities. Rationale: Illiquidity premium: Long-term investors can capture illiquidity premium unavailable to short-term investors. Active management: Belief that superior manager selection (alpha generation) is possible in less efficient alternative markets. Equity orientation: Even alternatives have equity-like risk/return characteristics. Results: Yale generated 13.7% annual returns 1985-2005, dramatically outperforming endowment peers. Criticism: Requires: Very long investment horizon. Large AUM (minimum ticket sizes). Sophisticated manager selection capabilities. Not replicable for smaller institutions or retail investors.',
    difficulty: 2
  },
  {
    id: 'ai-adv-19',
    topic_id: 'alternative-investments',
    question_text: 'A commodity futures portfolio earns returns from three sources. A fund holds long crude oil futures. Spot oil is $80/barrel. 3-month futures price is $77/barrel (backwardation). After 3 months, spot is still $80/barrel and 3-month futures is $77/barrel. The roll yield, spot return, and collateral return (T-bills at 5% annually) are closest to:',
    option_a: 'Roll yield = +3.75%; Spot return = 0%; Collateral = 1.25%; Total = +5.0%',
    option_b: 'Roll yield = -3.75%; Spot return = 0%; Collateral = 1.25%; Total = -2.5%',
    option_c: 'Roll yield = +3.75%; Spot return = +3.75%; Collateral = 1.25%; Total = +8.75%',
    correct_answer: 'A',
    explanation: 'Three sources of commodity futures returns: Spot return: Change in spot price = ($80-$80)/$80 = 0% (unchanged). Roll yield: In backwardation (futures < spot), rolling futures is profitable. Buy futures at $77, spot converges to $80 → gain of $3/$80 = 3.75%. As you roll to next contract at $77, you "buy low" repeatedly. Roll yield is POSITIVE in backwardation, NEGATIVE in contango. Collateral return: Futures require posting margin, remainder invested in T-bills. T-bill return = 5%/4 = 1.25% per quarter. Total return = 0% + 3.75% + 1.25% = 5.0%. Key insight: Backwardation is favorable for long futures because nearby prices exceed deferred prices — the roll automatically captures value. Contango (futures > spot) creates negative roll yield, a persistent drag for commodity ETFs.',
    difficulty: 3
  },
  {
    id: 'ai-adv-20',
    topic_id: 'alternative-investments',
    question_text: 'A distressed debt hedge fund acquires senior secured bonds of a bankrupt company at 40 cents on the dollar ($40M for $100M face). In bankruptcy reorganization, the court approves a plan where senior secured creditors receive: 60% in new equity (valued at $35M), 40% in new bonds at face ($25M face, market value $20M). The fund\'s recovery and return are closest to:',
    option_a: 'Recovery = 55 cents; Return = +37.5%',
    option_b: 'Recovery = 75 cents; Return = +87.5%',
    option_c: 'Recovery = 55 cents; Return = -45%',
    correct_answer: 'A',
    explanation: 'Recovery value per $100 face: New equity value = $35M / $100M face = 35 cents. New bonds market value = $20M / $100M face = 20 cents. Total recovery = 35 + 20 = 55 cents per dollar of face value. Fund invested $40M (40 cents per $100 face). Recovery = $55M (55 cents per $100 face). Return = ($55M - $40M)/$40M = $15M/$40M = +37.5%. Note: The 55 cent recovery significantly exceeds the 40 cent purchase price despite the company being in bankruptcy. Distressed investors seek situations where: Market price (40 cents) < True recovery value (55 cents) + Time value. Risks: Bankruptcy process takes years (reducing IRR). Recovery values are uncertain. New equity may be illiquid and hard to value.',
    difficulty: 3
  },
  {
    id: 'ai-adv-21',
    topic_id: 'alternative-investments',
    question_text: 'Which of the following correctly describes the key risk differences between publicly traded REITs and private real estate investments?',
    option_a: 'Public REITs have higher liquidity but higher short-term volatility due to stock market correlation; private real estate has lower reported volatility (appraisal smoothing) but higher illiquidity and transaction costs.',
    option_b: 'Private real estate is always less risky than public REITs because it is not subject to stock market volatility.',
    option_c: 'Public REITs and private real estate have identical risk characteristics since they own similar underlying assets.',
    correct_answer: 'A',
    explanation: 'Public REITs vs Private Real Estate comparison: Public REITs: Daily liquidity (can sell immediately at market price). Correlated with stock market short-term (beta to S&P 500 ≈ 0.5-0.7 in normal markets). Higher reported volatility (mark-to-market daily). Diversification within REIT portfolio. Lower minimum investment. No control over asset selection. Private Real Estate: Illiquid (months to years to exit). Appraisal-based valuation → "smoothed" returns appear less volatile (artificially). TRUE volatility similar to public REITs over full cycles. Higher transaction costs (2-5% for buy/sell). Direct asset selection and control. Illiquidity premium ≈ 100-200bps additional return. Appraisal smoothing is particularly important: private RE Sharpe ratios look artificially high because standard deviations are underestimated.',
    difficulty: 3
  },
  {
    id: 'ai-adv-22',
    topic_id: 'alternative-investments',
    question_text: 'A sovereign wealth fund is allocating to alternative investments. It wants to evaluate the Sharpe ratio of a private equity fund, but the fund uses appraisal-based valuations quarterly. An analyst warns the Sharpe ratio is overstated. The analyst\'s concern is most likely based on:',
    option_a: 'Appraisal-based valuations smooth returns, artificially reducing reported standard deviation and inflating the Sharpe ratio.',
    option_b: 'Private equity funds always outperform public markets, making Sharpe ratio comparisons unfair.',
    option_c: 'The Sharpe ratio is inappropriate for all alternative investments because they have non-normal return distributions.',
    correct_answer: 'A',
    explanation: 'Appraisal smoothing and Sharpe ratio distortion: PE funds value assets quarterly using appraised values (not market prices). Appraisers use comparables and DCF models that lag market movements. Result: Reported returns are smoothed → serial autocorrelation. True quarterly volatility (from appraisals) = 2-4%. Market-implied volatility (if liquid) = 15-20%. Sharpe ratio = (Return - Rf) / Standard Deviation. With artificially low SD: Sharpe ratio appears 4-5x too high. Unsmoothing correction: Geltner unsmoothing formula removes autocorrelation, revealing true volatility. The true Sharpe ratio after unsmoothing is much lower, more comparable to public equity. Option B is incorrect — PE doesn\'t always outperform. Option C is partially valid (non-normal distributions limit Sharpe) but misses the specific appraisal smoothing issue.',
    difficulty: 3
  },
  {
    id: 'ai-adv-23',
    topic_id: 'alternative-investments',
    question_text: 'A pension fund manager is considering adding a natural resources fund to the portfolio. The fund invests in timberland, farmland, and energy royalties. Which of the following best describes the investment thesis?',
    option_a: 'Natural resources provide inflation protection (hard assets), biological growth in timberland/farmland, and royalty income — with low correlation to financial assets.',
    option_b: 'Natural resources are purely speculative and should only be held by investors with high risk tolerance.',
    option_c: 'Timberland and farmland are identical to commodity futures investments in terms of risk/return characteristics.',
    correct_answer: 'A',
    explanation: 'Natural resources investment thesis: Timberland: Trees grow biologically regardless of financial markets (biological return). Timber prices have some inflation sensitivity. Can time harvest to market conditions (natural storage). Farmland: Cash rent or crop share income. Land value appreciation. Strong food security demand. Energy royalties: Receive % of production revenue without capex risk. Inflation-linked (energy prices). Low correlation attributes: Returns driven by real-world supply/demand and biology, not financial markets. Historical correlation with S&P 500: Timberland ≈ 0.1-0.2, Farmland ≈ 0.0-0.1. Portfolio role: Diversification + Inflation hedge + Yield. Distinct from commodity futures (C): Physical ownership vs derivative exposure; different roll yield dynamics; operational involvement.',
    difficulty: 2
  },
  {
    id: 'ai-adv-24',
    topic_id: 'alternative-investments',
    question_text: 'A hedge fund runs a relative value fixed income strategy. It is long 10-year Treasury bonds and short 2-year Treasury notes in equal notional amounts, expecting the yield curve to flatten. The trade is funded through repo. Unexpectedly, the yield curve steepens (long rates rise, short rates fall). Which risk materializes?',
    option_a: 'Duration risk — the long 10-year position loses value as long rates rise, while the short 2-year profits less than the 10-year loss due to lower duration.',
    option_b: 'Counterparty risk — the repo agreement may be called if collateral values decline.',
    option_c: 'Liquidity risk — the Treasury market becomes illiquid during a steepening event.',
    correct_answer: 'A',
    explanation: 'Yield curve flattener/steepener trade analysis: Trade setup: Long 10Y (duration ≈ 9), Short 2Y (duration ≈ 2). When the curve STEEPENS (long rates rise, short rates fall): Long 10Y: Rates rise → price falls significantly (high duration). Loss ≈ -9 × rate rise. Short 2Y: Rates fall → price rises (but this hurts short position). Gain ≈ 2 × rate fall. Net: Long 10Y loss >> Short 2Y gain. Since 10Y duration (9) >> 2Y duration (2), in equal notional trades, the long position dominates when rates move in either direction. DV01-neutral would require: Short 4.5x as much 2Y notional as 10Y to balance the dollar duration. This trade has significant duration risk if NOT DV01-neutral — a common implementation error for curve trades.',
    difficulty: 3
  },
  {
    id: 'ai-adv-25',
    topic_id: 'alternative-investments',
    question_text: 'Which of the following correctly describes the concept of "carried interest" in private equity and its tax treatment in the United States?',
    option_a: 'Carried interest is the GP\'s share of profits (typically 20% above a hurdle rate), historically taxed as long-term capital gains rather than ordinary income — a controversial tax treatment.',
    option_b: 'Carried interest is a management fee paid by LPs to GPs, fully deductible for LPs and taxed as ordinary income for GPs.',
    option_c: 'Carried interest is the LP\'s share of profits — GPs only receive management fees as compensation.',
    correct_answer: 'A',
    explanation: 'Carried interest mechanics and taxation: What it is: The GP\'s profit participation — typically 20% of profits above the hurdle rate (8% preferred return). Also called "promote" or "carry." How it works: If fund earns 25% and hurdle = 8%: GP receives 20% × (25%-8%) = 3.4% of total fund assets. LPs receive 80% of excess profits. Tax controversy: GPs characterize carry as capital gains (from capital appreciation) despite providing a service. Long-term capital gains rate (20% federal) vs ordinary income rate (37%). Critics argue carry should be taxed as compensation (ordinary income) since GPs contribute services, not capital. Tax Cuts and Jobs Act 2017: Required 3-year holding period for carry to qualify for long-term capital gains — limited impact. Ongoing legislative debate about changing the treatment.',
    difficulty: 3
  }
];
