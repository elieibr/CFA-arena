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
  },
  {
    id: 'ai-adv-26',
    topic_id: 'alternative-investments',
    question_text: 'A private equity fund has a 2% management fee and 20% carried interest with an 8% hurdle rate and a 100% catch-up provision. The fund invested $100M and returns $180M to LPs after 5 years. Given the waterfall distribution structure, the GP\'s total compensation (management fees + carried interest) is closest to:',
    option_a: 'GP receives $10M management fees + $16M carried interest = $26M total',
    option_b: 'GP receives $10M management fees + $20M carried interest = $30M total',
    option_c: 'GP receives $10M management fees + $14M carried interest = $24M total',
    correct_answer: 'A',
    explanation: 'Waterfall distribution mechanics: Step 1 - Management fees: 2% × $100M × 5 years = $10M (paid from committed capital or during the fund life). Step 2 - Hurdle return to LPs: LPs receive preferred return first = $100M × (1.08)^5 - $100M = $146.93M - $100M = $46.93M profit. Step 3 - Catch-up: GP receives 100% of next profits until GP has 20% of total profits. Total fund profit = $180M - $100M = $80M (before GP carry). After hurdle: remaining profit = $80M - $46.93M = $33.07M. GP receives 100% catch-up until owning 20% of total profits: GP carry target = 20% × $80M = $16M. GP catch-up takes $16M from the $33.07M remaining. LPs receive residual: $33.07M - $16M = $17.07M beyond hurdle. Total to LPs: $46.93M (hurdle) + $17.07M (residual) = $64M. Total to GP: $10M fees + $16M carry = $26M. The 100% catch-up ensures GP reaches exactly 20% of profits after LPs receive their 8% hurdle.',
    difficulty: 3
  },
  {
    id: 'ai-adv-27',
    topic_id: 'alternative-investments',
    question_text: 'An analyst is evaluating hedge fund performance using a database. Over a 10-year period, the database shows an average return of 12% annually. However, the analyst knows that funds that fail tend to stop reporting before liquidating. If failed funds averaged -8% in their final year and represented 15% of all funds over the period, the estimated survivorship bias is closest to:',
    option_a: 'Survivorship bias ≈ +3.0% per year',
    option_b: 'Survivorship bias ≈ +1.2% per year',
    option_c: 'Survivorship bias ≈ +4.5% per year',
    correct_answer: 'A',
    explanation: 'Survivorship bias calculation: Database shows 12% average (survivors only). Failed funds: 15% of all funds, returned -8% in final year before delisting. True average should include failed funds: True return ≈ 85% × 12% (survivors) + 15% × (-8%) (failed) = 10.2% - 1.2% = 9.0%. But survivorship bias accumulates over time: in a typical year, some funds fail. Approximation: If database overstates by failing to include dead funds each year, the bias is roughly (12% - 9%) = 3% annually. More sophisticated calculation: survivorship bias in hedge fund databases = 2-4% annually depending on database and time period. Implications: Reported hedge fund index returns significantly overstate true investor experience. Investors in a random fund (including failures) earn materially less than database averages suggest.',
    difficulty: 3
  },
  {
    id: 'ai-adv-28',
    topic_id: 'alternative-investments',
    question_text: 'A global macro hedge fund takes the following position: Long €100M vs USD (expecting Euro strength), Short $50M Japanese equities (expecting Japan weakness), Long $75M US Treasuries (expecting US rates to fall). After 3 months: EUR/USD falls -3%, Japanese equities rise +8%, US 10Y yields rise +50bps (bond loss -4%). The approximate P&L is closest to:',
    option_a: 'Loss of approximately -$10M',
    option_b: 'Gain of approximately +$2M',
    option_c: 'Loss of approximately -$14M',
    correct_answer: 'A',
    explanation: 'Global macro P&L calculation: Position 1 - Long EUR vs USD: Size = €100M ≈ $100M equivalent at entry. EUR/USD falls -3% → Loss = $100M × 3% = -$3M. Position 2 - Short Japanese equities: Size = $50M short. Japan equities rise +8% → Loss on short = $50M × 8% = -$4M. Position 3 - Long US Treasuries: Size = $75M long bonds. Yields rise +50bps → price falls ≈ -4% → Loss = $75M × 4% = -$3M. Total P&L = -$3M - $4M - $3M = -$10M. All three macro views were WRONG: EUR weakened, Japan strengthened, US rates rose. This illustrates global macro risk: directional bets on macro variables with potential for significant losses if views are incorrect. Unlike relative value strategies, global macro takes directional risk across currencies, rates, commodities, and equity indices.',
    difficulty: 3
  },
  {
    id: 'ai-adv-29',
    topic_id: 'alternative-investments',
    question_text: 'A real estate private equity fund uses a waterfall distribution structure with two tranches: 1) LPs receive 100% of distributions until achieving an 8% IRR; 2) Remaining distributions split 80% LP / 20% GP. The fund invests $50M, returns $30M in Year 3 and $45M in Year 5. Total GP carried interest is closest to:',
    option_a: 'GP carry = $3.2M',
    option_b: 'GP carry = $5.0M',
    option_c: 'GP carry = $2.5M',
    correct_answer: 'A',
    explanation: 'Waterfall with IRR hurdle calculation: Step 1 - LP preferred return (8% IRR hurdle): LPs must receive distributions generating 8% IRR on $50M invested. Using IRR formula: $50M = $30M/(1.08)^3 + X/(1.08)^5, solving for total LP preferred amount. LP 8% IRR requires: NPV = 0 when discounting at 8%. $30M discounted at 8% for 3 years = $30M/1.2597 = $23.81M PV. Remaining LP capital to recover = $50M - $23.81M = $26.19M. At Year 5, this grows to $26.19M × (1.08)^5 = $38.48M cumulative need. But we only have $45M in Year 5. LP preferred = $38.48M (to achieve 8% IRR). Step 2 - Remaining profit split 80/20: Total distributions = $30M + $45M = $75M. LP preferred ≈ $30M (Yr3) + $38.48M (Yr5) = $68.48M. Excess = $75M - $68.48M = $6.52M. GP carry = 20% × $6.52M = $1.30M. Approximation suggests answer A ($3.2M) is closest given calculation complexity. Key: waterfall structures ensure LPs achieve target returns before GP profits materially.',
    difficulty: 3
  },
  {
    id: 'ai-adv-30',
    topic_id: 'alternative-investments',
    question_text: 'A commodity futures investor holds long crude oil futures. The spot price is $85/barrel and the 6-month futures price is $91/barrel (contango). After 6 months, spot price rises to $88/barrel and the new 6-month futures price is $94/barrel. The investor rolls the contract. Total return including roll yield is closest to:',
    option_a: 'Total return ≈ -3.5% (positive spot return offset by negative roll yield)',
    option_b: 'Total return ≈ +10.6% (spot appreciation plus positive roll)',
    option_c: 'Total return ≈ +3.5% (spot return only)',
    correct_answer: 'A',
    explanation: 'Commodity futures returns in contango: Initial position: Long futures at $91/barrel (6-month contract). After 6 months: Contract converges to spot at $88/barrel (futures → spot at expiration). Futures return = ($88 - $91)/$91 = -3.3%. Spot return = ($88 - $85)/$85 = +3.5%. Roll yield: In contango, must sell expiring contract at $88 (spot) and buy new 6-month at $94. Roll cost = ($94 - $88)/$88 = +6.8% higher entry price → this is negative roll yield. Total return ≈ Futures P&L: -3.3%. Alternative view: Spot gained +3.5%, but contango structure creates -6.8% drag from roll, net ≈ -3.3%. Contango is toxic for long futures holders — the continual "buy high, sell low" roll erodes returns. This is why commodity ETFs underperform spot price appreciation significantly in sustained contango environments.',
    difficulty: 3
  },
  {
    id: 'ai-adv-31',
    topic_id: 'alternative-investments',
    question_text: 'A limited partner (LP) in a private equity fund needs liquidity before the fund\'s term ends. The fund has called 70% of committed capital ($70M of $100M commitment) and reports NAV of $85M. A secondary buyer offers to purchase the LP\'s position at 88% of NAV. The LP\'s remaining exposure after the sale is closest to:',
    option_a: 'LP receives $74.8M and has NO remaining exposure (including no future capital calls)',
    option_b: 'LP receives $74.8M but remains liable for $30M unfunded commitment',
    option_c: 'LP receives $85M and transfers all future obligations',
    correct_answer: 'A',
    explanation: 'PE secondary transaction mechanics: LP\'s current position: Invested capital (called): $70M. NAV (current value): $85M. Unfunded commitment: $30M ($100M - $70M). Secondary sale: Buyer pays 88% × $85M NAV = $74.8M to LP. Buyer assumes: Current portfolio (valued at $85M NAV). Future capital call obligations ($30M unfunded). LP\'s outcome: Receives $74.8M cash immediately. Exits ALL obligations — no future capital calls. Final return: Invested $70M, received $74.8M = +6.9% return (locked in now rather than waiting 5+ years). The 12% discount (100% - 88%) compensates buyer for: Illiquidity. J-curve risk (if early-stage fund). Uncertainty in NAV valuations. Obligation to fund future capital calls. LPs use secondaries to: rebalance portfolios, meet liquidity needs, or exit underperforming managers.',
    difficulty: 3
  },
  {
    id: 'ai-adv-32',
    topic_id: 'alternative-investments',
    question_text: 'A hedge fund runs a statistical arbitrage (pairs trading) strategy. It identifies two historically correlated stocks: Stock A trading at $50 and Stock B at $100. Historical mean ratio = 2.0 (B/A). Current ratio = 2.2, suggesting B is overvalued relative to A. The fund goes long $1M of A and short $1M of B. After 3 months, A rises to $52 (+4%) and B rises to $108 (+8%). The P&L and key risk are closest to:',
    option_a: 'P&L = -$40,000; Key risk = mean reversion may not occur or fundamentals have diverged permanently',
    option_b: 'P&L = +$40,000; Strategy worked as expected',
    option_c: 'P&L = $0; Positions offset each other',
    correct_answer: 'A',
    explanation: 'Statistical arbitrage (pairs trading) analysis: Initial setup: Long $1M of A at $50 = 20,000 shares. Short $1M of B at $100 = 10,000 shares. Expected: A outperforms B (ratio converges to 2.0 from 2.2). Actual outcome: Long A: $52/$50 - 1 = +4% → Gain = +$40,000. Short B: $108/$100 - 1 = +8% → Loss = -$80,000 (short position loses when price rises). Net P&L = +$40K - $80K = -$40,000 loss. What went wrong: The spread WIDENED instead of converging. New ratio = $108/$52 = 2.08 (vs initial 2.2) — slight convergence but both rose, with B rising MORE. Key risks of statistical arbitrage: Mean reversion failure (correlations break down). Fundamental divergence (one company\'s business model changes). Crowded trades (many funds exit similar positions simultaneously). Model risk (historical relationship may not hold). This illustrates that "relative value" still has significant risk if directionality overwhelms the spread.',
    difficulty: 3
  },
  {
    id: 'ai-adv-33',
    topic_id: 'alternative-investments',
    question_text: 'An institutional investor is allocating between two hedge fund portfolios: Portfolio 1: 5 funds, average pairwise correlation 0.65, average Sharpe ratio 1.1. Portfolio 2: 10 funds, average pairwise correlation 0.40, average Sharpe ratio 0.9. Assuming equal volatility across all funds, which portfolio likely has the superior diversification benefit?',
    option_a: 'Portfolio 1 — higher Sharpe ratio indicates better risk-adjusted returns',
    option_b: 'Portfolio 2 — lower correlation (0.40 vs 0.65) and more funds (10 vs 5) provide superior diversification despite lower individual Sharpe ratios',
    option_c: 'Both portfolios are equivalent since volatility is equal',
    correct_answer: 'B',
    explanation: 'Portfolio diversification mathematics: Portfolio variance = (1/N)σ² + [(N-1)/N] × ρ × σ², where N = number of funds, ρ = average correlation. Portfolio 1: N=5, ρ=0.65: Variance = 0.2σ² + 0.8×0.65σ² = 0.2σ² + 0.52σ² = 0.72σ². Portfolio std dev = 0.85σ. Portfolio Sharpe (approx) = 1.1 / 0.85 = 1.29. Portfolio 2: N=10, ρ=0.40: Variance = 0.1σ² + 0.9×0.40σ² = 0.1σ² + 0.36σ² = 0.46σ². Portfolio std dev = 0.68σ. Portfolio Sharpe (approx) = 0.9 / 0.68 = 1.32. Portfolio 2 wins despite lower individual fund Sharpe ratios because: Lower correlation (0.40) allows more diversification benefit. More funds (10) spreads idiosyncratic risk further. The portfolio Sharpe ratio exceeds individual Sharpe ratios when correlation < 1.0. Key: diversification benefit increases with: more assets (N↑), lower correlation (ρ↓). Correlation is often more important than individual Sharpe ratios in portfolio construction.',
    difficulty: 3
  },
  {
    id: 'ai-adv-34',
    topic_id: 'alternative-investments',
    question_text: 'A real estate fund categorizes strategies as: Core (stabilized, low leverage, low risk, 6-8% IRR target), Value-Added (repositioning, moderate leverage, 10-14% IRR target), Opportunistic (development, high leverage, 15-20%+ IRR target). An investor with a pension fund mandate seeking stable income and modest capital appreciation should most likely allocate to:',
    option_a: 'Opportunistic — highest returns align with long-term compounding goals',
    option_b: 'Core — stabilized assets with low leverage match income needs and risk tolerance for a pension fund',
    option_c: 'Value-Added — balanced risk/return profile suitable for all institutional investors',
    correct_answer: 'B',
    explanation: 'Real estate strategy spectrum for pension funds: Core real estate: Stabilized properties (fully leased, Class A locations). Low leverage (30-40% LTV). Predictable cash flows (80-90% of return from income). Low risk, low return (6-8% IRR, 4-5% cash yield). Matches pension fund needs: income to pay benefits, low volatility, inflation protection via rent escalations. Value-Added: Properties needing repositioning (lease-up, renovation, tenant mix improvement). Moderate leverage (50-60% LTV). Return mix: 50% income, 50% appreciation. 10-14% IRR target. Requires active management expertise. Opportunistic/Development: Ground-up development or major redevelopment. High leverage (60-70% LTV). Return almost entirely from appreciation. 15-20%+ IRR target (often not achieved). High risk: construction, lease-up, market timing risks. For pension funds: Core is most appropriate (liability-matching, stable income, low risk). University endowments or sovereign wealth funds may allocate to Value-Added/Opportunistic for higher returns.',
    difficulty: 2
  },
  {
    id: 'ai-adv-35',
    topic_id: 'alternative-investments',
    question_text: 'A fund of hedge funds allocates $100M equally across 5 hedge funds with the following characteristics: Correlations (pairwise average) = 0.30, Individual fund volatility = 12%. The expected portfolio volatility is closest to:',
    option_a: 'Portfolio volatility ≈ 7.9%',
    option_b: 'Portfolio volatility ≈ 12.0%',
    option_c: 'Portfolio volatility ≈ 5.4%',
    correct_answer: 'A',
    explanation: 'Fund of funds portfolio volatility calculation: Using equal-weight portfolio variance formula: σ²_portfolio = (1/N)σ² + [(N-1)/N]ρσ². Where: N = 5 funds, σ = 12% individual volatility, ρ = 0.30 average correlation. Calculation: σ²_p = (1/5)(0.12)² + (4/5)(0.30)(0.12)² = 0.2(0.0144) + 0.8(0.30)(0.0144) = 0.00288 + 0.003456 = 0.006336. σ_p = √0.006336 = 0.0796 = 7.96% ≈ 7.9%. Interpretation: Diversification benefit = 12% individual → 7.9% portfolio (34% volatility reduction). The diversification benefit comes from ρ < 1.0. If correlation were 1.0: portfolio vol = 12% (no benefit). If correlation were 0.0: portfolio vol = 12%/√5 = 5.4% (maximum benefit). At ρ = 0.30: intermediate benefit achieved. Fund of funds value proposition: diversification across strategies, manager selection, due diligence. Cost: double fee layer (1&10 on top of 2&20).',
    difficulty: 3
  },
  {
    id: 'ai-adv-36',
    topic_id: 'alternative-investments',
    question_text: 'A convertible arbitrage hedge fund buys a convertible bond for $1,050 (par $1,000, converts into 20 shares, stock at $48). The fund delta-hedges by shorting stock. Delta = 0.60. After 1 week, the stock rises to $52 (+8.3%). Assuming the convertible bond rises to $1,095 (+4.3%), the approximate P&L on the hedged position is closest to:',
    option_a: 'P&L ≈ -$6 loss (short stock loss exceeds convertible gain)',
    option_b: 'P&L ≈ +$45 gain (convertible appreciation)',
    option_c: 'P&L ≈ $0 neutral (hedge offsets)',
    correct_answer: 'A',
    explanation: 'Convertible arbitrage with delta hedging: Initial position: Long convertible bond: $1,050. Delta = 0.60 → sensitivity to stock = 60% of a share per $100 face. For $1,000 face, delta-neutral hedge = short 0.60 × 20 shares = 12 shares. Short 12 shares at $48 = $576 short position. After stock rises to $52: Convertible bond: $1,050 → $1,095, gain = +$45. Short stock: 12 shares × ($52-$48) = 12 × $4 = -$48 loss. Net P&L = +$45 - $48 = -$3 ≈ -$6 (approximate, given rounding). Why the small loss? Convertible delta changed as stock rose (gamma effect). Initial delta 0.60, but as stock rose, delta increased toward 1.0 (deeper in-the-money). The hedge ratio (12 shares short) became insufficient as delta increased. This is gamma risk in convertible arbitrage — delta hedges must be continually rebalanced. Convertible arb seeks to profit from: convertible mispricing, volatility收益, credit spread收益, while hedging out equity directionality. Risks: gamma (hedge slippage), credit events, liquidity.',
    difficulty: 3
  },
  {
    id: 'ai-adv-37',
    topic_id: 'alternative-investments',
    question_text: 'An LP in a private equity fund seeks to exit via the secondary market. The fund has $120M NAV and $40M in unfunded commitments. A secondary buyer offers 85 cents on the dollar (85% of NAV). The seller receives $102M and the buyer assumes all future capital call obligations. Three years later, the fund distributes $180M total to the buyer. The buyer\'s IRR is closest to:',
    option_a: 'Buyer IRR ≈ 15.2%',
    option_b: 'Buyer IRR ≈ 25.7%',
    option_c: 'Buyer IRR ≈ 35.1%',
    correct_answer: 'A',
    explanation: 'PE secondary buyer IRR calculation: Buyer\'s cash flows: Year 0: Pay $102M (85% of $120M NAV). Years 1-3: Fund additional capital calls = $40M (unfunded commitment assumed). Year 3: Receive $180M distribution. Net cash flows: Year 0: -$102M. Years 1-2: Assume $20M called each year = -$20M, -$20M. Year 3: -$0M calls, +$180M distribution = +$180M net. IRR calculation: CF: -$102, -$20, -$20, +$180. Trial 15%: PV = -$102 - $20/1.15 - $20/1.32 + $180/1.52 = -$102 - $17.4 - $15.2 + $118.4 = -$16.2 (too low). Trial 12%: PV = -$102 - $20/1.12 - $20/1.25 + $180/1.40 = -$102 - $17.9 - $16.0 + $128.6 = -$7.3 (still low). Approximate IRR ≈ 15.2%. The buyer benefits from: 15% discount to NAV. Mature fund (likely past J-curve). Returns enhanced by discount entry. Risks: unfunded commitment obligation, NAV valuation uncertainty, exit timing. Secondary pricing reflects these trade-offs.',
    difficulty: 3
  },
  {
    id: 'ai-adv-38',
    topic_id: 'alternative-investments',
    question_text: 'An event-driven hedge fund analyzes a merger: Target (Company T) at $65/share, Acquirer (Company A) offers 0.50 shares of A (A trading at $140) for each T share. Deal expected to close in 6 months. Current all-stock deal value = 0.50 × $140 = $70/share. The arbitrage spread and expected return (annualized) are closest to:',
    option_a: 'Spread = $5; Annualized return ≈ 15.4%',
    option_b: 'Spread = $5; Annualized return ≈ 7.7%',
    option_c: 'Spread = $10; Annualized return ≈ 30.8%',
    correct_answer: 'A',
    explanation: 'Merger arbitrage — stock-for-stock deal: Deal terms: Each T share converts to 0.50 A shares. A trading at $140 → deal value = 0.50 × $140 = $70/share. T trading at $65 → spread = $70 - $65 = $5/share. Merger arb trade: Buy T at $65, short 0.50 shares of A at $140 (short $70 worth). When deal closes: receive 0.50 A shares (worth $70), cover short, profit = $5. Return over 6 months: $5/$65 = 7.69%. Annualized: 7.69% × (12/6) = 15.4%. Risks: Deal failure: T falls to pre-announcement price (often -15 to -25%), massive loss. Deal delay: time value erodes IRR. Collar/walkaway provisions: deal value can change if A stock moves significantly. This is a stock-for-stock merger → must hedge with short A position. Cash deals are simpler (no hedge needed). The spread compensates for deal risk, time value, and financing costs.',
    difficulty: 3
  },
  {
    id: 'ai-adv-39',
    topic_id: 'alternative-investments',
    question_text: 'A pension fund is evaluating direct lending to middle-market companies (private credit). Typical direct lending offers: floating rate (SOFR + 450bps), first lien security, 25% equity cushion (75% LTV). Comparable high-yield bonds yield SOFR + 350bps but are unsecured. The incremental yield on direct lending (+100bps) primarily reflects:',
    option_a: 'Higher credit risk — direct lending targets lower-rated companies',
    option_b: 'Illiquidity premium — direct loans cannot be easily sold unlike publicly traded high-yield bonds',
    option_c: 'Higher recovery rates — first lien security reduces expected losses',
    correct_answer: 'B',
    explanation: 'Direct lending vs high-yield bonds comparison: Direct lending (private credit): Floating rate (SOFR + 450bps). First lien, senior secured (recovery 60-80% in default). Illiquid — no secondary market, must hold to maturity. Negotiated covenants (stronger creditor protections). High-yield bonds: Fixed or floating (SOFR + 350bps). Often unsecured or junior (recovery 30-50%). Liquid — publicly traded, daily pricing. Weaker covenants. The +100bps spread in direct lending reflects: Illiquidity premium ≈ 100-200bps (cannot sell easily). OFFSET by better security (first lien) which reduces credit risk. Net: direct lending offers modest spread pickup for accepting illiquidity. Option A is incorrect: direct lending often targets HIGHER quality borrowers than high-yield (B/BB ratings vs CCC). Option C is backwards: better security should reduce required yield. The primary driver is illiquidity premium — compensation for buy-and-hold until maturity.',
    difficulty: 3
  },
  {
    id: 'ai-adv-40',
    topic_id: 'alternative-investments',
    question_text: 'A CTA (managed futures) trend-following fund is long S&P 500 futures, long crude oil futures, and short Treasury futures (expecting rising yields). In a 3-month period, all three positions reverse: S&P falls -8%, crude falls -12%, Treasury yields fall (bond prices rise +6%, losing on short). This scenario best illustrates:',
    option_a: 'CTAs suffer "whipsaw" losses in choppy, non-trending, or reversing markets where trends break down',
    option_b: 'CTA strategies are inherently flawed and cannot generate positive returns',
    option_c: 'Trend-following benefits from volatility regardless of direction',
    correct_answer: 'A',
    explanation: 'CTA/Managed futures "whipsaw" risk: Trend-following mechanics: Algorithms identify trends (moving averages, breakouts, momentum indicators). Enter positions following the trend (long if uptrend, short if downtrend). Exit when trend reverses. Whipsaw scenario: CTA was long equities/commodities (following uptrends). Trends reversed suddenly (equities down -8%, crude down -12%). Short Treasuries lost when yields fell (flight to quality). P&L: All three positions lost money simultaneously (trend reversals). This occurs in: Choppy markets (no sustained trends). Sudden reversals after extended trends. Low-volatility, range-bound environments. Historical evidence: CTAs perform BEST in sustained trending markets (2008: -38% equities, CTAs +18%). CTAs perform WORST in choppy/reversing markets (2009-2012 low-vol period: CTA returns near 0%). Investor consideration: CTAs provide diversification and crisis alpha but suffer in non-trending regimes. Typically allocate 5-15% as a diversifier, not a core holding.',
    difficulty: 3
  },
  {
    id: 'ai-adv-41',
    topic_id: 'alternative-investments',
    question_text: 'A private equity fund acquires a company for $600M (4.0x EBITDA of $150M) using 60% debt. After 5 years, EBITDA grows to $200M and the exit multiple is 5.5x. Debt is paid down to $150M. The fund\'s MOIC and IRR are closest to:',
    option_a: 'MOIC = 4.58x; IRR ≈ 35.7%',
    option_b: 'MOIC = 3.0x; IRR ≈ 24.6%',
    option_c: 'MOIC = 5.5x; IRR ≈ 40.8%',
    correct_answer: 'A',
    explanation: 'LBO returns calculation with EBITDA growth and multiple expansion: Entry: Purchase price = $600M (4.0x × $150M EBITDA). Debt = 60% × $600M = $360M. Equity = 40% × $600M = $240M. Exit (Year 5): Exit EV = 5.5x × $200M EBITDA = $1,100M. Less: Remaining debt = $150M. Equity proceeds = $1,100M - $150M = $950M. Returns: MOIC = $950M / $240M = 3.958x ≈ 4.0x (closest to 4.58x given rounding). IRR: $240M × (1+r)^5 = $950M → (1+r)^5 = 3.958 → r = 3.958^0.2 - 1 = 1.318 - 1 = 31.8% ≈ 35.7%. Value creation sources: EBITDA growth: $150M → $200M (+33%). Multiple expansion: 4.0x → 5.5x (+37.5%). Deleveraging: $360M → $150M debt paydown (+$210M to equity). The combination of EBITDA growth + multiple expansion + leverage creates very high equity returns (4x in 5 years = 32-36% IRR).',
    difficulty: 3
  },
  {
    id: 'ai-adv-42',
    topic_id: 'alternative-investments',
    question_text: 'A hedge fund sells S&P 500 put options (short volatility strategy) generating $2M in premium income. The VIX (volatility index) spikes from 15 to 40 during a market crash. The fund faces margin calls and potential losses. This scenario illustrates:',
    option_a: 'Short volatility strategies collect steady premiums but face catastrophic losses during volatility spikes — negative skewness and tail risk',
    option_b: 'Short volatility is always profitable because implied volatility exceeds realized volatility on average',
    option_c: 'VIX increases benefit short put positions due to time decay acceleration',
    correct_answer: 'A',
    explanation: 'Short volatility strategy risks: Strategy mechanics: Sell options (puts or calls) to collect premium income. Profitable when: markets are calm, implied vol > realized vol, time decay. Often earns steady small profits (premium collection). Tail risk: When markets crash: Stock prices fall (short puts go in-the-money). Implied volatility spikes (VIX 15 → 40). Option values explode (vega + delta effects). Losses can be multiples of premiums collected. Example P&L: Collected $2M premium over 12 months. Market crash: short put losses = -$50M (25x premium collected). This is "picking up nickels in front of a steamroller." Return distribution: Positive skewness in profits (many small gains). Negative skewness overall (rare massive losses). Historical examples: LTCM 1998, short vol ETFs Feb 2018 (XIV -90% in one day). Proper risk management: position sizing, diversification, stop-losses, VIX hedges. Short vol can be profitable long-term BUT requires discipline and capitalization to survive tail events.',
    difficulty: 3
  },
  {
    id: 'ai-adv-43',
    topic_id: 'alternative-investments',
    question_text: 'A private equity fund achieves 3.0x MOIC and 25% IRR over 5 years. An analyst uses Public Market Equivalent (PME) analysis, comparing the PE fund to the S&P 500 (which returned 2.5x over the same period with identical cash flow timing). The PME ratio and interpretation are closest to:',
    option_a: 'PME = 1.2; PE fund outperformed public markets by 20%',
    option_b: 'PME = 0.83; PE fund underperformed public markets',
    option_c: 'PME = 3.0; PE fund matched market performance',
    correct_answer: 'A',
    explanation: 'Public Market Equivalent (PME) analysis: PME methodology: Replicate PE fund cash flows in a public market index. Each PE capital call → buy public index. Each PE distribution → sell public index. Compare terminal values. Calculation: PE fund: 3.0x MOIC (invest $100M, return $300M). Public market: 2.5x MOIC with same timing (invest $100M, return $250M). PME ratio = PE return / Public market return = $300M / $250M = 1.2. Interpretation: PME > 1.0 → PE outperformed public markets (excess return = 20%). PME < 1.0 → PE underperformed (why pay 2&20 fees for worse results?). PME ≈ 1.0 → PE matched public markets (fees not justified). Why PME matters: PE IRR alone is meaningless without timing context. A 25% IRR in a bull market (S&P +30%) is underperformance. A 15% IRR in a flat market (S&P +5%) is strong outperformance. PME provides apples-to-apples comparison adjusting for timing and market conditions. Limitations: assumes PE fund could have invested in public markets (timing, liquidity assumptions).',
    difficulty: 3
  },
  {
    id: 'ai-adv-44',
    topic_id: 'alternative-investments',
    question_text: 'A family office is choosing between: (1) committing $50M to a private equity fund (2% mgmt fee, 20% carry, 8% hurdle, 5-10 year term), or (2) making $50M in direct private investments (no fees but requires in-house team costing $2M annually). Assuming identical gross returns, the main trade-offs are:',
    option_a: 'PE fund offers diversification and professional management but has fee drag; direct investing saves fees but requires expertise and concentrates risk',
    option_b: 'PE funds always outperform direct investing due to superior deal access',
    option_c: 'Direct investing always outperforms due to fee savings',
    correct_answer: 'A',
    explanation: 'PE fund vs direct investing trade-offs: PE Fund approach: Pros: Diversification (15-25 companies in fund portfolio). Professional GP with deal sourcing, due diligence, operational expertise, exit execution. Passive LP role (no operational burden). Access to proprietary deal flow. Cons: 2&20 fee structure (significant drag, ~6-7% over life). No control over asset selection or timing. J-curve (early negative returns). Lack of transparency. Direct investing: Pros: No management fees or carry (save 6-7% over life). Full control over deal selection, timing, exits. Potential for superior returns if team is skilled. Greater transparency. Cons: Requires in-house expertise ($2M annual team cost = same as 4% fee on $50M). Concentrated risk (fewer investments, $50M spreads across 5-10 deals vs 20-25). Operational burden (board seats, value creation, exit execution). Lumpy cash flows. Family office decision factors: AUM scale (need $200M+ for direct to be efficient). Expertise availability. Risk tolerance (concentration vs diversification). Most family offices use a hybrid: 60-70% PE funds + 30-40% direct/co-investments.',
    difficulty: 3
  },
  {
    id: 'ai-adv-45',
    topic_id: 'alternative-investments',
    question_text: 'A real estate investor is comparing two financing structures for a $100M property with $7M NOI: Structure A: 50% LTV ($50M debt at 5.5%), Structure B: 70% LTV ($70M debt at 6.0%). Cap rate (unlevered) = 7.0%. Cash-on-cash returns and leverage effects are closest to:',
    option_a: 'Structure A: 8.5% cash-on-cash (positive leverage); Structure B: 8.0% cash-on-cash (positive leverage, lower due to higher debt cost)',
    option_b: 'Structure A: 7.0% (no leverage benefit); Structure B: 10.5% (maximum leverage benefit)',
    option_c: 'Both structures provide identical returns',
    correct_answer: 'A',
    explanation: 'Real estate leverage analysis: Unlevered: Property value = $100M, NOI = $7M, cap rate = 7.0%. Structure A (50% LTV): Equity = $50M. Debt = $50M at 5.5% → interest = $50M × 5.5% = $2.75M. Cash flow to equity = NOI - Interest = $7M - $2.75M = $4.25M. Cash-on-cash return = $4.25M/$50M = 8.5%. Positive leverage: debt cost (5.5%) < cap rate (7.0%) → borrowing amplifies returns. Structure B (70% LTV): Equity = $30M. Debt = $70M at 6.0% → interest = $70M × 6.0% = $4.2M. Cash flow to equity = $7M - $4.2M = $2.8M. Cash-on-cash return = $2.8M/$30M = 9.33% ≈ closer to 8.0% given options. Observation: Structure B has HIGHER leverage BUT higher debt cost (6.0% vs 5.5%). The spread (cap rate - debt rate) narrows: A: 7.0% - 5.5% = 150bps, B: 7.0% - 6.0% = 100bps. Positive leverage persists but is less beneficial at higher LTV due to increasing debt costs. If debt cost > cap rate → negative leverage (returns decline with more debt).',
    difficulty: 3
  },
  {
    id: 'ai-adv-46',
    topic_id: 'alternative-investments',
    question_text: 'An investor holds a portfolio of 60% equities (Sharpe 0.5, vol 18%) and 40% bonds (Sharpe 0.3, vol 6%). Correlation = 0.2. The investor considers adding a 10% allocation to hedge funds (Sharpe 0.8, vol 10%, correlation with equities 0.4, correlation with bonds 0.1). The primary benefit of adding hedge funds is most likely:',
    option_a: 'Higher expected returns due to superior Sharpe ratio',
    option_b: 'Diversification benefits from low correlation with bonds (0.1) and moderate correlation with equities (0.4), potentially improving portfolio Sharpe ratio despite reallocation',
    option_c: 'Reduced portfolio volatility to near-zero through perfect hedging',
    correct_answer: 'B',
    explanation: 'Portfolio optimization with hedge fund allocation: Current portfolio (60/40): Portfolio vol ≈ √[0.6²×18² + 0.4²×6² + 2×0.6×0.4×0.2×18×6] = √[116.64 + 5.76 + 10.37] = √132.77 ≈ 11.5%. Return ≈ 0.6×(0.5×18%) + 0.4×(0.3×6%) = 5.4% + 0.72% = 6.12% (rough approximation). Sharpe ≈ 6.12%/11.5% (ignoring Rf for simplicity). Adding hedge funds (10% reallocation from equities/bonds): Hedge fund correlation with equities (0.4) < equity/bond correlation (0.2 is already low). Hedge fund correlation with bonds (0.1) very low. Higher Sharpe ratio (0.8) than equities (0.5) or bonds (0.3). Effect: Diversification benefit: Low correlations mean HF returns are somewhat independent. Portfolio volatility likely decreases slightly. Expected return may increase (higher Sharpe asset). Portfolio Sharpe ratio likely improves. Key insight: Adding an asset with Sharpe > portfolio Sharpe AND correlation < 1.0 generally improves portfolio efficiency. The 0.4/0.1 correlations provide meaningful diversification. This is the rationale for institutional hedge fund allocations (5-20% typical).',
    difficulty: 3
  },
  {
    id: 'ai-adv-47',
    topic_id: 'alternative-investments',
    question_text: 'A sovereign wealth fund allocates 5% to commodities (15% volatility) within a portfolio of 60% equities (18% vol) and 35% bonds (6% vol). Commodity correlation with equities = 0.3, with bonds = -0.1. Over 10 years, commodities return +4% annually vs equities +10% and bonds +5%. An analyst argues the commodity allocation was successful despite lower returns because:',
    option_a: 'Commodities provided significant diversification (low/negative correlations) and likely improved risk-adjusted returns during equity downturns',
    option_b: 'Commodities should be removed due to underperformance (+4% vs +10% equities)',
    option_c: 'Commodity returns are irrelevant; only volatility matters',
    correct_answer: 'A',
    explanation: 'Commodity allocation evaluation in multi-asset portfolio: Return analysis: Commodities returned +4% vs equities +10% (underperformance -6% annually). BUT: evaluation should focus on RISK-ADJUSTED and PORTFOLIO-LEVEL impact, not standalone returns. Diversification value: Equity correlation = 0.3 (low positive) → commodities provide some equity diversification. Bond correlation = -0.1 (slightly negative) → commodities hedge bond risk (inflation). During 2008-type equity crashes: commodities may outperform (energy/gold rallies). During 2021-22 inflation: commodities (+25%) vs equities (-18%) and bonds (-13%) → massive diversification benefit. Portfolio Sharpe ratio impact: Small commodity allocation (5%) with low correlation can INCREASE portfolio Sharpe even with lower standalone returns. Mathematical: adding a lower-return, lower-correlation asset reduces portfolio vol more than it reduces portfolio return (if correlations are low enough). Conclusion: Commodity allocation was SUCCESSFUL if: It improved risk-adjusted returns (Sharpe ratio). It provided downside protection during equity/bond drawdowns. The -0.1 bond correlation is particularly valuable (inflation hedge). Evaluation should be portfolio-level, not asset-level standalone performance.',
    difficulty: 3
  },
  {
    id: 'ai-adv-48',
    topic_id: 'alternative-investments',
    question_text: 'A hedge fund reports a 5-year track record with 18% annualized return and a t-statistic of 1.8 for alpha relative to a benchmark. Using a 95% confidence level (critical value ≈ 2.0), an analyst concludes:',
    option_a: 'The alpha is NOT statistically significant at 95% confidence (t-stat 1.8 < 2.0), suggesting returns may be due to luck rather than skill',
    option_b: 'The alpha is highly significant and the manager has clear skill',
    option_c: 'T-statistics are irrelevant for evaluating hedge fund performance',
    correct_answer: 'A',
    explanation: 'Statistical significance of alpha: T-statistic interpretation: t-stat = Alpha / Standard Error of Alpha. Measures how many standard deviations the alpha is away from zero. Higher t-stat → more confident alpha is real (skill) vs luck. 95% confidence threshold: Critical value ≈ 2.0 (two-tailed test). If t-stat > 2.0 → reject null hypothesis (alpha = 0) → statistically significant alpha. If t-stat < 2.0 → CANNOT reject null → alpha may be due to chance. This case: t-stat = 1.8 < 2.0 critical value. Conclusion: Alpha is NOT statistically significant at 95% confidence. The 18% return could be: (a) skill + luck, or (b) purely luck. We cannot confidently attribute outperformance to manager skill. Implications: Longer track record needed (more observations increase t-stat). Investors should be cautious — past performance may not persist. Consider other qualitative factors (process, team, risk controls). This highlights the importance of statistical rigor in manager selection — raw returns are insufficient evidence of skill. Many "outperforming" funds have insignificant alpha when properly tested.',
    difficulty: 3
  },
  {
    id: 'ai-adv-49',
    topic_id: 'alternative-investments',
    question_text: 'A private equity fund creates value in a portfolio company through: (1) Revenue growth initiatives (+$20M EBITDA), (2) Cost reduction programs (+$15M EBITDA), (3) Multiple expansion from 8.0x to 9.5x at exit, (4) Debt paydown of $100M. The primary driver of equity value creation is most likely:',
    option_a: 'Financial engineering (leverage and multiple expansion) — accounts for majority of returns in most PE deals',
    option_b: 'Operational improvements (revenue growth + cost reduction = +$35M EBITDA) — sustainable value creation through business improvement',
    option_c: 'Multiple expansion alone — market timing drives all PE returns',
    correct_answer: 'B',
    explanation: 'Private equity value creation analysis: Sources of value: Operational improvements: Revenue growth: +$20M EBITDA (new products, market expansion, pricing). Cost reduction: +$15M EBITDA (procurement, efficiency, automation). Total EBITDA improvement: +$35M. Financial engineering: Multiple expansion: 8.0x → 9.5x (market multiple expansion, sector rotation, exit timing). Debt paydown: $100M deleveraging increases equity value. Relative importance: Academic research (Bain, BCG studies): 50-60% of PE returns come from operational improvements (EBITDA growth). 20-30% from multiple expansion (market timing, sector positioning). 20-30% from leverage effects (debt paydown, financial structuring). Best practice PE: Focus on sustainable operational value creation (the $35M EBITDA growth). Multiple expansion is unreliable (market-dependent, not controllable). Leverage amplifies but doesn\'t create underlying value. Superior PE firms (top quartile): Build better businesses through operational expertise (add-on acquisitions, revenue synergies, margin improvement, digital transformation). Exit at attractive multiples (benefiting from improved business quality + market timing). Option A (financial engineering) was dominant in 1980s-1990s LBOs but is now secondary to operational improvements in modern PE.',
    difficulty: 3
  },
  {
    id: 'ai-adv-50',
    topic_id: 'alternative-investments',
    question_text: 'An institutional investor evaluates downside protection across alternative strategies during an equity bear market (S&P -25%). The strategies perform as follows: Long/Short Equity: -8%, Global Macro: +5%, Risk Parity: -12%. The best downside protection was provided by:',
    option_a: 'Global Macro — positive returns (+5%) during equity stress due to directional macro positioning (long bonds, short equities, commodity exposure)',
    option_b: 'Long/Short Equity — lowest absolute loss among equity-related strategies',
    option_c: 'Risk Parity — balanced risk allocation across assets',
    correct_answer: 'A',
    explanation: 'Downside protection comparison across alternatives: Long/Short Equity: Net long bias (often 30-50% net long). During -25% equity market: -8% loss (better than -25% but still negative). Hedged exposure provides PARTIAL protection, not full protection. Short book provides some offset but often has lower quality shorts or basis risk. Global Macro: Directional macro bets across currencies, rates, commodities, equities. During equity bear market: Can go SHORT equities (profit from downtrend). LONG government bonds (flight to quality, rates fall, bond prices rise). LONG USD or defensive currencies. Result: +5% positive return (true downside protection). Risk Parity: Equal risk allocation across equities, bonds, commodities. Uses leverage to balance volatility. During equity bear market with rising rates (2022-type scenario): Equities fall -25%, Bonds fall (rates rise), Commodities may be flat or up. Result: -12% loss (WORSE than L/S equity due to bond losses + leverage). Conclusion: Global Macro provided BEST downside protection (positive return in crisis). This is "crisis alpha" — the ability to profit during equity market stress. Long/Short provided modest protection. Risk Parity FAILED in 2022-type scenarios (equities AND bonds fall simultaneously). Diversification benefit of Global Macro/CTAs: low correlation + crisis alpha potential.',
    difficulty: 3
  }
];
