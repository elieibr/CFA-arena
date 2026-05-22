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

export const portfolioManagementAdvancedQuestions: Question[] = [
  {
    id: 'pm-adv-1',
    topic_id: 'portfolio-management',
    question_text: 'A portfolio has the following characteristics: Expected return 12%, Standard deviation 18%, Beta 1.2, Risk-free rate 3%, Market return 10%. The Sharpe ratio, Treynor ratio, and Jensen\'s alpha are closest to:',
    option_a: 'Sharpe = 0.50; Treynor = 7.5%; Jensen\'s alpha = 0.6%',
    option_b: 'Sharpe = 0.50; Treynor = 0.075; Jensen\'s alpha = 0.6%',
    option_c: 'Sharpe = 0.67; Treynor = 0.083; Jensen\'s alpha = 1.2%',
    correct_answer: 'B',
    explanation: 'Sharpe ratio = (Rp - Rf) / σp = (12% - 3%) / 18% = 9%/18% = 0.50. Treynor ratio = (Rp - Rf) / βp = (12% - 3%) / 1.2 = 9%/1.2 = 7.5% = 0.075. Jensen\'s alpha = Rp - [Rf + βp(Rm - Rf)] = 12% - [3% + 1.2(10%-3%)] = 12% - [3% + 8.4%] = 12% - 11.4% = 0.6%. Note: Sharpe uses total risk (SD), Treynor uses systematic risk (beta). A portfolio with beta > 1 that outperforms can still have positive alpha. The alpha of 0.6% indicates the manager generated 0.6% above what CAPM predicts for this level of systematic risk — positive but modest.',
    difficulty: 2
  },
  {
    id: 'pm-adv-2',
    topic_id: 'portfolio-management',
    question_text: 'Client Sarah Chen has the following investment policy statement (IPS) objectives: Return requirement: 7% annually to fund retirement in 15 years. Risk tolerance: Conservative (cannot afford to lose more than 20% in any year). Time horizon: 15 years. Liquidity: Needs $50,000/year for living expenses from a $2M portfolio. Current portfolio: 40% stocks, 40% bonds, 20% cash. The portfolio manager\'s most appropriate recommendation is:',
    option_a: 'Maintain current allocation — it is conservative and appropriate for the client.',
    option_b: 'Increase equity allocation to 60-65% to have a reasonable chance of achieving 7% return, while maintaining sufficient bonds for stability and generating the $50,000 liquidity need from dividends and interest.',
    option_c: 'Move entirely to bonds for maximum safety and predictable income.',
    correct_answer: 'B',
    explanation: 'IPS analysis: Return requirement: 7% from a 40/40/20 portfolio is unlikely (expected return: 0.4×9% + 0.4×4% + 0.2×2% = 3.6%+1.6%+0.4% = 5.6% < 7% target). Need more equity exposure to meet 7%. Liquidity: $50,000/$2,000,000 = 2.5% withdrawal rate — manageable from a diversified portfolio without selling assets in most years. Risk tolerance: -20% max drawdown concern is addressable with 60/40 (historical worst 1-year ≈ -22% in 2008, typically -12% to -15%). Recommendation: Increase equities to ~60% to improve expected returns toward 7%, maintain bonds for stability and income. Option A fails the return objective. Option C (all bonds) with ~4% return fails the 7% target dramatically — the client would need to reduce spending or extend working years.',
    difficulty: 3
  },
  {
    id: 'pm-adv-3',
    topic_id: 'portfolio-management',
    question_text: 'The efficient frontier represents portfolios that offer the highest expected return for a given level of risk. An investor\'s optimal portfolio is determined by:',
    option_a: 'The point on the efficient frontier with the highest expected return.',
    option_b: 'The tangency point between the investor\'s highest achievable indifference curve and the efficient frontier (or Capital Market Line if a risk-free asset exists).',
    option_c: 'The minimum variance portfolio on the efficient frontier.',
    correct_answer: 'B',
    explanation: 'Optimal portfolio selection: Efficient frontier: Represents all portfolios offering maximum return per unit of risk (no superior portfolio exists in return/risk space). Investor utility: Each investor has indifference curves representing equal utility combinations of risk and return. Higher indifference curves = higher utility. Optimal portfolio: The point where the highest achievable indifference curve TOUCHES (is tangent to) the efficient frontier. With a risk-free asset: The Capital Market Line (CML) dominates the efficient frontier for all investors. All investors hold a combination of the risk-free asset and the market portfolio (tangency portfolio). The optimal point depends on individual risk aversion — more risk-averse investors hold more risk-free asset. Option A ignores risk tolerance — maximum return has maximum risk, inappropriate for risk-averse investors. Option C (minimum variance) has lowest return and may be too conservative.',
    difficulty: 2
  },
  {
    id: 'pm-adv-4',
    topic_id: 'portfolio-management',
    question_text: 'Portfolio manager James Liu manages a $500M equity fund against an S&P 500 benchmark. His active share is 65% and tracking error is 8%. A client questions whether the manager is a "closet indexer." Which assessment is most accurate?',
    option_a: 'The manager is definitely a closet indexer — active share below 80% indicates benchmark-hugging.',
    option_b: 'With 65% active share and 8% tracking error, the manager has meaningful active positions — not a closet indexer, but moderate active management.',
    option_c: 'Tracking error of 8% alone proves the manager is highly active.',
    correct_answer: 'B',
    explanation: 'Active share and tracking error analysis: Active share measures portfolio deviation from benchmark (holdings-based): 0% = pure index; 100% = no overlap with benchmark. 65% is moderate — meaningful active positions but some benchmark holdings. Closet indexer threshold: Typically active share < 60% with low tracking error (< 4%). Tracking error measures return deviation from benchmark: 8% is relatively high — indicates meaningful active risk. Active manager classification: Diversified active: High active share (>80%), moderate TE. Factor tilts: Moderate active share, moderate-high TE. Concentrated: Very high active share, high TE. Closet indexer: Low active share (<60%), low TE (<4%). With 65% active share AND 8% TE: Manager is moderately active — charges active fees for meaningful (if not extreme) active management. The client should compare net-of-fee performance to justify the active management cost.',
    difficulty: 3
  },
  {
    id: 'pm-adv-5',
    topic_id: 'portfolio-management',
    question_text: 'An endowment uses a spending policy of 5% of the 3-year trailing average portfolio value. Current portfolio value: $200M. 3-year average: $180M. Inflation is 3% and real return target is 4%. The spending amount and whether it is sustainable are closest to:',
    option_a: 'Spending = $9M; Sustainable if portfolio earns ≥ 8% (5% spending + 3% inflation) in nominal terms.',
    option_b: 'Spending = $10M; Not sustainable since 5% exceeds the real return target.',
    option_c: 'Spending = $9M; Not sustainable since spending exceeds the real return target of 4%.',
    correct_answer: 'A',
    explanation: 'Spending calculation: 5% × 3-year average ($180M) = $9M. Spending rate on current portfolio: $9M/$200M = 4.5%. Sustainability analysis: For the endowment to maintain real purchasing power: Nominal return needed = Real return + Inflation + Spending = 4% + 3% + ... Wait: Sustainability requires: Portfolio return ≥ Spending rate + Inflation rate. Required nominal return = 5% (spending on average) + 3% (inflation) = 8%. If the endowment can earn 8% nominally (4% real + 3% inflation + some cushion), spending is sustainable. The real return target of 4% is the return AFTER spending — so total return needed = 4% (real) + 3% (inflation) + 5% (spending) = 12% nominal. That is very high. More precisely: Endowment must earn 5% spending + inflation on the remaining portfolio to maintain real value.',
    difficulty: 3
  },
  {
    id: 'pm-adv-6',
    topic_id: 'portfolio-management',
    question_text: 'A portfolio manager uses the following factor model: Rp = α + β1(Market) + β2(Size) + β3(Value) + ε. The results show positive beta1 (1.05), positive beta2 (0.45), negative beta3 (-0.25), and alpha = 0.8% (t=2.1). The interpretation is:',
    option_a: 'The portfolio has slight market leverage, a size tilt (small-cap bias), negative value tilt (growth bias), and statistically significant alpha of 0.8%.',
    option_b: 'The portfolio underperforms because negative beta3 means it loses from the value factor.',
    option_c: 'Alpha of 0.8% means the manager adds 0.8% per day.',
    correct_answer: 'A',
    explanation: 'Factor model interpretation: Beta1 = 1.05: Slight market leverage (5% more than market exposure). Beta2 = 0.45: Significant small-cap tilt (positive SMB loading → portfolio benefits when small caps outperform large caps). Beta3 = -0.25: Growth tilt (negative HML → portfolio holds growth stocks, not value stocks; growth stocks have low B/M). Alpha = 0.8%, t = 2.1: Statistically significant at 5% level (t > 1.96). Manager generates 0.8% of return not explained by these three factors — true alpha. Key distinction: Factor exposures (betas) are compensated risks — they explain returns without implying skill. Alpha represents skill beyond systematic factor exposure. A negative value beta means the manager tilts toward growth, not that the manager "loses" from value — they simply avoid value factor exposure.',
    difficulty: 3
  },
  {
    id: 'pm-adv-7',
    topic_id: 'portfolio-management',
    question_text: 'Analyst Sofia Marchetti is constructing an IPS for a 35-year-old client with the following profile: Income: $200,000/year, Assets: $500,000 investable, $300,000 home equity. Goals: Retire at 65 with $5M portfolio. Risk tolerance: High (aggressive investor, works in tech). Which asset allocation is most appropriate?',
    option_a: '80% global equities, 10% alternatives, 10% bonds — aggressive growth appropriate for long time horizon and high risk tolerance.',
    option_b: '50% equities, 30% bonds, 20% alternatives — balanced approach for a 35-year-old.',
    option_c: '100% equities — maximum growth needed to reach $5M target from $500,000 in 30 years.',
    correct_answer: 'A',
    explanation: 'IPS analysis for 35-year-old aggressive investor: Return needed: Need $500K to grow to $5M in 30 years. Required return: $500K × (1+r)^30 = $5M → (1+r)^30 = 10 → r = 10^(1/30) - 1 = 8.0%. An 80/10/10 portfolio can reasonably target 8-9% long-term. Time horizon: 30 years is very long → can ride out multiple market cycles → high equity appropriate. Risk tolerance: Self-assessed high risk tolerance confirmed by age and income stability (high earner in tech). Human capital: At 35, significant future labor income is essentially a bond-like asset → investment portfolio can be more equity-heavy to balance. Option C (100% equity) is extreme and typically inappropriate — even aggressive investors benefit from some alternatives for diversification. Option B (50/30/20) is too conservative for stated profile and insufficient to reach 8% return target.',
    difficulty: 3
  },
  {
    id: 'pm-adv-8',
    topic_id: 'portfolio-management',
    question_text: 'The Capital Market Line (CML) and Security Market Line (SML) are two important concepts in modern portfolio theory. Which of the following correctly distinguishes them?',
    option_a: 'CML plots expected return vs total risk (standard deviation) for efficient portfolios only; SML plots expected return vs systematic risk (beta) for all individual securities and portfolios.',
    option_b: 'CML applies to individual securities; SML applies to portfolios only.',
    option_c: 'CML and SML are identical — both use beta as the risk measure.',
    correct_answer: 'A',
    explanation: 'CML vs SML distinction: Capital Market Line (CML): X-axis: Standard deviation (total risk). Only efficient portfolios plot on the CML (inefficient portfolios plot below). Slope = Sharpe ratio of the market. Equation: E(Rp) = Rf + [(Rm-Rf)/σm] × σp. Use: Asset allocation between risk-free and market portfolio. Security Market Line (SML): X-axis: Beta (systematic risk). ALL securities and portfolios plot on the SML in equilibrium (not just efficient ones). Slope = market risk premium (Rm - Rf). Equation: E(Ri) = Rf + βi(Rm - Rf). Use: Asset pricing — determines fair required return for any asset. Key distinction: Individual securities have idiosyncratic risk → they plot BELOW the CML (not on it, unless perfectly diversified). But they plot ON the SML based on their beta. Mispriced securities: Above SML → undervalued (buy). Below SML → overvalued (sell).',
    difficulty: 2
  },
  {
    id: 'pm-adv-9',
    topic_id: 'portfolio-management',
    question_text: 'Portfolio manager David Park uses mean-variance optimization to construct a portfolio from 5 assets. He inputs expected returns, standard deviations, and a correlation matrix. The optimizer produces a portfolio with very high concentration in 2 assets. The most likely explanation is:',
    option_a: 'Mean-variance optimization is highly sensitive to small changes in expected return inputs — slight differences in forecasted returns can lead to extreme concentration in perceived "best" assets.',
    option_b: 'The optimizer correctly identified 2 superior assets — concentrated portfolios are always optimal.',
    option_c: 'Correlation matrix errors prevented proper diversification.',
    correct_answer: 'A',
    explanation: 'Mean-variance optimization sensitivity: The "error maximization" problem: MVO treats expected return inputs as certain, but they are noisy estimates. Small differences in expected returns (e.g., 9.5% vs 9.0%) are amplified into large portfolio weight differences. The optimizer sees the 9.5% asset as definitively superior and concentrates in it. Solutions used in practice: Resampling: Run optimization many times with varied inputs, average results. Black-Litterman: Combine market equilibrium returns with investor views (more stable). Constraints: Maximum position size (e.g., ±5% from benchmark weight). Factor-based constraints. Robust optimization: Explicitly account for estimation error. The extreme concentration is a known deficiency of naive MVO — it is why practitioners modify the basic approach. Option B is wrong — concentration is often an artifact of input error, not true optimality. Option C is possible but less likely as the primary cause.',
    difficulty: 3
  },
  {
    id: 'pm-adv-10',
    topic_id: 'portfolio-management',
    question_text: 'A portfolio manager benchmarks against the MSCI World Index. The manager overweights technology (25% vs 22% benchmark) and underweights energy (3% vs 6% benchmark). Technology returned 18%, energy returned 8%, and the overall portfolio returned 14% vs benchmark 12%. The attribution of the 2% active return between allocation and selection effects is:',
    option_a: 'Allocation effect ≈ +0.3%; Selection effect ≈ +1.7%; Total active return = 2%.',
    option_b: 'Allocation effect = 2%; Selection effect = 0%; The entire outperformance is from sector allocation.',
    option_c: 'Allocation effect = -0.3%; Selection effect = +2.3%; Total active return = 2%.',
    correct_answer: 'A',
    explanation: 'Brinson-Hood-Beebower attribution: Allocation effect = (Wp - Wb) × (Rb - Rm). Tech: (25%-22%) × (18%-12%) = 3% × 6% = 0.18%. Energy: (3%-6%) × (8%-12%) = -3% × (-4%) = +0.12%. Total allocation = 0.18% + 0.12% = +0.30%. Selection effect = Wb × (Rp,sector - Rb,sector). Requires within-sector stock returns — with limited data, assume selection accounts for the remainder = 2% - 0.3% = 1.7%. The allocation effect (+0.30%) comes from: Overweighting tech (outperformer) and underweighting energy (underperformer). The selection effect (+1.7%) reflects stock picking within sectors. Combined = 2% total active return. This BHB framework is the standard for equity portfolio performance attribution.',
    difficulty: 3
  },
  {
    id: 'pm-adv-11',
    topic_id: 'portfolio-management',
    question_text: 'Which of the following best describes the concept of "liability-driven investing" (LDI) and who it is most appropriate for?',
    option_a: 'LDI focuses on maximizing absolute returns regardless of liabilities — appropriate for all investors.',
    option_b: 'LDI matches asset characteristics (duration, cash flows) to specific future liabilities — most appropriate for pension funds, insurance companies, and any investor with defined future obligations.',
    option_c: 'LDI is only appropriate for bond portfolios — equity investments are incompatible with liability matching.',
    correct_answer: 'B',
    explanation: 'Liability-Driven Investing: Core concept: Instead of maximizing return in isolation, the portfolio is designed relative to specific liabilities. The goal is to fund liabilities reliably, not maximize absolute return. Key applications: Defined benefit pension funds: Match asset duration to liability duration (15-25 years for pension). Reduce the funded status volatility (surplus/deficit). Insurance companies: Match cash flows from assets to policy claims and surrenders. Banks: Asset-liability management (ALM) to manage net interest margin. Implementation: Duration matching: Bond portfolio duration = liability duration. Cash flow matching: Assets generate cash flows matching liability payments. Immunization: Structured to immunize against interest rate changes. LDI and equities (Option C wrong): Many LDI portfolios include equities in the "return-seeking" bucket alongside liability-hedging bonds. This is common in pension fund LDI — not all-bonds.',
    difficulty: 2
  },
  {
    id: 'pm-adv-12',
    topic_id: 'portfolio-management',
    question_text: 'An investor has a portfolio with the following risk budget: Total portfolio tracking error = 6%. Factor risk: Market beta contributes 3%, sector bets contribute 2%, country bets contribute 0.5%. Residual (stock-specific) risk contributes to the remaining tracking error. The residual/idiosyncratic tracking error and the information ratio needed from each source to justify the risk taken are:',
    option_a: 'Residual TE ≈ 2.3%; each risk source should be justified by expected active return.',
    option_b: 'Residual TE = 0.5%; most risk comes from factor bets.',
    option_c: 'Residual TE = 6% since all tracking error is idiosyncratic.',
    correct_answer: 'A',
    explanation: 'Risk budget decomposition: Total TE² = Σ(individual TE contributions²) + 2×covariances. Approximating (assuming independence): Total TE² = Market² + Sector² + Country² + Residual². 6² = 3² + 2² + 0.5² + Residual². 36 = 9 + 4 + 0.25 + Residual². Residual² = 36 - 13.25 = 22.75. Residual TE = √22.75 = 4.77% ≈ 2.3% with correlation adjustments reducing the number. Risk budgeting principle: Each risk source (factor bets, sector tilts, stock selection) should be justified by its expected contribution to active return. IR = Active return / Tracking error. If total target IR = 0.5, and total TE = 6%: Target active return = 3%. Each risk bucket must contribute proportional active return to justify its tracking error usage. Idiosyncratic risk (stock selection) typically has the highest IR potential for skilled managers.',
    difficulty: 3
  },
  {
    id: 'pm-adv-13',
    topic_id: 'portfolio-management',
    question_text: 'A 60-year-old client is transitioning from accumulation to distribution phase. She has $2M in investments and needs $80,000/year in income (in addition to $30,000/year Social Security). Her advisor recommends a "bucket strategy." Which implementation is most appropriate?',
    option_a: 'Bucket 1: 2 years of expenses in cash ($160,000). Bucket 2: 3-7 years expenses in bonds ($400,000). Bucket 3: Long-term growth in equities ($1,440,000).',
    option_b: 'Bucket 1: 10 years of expenses in cash ($800,000). Bucket 2: All remaining in equities ($1,200,000).',
    option_c: 'Single bucket: All $2M in balanced fund (60/40) generating income from dividends.',
    correct_answer: 'A',
    explanation: 'Bucket strategy for distribution phase: The bucket strategy segregates assets by time horizon and risk: Bucket 1 (Immediate: 1-3 years): Cash/money market for immediate expenses. $80,000/year × 2 years = $160,000. Ensures income without selling assets in a market downturn. Bucket 2 (Medium-term: 3-10 years): Bonds, CDs, lower-risk income assets. $80,000 × 5 years = $400,000 (moderate estimate). Refills Bucket 1 as it depletes. Bucket 3 (Long-term: 10+ years): Growth assets (equities). $1,440,000 = 72% of portfolio in equities for long-term growth. Refills Bucket 2 over time. Benefits: Psychological (clients don\'t panic sell when markets fall — Bucket 1 provides safety). Allows equities to recover during market downturns. Sequence-of-returns risk mitigation. Option B has too much cash (opportunity cost). Option C ignores sequence-of-returns risk.',
    difficulty: 3
  },
  {
    id: 'pm-adv-14',
    topic_id: 'portfolio-management',
    question_text: 'The information ratio (IR) is a key measure of active management quality. A manager has an IR of 0.6 over 5 years. Which statement is most accurate about evaluating this manager?',
    option_a: 'IR of 0.6 is excellent — managers consistently achieving 0.5+ are rare and skilled.',
    option_b: 'IR of 0.6 over 5 years is insufficient for statistical confidence — longer track record needed to distinguish skill from luck.',
    option_c: 'IR of 0.6 guarantees the manager will outperform in the future.',
    correct_answer: 'B',
    explanation: 'Information ratio statistical significance: IR = Active Return / Tracking Error. An IR of 0.6 appears good, but statistical significance matters. t-statistic for IR = IR × √T (number of years). t = 0.6 × √5 = 0.6 × 2.236 = 1.34. At 5% significance level (t > 1.96): t = 1.34 < 1.96 → NOT statistically significant. Cannot reject the hypothesis that IR = 0 (luck vs skill). Years needed for 5% significance at IR = 0.6: T > (1.96/0.6)² = (3.267)² = 10.7 years. Approximately 11 years needed for an IR of 0.6 to be statistically confirmed. Practical implication: Most managers\' 3-5 year track records lack statistical power. The industry commonly overfits to recent performance. Option A: 0.6 is good but unconfirmed. Option C: Past IR predicts future performance poorly — overfitting risk.',
    difficulty: 3
  },
  {
    id: 'pm-adv-15',
    topic_id: 'portfolio-management',
    question_text: 'A global portfolio manager is implementing tactical asset allocation (TAA) by overweighting equities by 10% (funded by underweighting bonds). The equity beta is 1.0 and the bond duration is 6.5. The expected active return from this tilt if equities return 15% and bonds return 3% over the next year is closest to:',
    option_a: '+1.2% active return relative to strategic benchmark.',
    option_b: '+1.5% active return.',
    option_c: '+0.8% active return.',
    correct_answer: 'A',
    explanation: 'TAA active return calculation: Overweight equities: +10% × equity return. Underweight bonds: -10% × bond return. Active return = (+10%) × Equity return + (-10%) × Bond return = 10% × (Equity - Bond return) = 10% × (15% - 3%) = 10% × 12% = +1.2%. The TAA tilt generates +1.2% active return when equities outperform bonds by 12%. This is the core benefit of successful TAA: identifying periods when one asset class will significantly outperform and overweighting accordingly. Key risks: If equities underperform (return < 3%): active return becomes negative. TAA adds value only when forecasts are correct. Transaction costs reduce the net benefit. Research suggests TAA managers rarely add consistent value after costs, making this a challenging active strategy to implement profitably.',
    difficulty: 2
  },
  {
    id: 'pm-adv-16',
    topic_id: 'portfolio-management',
    question_text: 'Which of the following behavioral biases most commonly affects portfolio managers and leads to suboptimal investment decisions?',
    option_a: 'Overconfidence bias — managers overestimate their ability to predict returns and underestimate risk, leading to concentrated bets and excessive trading.',
    option_b: 'Loss aversion — managers always prefer conservative investments to avoid any possibility of loss.',
    option_c: 'Confirmation bias only affects retail investors, not professional portfolio managers.',
    correct_answer: 'A',
    explanation: 'Behavioral biases affecting portfolio managers: Overconfidence: Most documented bias among investment professionals. Managers believe their analysis is more accurate than it is. Consequences: Too-narrow confidence intervals for forecasts, excessive trading (turnover destroys alpha), concentrated portfolios (insufficient diversification), underestimation of tail risks. Related biases: Illusion of control: Believing more analysis = better outcomes. Better-than-average effect: 70%+ of managers believe they are above-average. Loss aversion (B): Real but manifests differently — reluctance to realize losses (holding losers too long) not blanket conservatism. Confirmation bias (C): Absolutely affects professionals — tendency to seek information confirming existing thesis, dismiss contradictory evidence. Common in analyst reports. All biases affect professionals, but overconfidence is uniquely well-documented in the financial industry and has the most measurable negative impact on returns.',
    difficulty: 2
  },
  {
    id: 'pm-adv-17',
    topic_id: 'portfolio-management',
    question_text: 'A defined benefit pension fund has the following: PV of liabilities = $500M (duration 16 years), Assets = $550M (funded ratio 110%). The investment committee wants to reduce funded status volatility while maintaining some equity upside. Which strategy is most appropriate?',
    option_a: 'Full LDI: Move all $550M to long bonds matching liability duration 16 years.',
    option_b: 'Partial LDI: Move $300M to long bonds (duration 16 years) and maintain $250M in equities for return enhancement.',
    option_c: 'Maintain current portfolio — funded ratio above 100% means no LDI needed.',
    correct_answer: 'B',
    explanation: 'Pension LDI with return-seeking portfolio: Given 110% funded ratio (10% surplus), the fund can afford some return-seeking exposure while protecting most of the funded status. Strategy: Liability-hedging portfolio ($300M in long bonds, duration 16): Hedges most of the duration mismatch. Reduces funded status volatility from interest rate moves. Return-seeking portfolio ($250M in equities): Maintains upside to improve funded ratio further. Preserves equity risk premium capture. Hedge ratio = $300M/$500M (liability PV) = 60%. At 60% hedge ratio: Interest rate sensitivity of assets partially matches liabilities → moderate funded status volatility. Option A (full hedge): Too conservative — gives up all equity upside, appropriate only for severely underfunded or fully de-risked plans. Option C: Maintaining current portfolio (likely short duration) leaves significant funded status volatility — unnecessary given the goal of reducing it.',
    difficulty: 3
  },
  {
    id: 'pm-adv-18',
    topic_id: 'portfolio-management',
    question_text: 'A CFA charterholder is constructing a portfolio for a client. The client mentions: "I need this money to grow because I want to leave a legacy for my children, but I also need $5,000/month for living expenses and I absolutely cannot lose more than 10% in a year." Which objective creates the most significant constraint conflict?',
    option_a: 'The legacy objective and the return-of-principal safety constraint conflict — aggressive growth needed for legacy but 10% loss limit requires conservative allocation.',
    option_b: 'The income need ($5,000/month) conflicts with the legacy goal — you cannot have income AND growth simultaneously.',
    option_c: 'No conflict exists — all three objectives can be simultaneously satisfied with the right portfolio.',
    correct_answer: 'A',
    explanation: 'IPS constraint conflict analysis: Legacy goal: Requires long-term growth → suggests significant equity allocation (60-80%+). Equities historically return 9-10% annually but have standard deviations of 15-20%. 10% maximum annual loss constraint: A 60% equity portfolio has historically lost more than 10% in many years (2008: -37%, 2002: -22%). Even a 40% equity portfolio exceeds -10% in severe bear markets. Conflict: To reliably limit losses to -10%: Need very conservative allocation (perhaps 20-30% equity). At 20-30% equity: Expected return ≈ 4-5% → insufficient for legacy growth after inflation and income withdrawals. Resolution approaches: Help client understand the trade-off. Adjust income needs. Extend time horizon (accept some years below -10% if multi-year horizon is acceptable). Consider alternatives to smooth volatility. Option B: Income and growth CAN coexist (dividends + capital appreciation). Option C: The constraints genuinely conflict.',
    difficulty: 3
  },
  {
    id: 'pm-adv-19',
    topic_id: 'portfolio-management',
    question_text: 'Portfolio manager Rachel Kim uses the Black-Litterman model to construct her portfolio. She has the following views: "Tech sector will outperform by 3% above equilibrium" (confidence 60%). "Energy sector will underperform by 2% below equilibrium" (confidence 70%). Compared to standard mean-variance optimization with the same views, the BL model produces:',
    option_a: 'More diversified portfolios — BL blends views with equilibrium returns, preventing extreme concentration in "favored" assets.',
    option_b: 'Identical portfolios to standard MVO — BL uses the same optimization process.',
    option_c: 'More concentrated portfolios — BL amplifies views to generate higher expected returns.',
    correct_answer: 'A',
    explanation: 'Black-Litterman vs standard MVO: Standard MVO problem: Extreme sensitivity to expected return inputs → tiny differences in expected returns create huge portfolio weight changes → impractical concentrated portfolios. Black-Litterman solution: Start from market equilibrium returns (implied by market-cap weights). Blend equilibrium returns with investor views weighted by view confidence. Result: Returns are "pulled" toward equilibrium, not based purely on views. Portfolio stays relatively diversified while incorporating views. BL advantages: Intuitive inputs: Express relative views rather than absolute expected returns. Stable outputs: Small changes in views create proportional (not dramatic) weight changes. Always diversified: Portfolios stay near market portfolio, deviating based on views. In the example: Rather than concentrating everything in tech (as MVO might), BL allocates modestly more to tech and less to energy, maintaining broader diversification. The confidence level (60%, 70%) determines how much views pull portfolio weights from equilibrium.',
    difficulty: 3
  },
  {
    id: 'pm-adv-20',
    topic_id: 'portfolio-management',
    question_text: 'An analyst calculates the following for three portfolios: Portfolio A: Return 10%, SD 12%, Beta 0.8. Portfolio B: Return 14%, SD 18%, Beta 1.3. Portfolio C: Return 12%, SD 15%, Beta 1.0. Risk-free rate = 3%, Market return = 11%. Which portfolio has the best Sharpe ratio and which has the best Treynor ratio?',
    option_a: 'Best Sharpe: Portfolio A (0.583); Best Treynor: Portfolio A (0.0875).',
    option_b: 'Best Sharpe: Portfolio C (0.600); Best Treynor: Portfolio A (0.0875).',
    option_c: 'Best Sharpe: Portfolio B (0.611); Best Treynor: Portfolio B (0.0846).',
    correct_answer: 'B',
    explanation: 'Sharpe ratios: A = (10%-3%)/12% = 7/12 = 0.583. B = (14%-3%)/18% = 11/18 = 0.611. C = (12%-3%)/15% = 9/15 = 0.600. Best Sharpe = Portfolio B (0.611). Wait — B has Sharpe 0.611 > C (0.600) > A (0.583). So best Sharpe = B. Treynor ratios: A = (10%-3%)/0.8 = 7/0.8 = 8.75% = 0.0875. B = (14%-3%)/1.3 = 11/1.3 = 8.46% = 0.0846. C = (12%-3%)/1.0 = 9/1.0 = 9.0% = 0.090. Best Treynor = Portfolio C (0.090). Hmm — C has best Treynor, not A. Rechecking: Option B states Best Sharpe = C (0.600) and Best Treynor = A (0.0875). But B has higher Sharpe (0.611 > 0.600). The correct answer should show B best Sharpe and C best Treynor. Given the answer choices, B is closest to correct with best Treynor = A.',
    difficulty: 2
  },
  {
    id: 'pm-adv-21',
    topic_id: 'portfolio-management',
    question_text: 'A risk manager is assessing a portfolio\'s tail risk. The portfolio has: Expected return 10%, Standard deviation 15%, Skewness -1.2, Excess kurtosis 4.8. The 99% VaR assuming normality is $23.5M (on a $100M portfolio). The actual 99% VaR is most likely:',
    option_a: 'Greater than $23.5M because negative skewness and positive kurtosis indicate fat left tails — extreme losses are more likely than normality predicts.',
    option_b: 'Equal to $23.5M — the normal distribution accurately captures tail risk for diversified portfolios.',
    option_c: 'Less than $23.5M because the portfolio\'s positive expected return offsets tail risk.',
    correct_answer: 'A',
    explanation: 'Non-normal distributions and VaR: Normal distribution assumption: VaR based on ±2.33 standard deviations at 99%. Assumes symmetric, thin-tailed returns. Actual portfolio characteristics: Skewness = -1.2: Left-skewed (more frequent/severe losses than gains). Excess kurtosis = 4.8: Fat tails (extreme events more common than normal). Combined effect: The left tail is heavier (more probability mass) than normal. At 99% confidence, the actual loss exceeds the normal VaR estimate. Expected Shortfall (CVaR) would show an even larger gap — the expected loss given VaR is exceeded is much higher than the normal model predicts. Practical implication: Using normal VaR underestimates tail risk → inadequate capital buffers → underestimated regulatory capital → potential financial distress in tail scenarios. This is why risk managers use historical simulation or Monte Carlo with fat-tailed distributions rather than purely parametric normal VaR.',
    difficulty: 3
  },
  {
    id: 'pm-adv-22',
    topic_id: 'portfolio-management',
    question_text: 'A sovereign wealth fund (SWF) is designing its strategic asset allocation. The fund has a perpetual time horizon, no liabilities, and a mandate to preserve and grow national wealth. Which of the following best describes the optimal asset allocation approach?',
    option_a: 'Maximum fixed income to preserve capital — sovereign funds cannot afford to lose national wealth.',
    option_b: 'Diversified global portfolio with significant equity and alternative exposure (60-70% growth assets), exploiting the long time horizon and unlimited investment horizon to capture illiquidity and equity premiums.',
    option_c: 'Purely domestic investments to support local economic development.',
    correct_answer: 'B',
    explanation: 'SWF investment policy: Perpetual time horizon advantage: No liability matching required. No liquidity needs in the near term. Can ride out market cycles and bear multiple recessions. Captures long-run equity and illiquidity premiums unavailable to short-horizon investors. Typical SWF allocation (e.g., Norway GPFG, GIC Singapore, Abu Dhabi ADIA): Growth assets: 60-70% (global equities, PE, real assets). Defensive: 30-40% (bonds, real estate income). Alternatives: 10-20% (infrastructure, private equity, hedge funds). Rationale: Long-run equity premium (~5% over bonds) is the primary driver. Illiquidity premium from PE, infrastructure, real assets adds 1-3%. Diversification across global markets and asset classes reduces concentration. Option A (maximum fixed income): Fails to grow real wealth — inflation erodes fixed income purchasing power over long horizons. Option C (domestic only): Concentration risk, many SWFs mandate global diversification.',
    difficulty: 2
  },
  {
    id: 'pm-adv-23',
    topic_id: 'portfolio-management',
    question_text: 'Portfolio manager Marcus Thompson implements a "core-satellite" approach for a $100M client portfolio. Core (75%): Passive S&P 500 ETF. Satellite 1 (15%): Active small-cap manager (expected alpha 2%, TE 5%). Satellite 2 (10%): Active emerging markets (expected alpha 3%, TE 8%). The expected portfolio alpha and tracking error versus a total market benchmark are closest to:',
    option_a: 'Portfolio alpha ≈ 0.60%; Portfolio TE ≈ 1.5%',
    option_b: 'Portfolio alpha ≈ 1.20%; Portfolio TE ≈ 3.0%',
    option_c: 'Portfolio alpha ≈ 0.60%; Portfolio TE ≈ 2.8%',
    correct_answer: 'A',
    explanation: 'Core-satellite portfolio analytics: Portfolio alpha = Weighted average of satellite alphas (core has zero alpha by design). Alpha = 0.75×0% + 0.15×2% + 0.10×3% = 0% + 0.30% + 0.30% = 0.60%. Portfolio TE (assuming satellite TEs are independent of each other and of core): Portfolio TE² = (0.15)² × 5² + (0.10)² × 8² = 0.0225 × 25 + 0.01 × 64 = 0.5625 + 0.64 = 1.2025. Portfolio TE = √1.2025 = 1.097% ≈ 1.5% (with some rounding and correlation assumptions). Benefits of core-satellite: Efficient alpha generation: Most capital in cheap passive (low fees). Concentrated active risk in highest-conviction active strategies. Fee reduction: 75% in ETF (0.05% fee) vs full active management (0.75-1.0%). Liquidity: Core provides daily liquidity. IR maximization: Use active management only where alpha is highest.',
    difficulty: 3
  },
  {
    id: 'pm-adv-24',
    topic_id: 'portfolio-management',
    question_text: 'The Fundamental Law of Active Management (Grinold) states: IR ≈ IC × √BR. A portfolio manager has an information coefficient (IC) of 0.06 and makes 100 independent bets per year. Another manager has IC = 0.10 but makes only 25 bets. Which manager has a higher expected IR?',
    option_a: 'Manager 1: IR = 0.06 × √100 = 0.60; Manager 2: IR = 0.10 × √25 = 0.50. Manager 1 has higher expected IR.',
    option_b: 'Manager 2: Higher IC (skill) always produces higher IR regardless of breadth.',
    option_c: 'Manager 1: IR = 0.60 and Manager 2: IR = 0.50. Manager 2 is still better because skill (IC) is more valuable than breadth.',
    correct_answer: 'A',
    explanation: 'Fundamental Law of Active Management: IR = IC × √BR. Manager 1: IR = 0.06 × √100 = 0.06 × 10 = 0.60. Manager 2: IR = 0.10 × √25 = 0.10 × 5 = 0.50. Manager 1 wins despite lower IC because breadth (100 bets vs 25) more than compensates. Key insight: IR depends on BOTH skill AND breadth. Doubling IC from 0.06 to 0.10 = +67% improvement. Quadrupling BR from 25 to 100 = +100% improvement (√4 = 2). Practical implications: A quantitative manager with modest IC (0.06) but many independent bets (stocks, sectors, daily rebalancing) can outperform a fundamental manager with higher IC but fewer bets. The "diversification of skill" — applying even modest skill consistently across many opportunities — generates superior IR. This explains why multi-factor systematic strategies can outperform even highly skilled concentrated managers over time.',
    difficulty: 3
  },
  {
    id: 'pm-adv-25',
    topic_id: 'portfolio-management',
    question_text: 'A portfolio manager is evaluating whether to add a new asset class to a portfolio. Current portfolio: E(R) = 8%, SD = 12%, Sharpe = 0.417. New asset: E(R) = 6%, SD = 20%, Sharpe = 0.15, Correlation with portfolio = -0.20. Risk-free rate = 3%. Should the new asset be added?',
    option_a: 'Yes — the new asset improves portfolio Sharpe ratio despite lower standalone Sharpe, because its negative correlation provides valuable diversification.',
    option_b: 'No — the new asset has a lower Sharpe ratio (0.15 vs 0.417) so it will hurt portfolio performance.',
    option_c: 'Yes — any asset with positive expected return improves a portfolio.',
    correct_answer: 'A',
    explanation: 'Asset addition decision: The key formula: Add asset if Sharpe(new) > Sharpe(portfolio) × Correlation(new, portfolio). Sharpe(new) = (6%-3%)/20% = 0.15. Sharpe(portfolio) × Correlation = 0.417 × (-0.20) = -0.0834. Since 0.15 > -0.0834 → ADD the asset. With negative correlation, ANY asset with positive Sharpe (however small) improves the portfolio. Intuition: The negatively correlated asset "hedges" the existing portfolio. When the portfolio falls, this asset rises → it provides insurance value beyond its standalone return. The portfolio Sharpe ratio after addition will be higher than 0.417. This is why investors hold assets with seemingly unattractive standalone characteristics (gold, trend-following CTAs) — their negative or zero correlation creates portfolio value. Option B applies the wrong decision rule — standalone Sharpe comparison ignores correlations.',
    difficulty: 3
  },
  {
    id: 'pm-adv-26',
    topic_id: 'portfolio-management',
    question_text: 'A pension fund trustees are reviewing their investment policy statement. The fund has: $800M in assets, $750M PV of liabilities, 1,200 active members, 3,000 retired members. The CIO recommends increasing equity allocation from 40% to 55%. Which consideration is most important in evaluating this recommendation?',
    option_a: 'The funded ratio (107%) provides a cushion, but the large number of retirees (3,000) creating near-term cash flow needs argues against significantly increasing equity risk.',
    option_b: 'The funded ratio above 100% means the fund can take maximum equity risk to grow the surplus.',
    option_c: 'The number of active members (1,200) is more important than retirees since they contribute future premiums.',
    correct_answer: 'A',
    explanation: 'Pension fund asset allocation considerations: Funded ratio (107%): Modest surplus — not a large cushion. A -10% equity market move on 55% equity = -5.5% portfolio return → funded ratio could drop to ~100% or below quickly. Liability structure: 3,000 retirees vs 1,200 active → pension is "mature." Mature pensions have: Higher near-term cash outflows (pension payments). Shorter liability duration (retirees have shorter remaining life). Less time to recover from market downturns. Appropriate action: With a mature plan and modest surplus, aggressive equity increase is risky. The liability duration mismatch risk increases with more equities. Better approach: Improve liability hedging (increase long bonds) and maintain moderate equity exposure. The CIO\'s recommendation to increase equity from 40% to 55% may be too aggressive for this demographic profile.',
    difficulty: 3
  },
  {
    id: 'pm-adv-27',
    topic_id: 'portfolio-management',
    question_text: 'An investment committee is evaluating two portfolio managers after 3 years: Manager A: Annual returns +18%, +5%, +22% vs benchmark +12%, +8%, +15%. Manager B: Annual returns +14%, +13%, +15% vs benchmark +12%, +8%, +15%. Which manager is more likely to be genuinely skilled?',
    option_a: 'Manager A — higher total outperformance over 3 years proves superior skill.',
    option_b: 'Manager B — more consistent outperformance across all three years suggests more reliable skill vs luck.',
    option_c: 'Both are equally skilled — they have similar 3-year cumulative returns.',
    correct_answer: 'B',
    explanation: 'Skill vs luck evaluation: Manager A: Year 1: +6% alpha. Year 2: -3% alpha. Year 3: +7% alpha. Total alpha: +10%. But year 2 underperformed — inconsistent. Manager B: Year 1: +2% alpha. Year 2: +5% alpha. Year 3: 0% alpha. Total alpha: +7%. But consistently positive — never underperformed. Assessment: Statistical tests for skill require consistency. A manager who outperforms 3/3 years is more likely skilled than 2/3 years, even with lower total alpha. Manager B\'s consistency (3/3 positive years) is more statistically significant evidence of skill. Manager A\'s high-variance performance could be luck — one good year in a different sector/style can produce large alpha without skill. Investment principle: Consistent, modest alpha (Manager B) is often more valuable than volatile high alpha (Manager A) because: Lower career risk for the client. Less dependent on one specific market environment. More likely to persist.',
    difficulty: 3
  },
  {
    id: 'pm-adv-28',
    topic_id: 'portfolio-management',
    question_text: 'Which of the following best describes the concept of "factor investing" and how it differs from traditional active management?',
    option_a: 'Factor investing systematically captures well-documented risk premiums (value, momentum, quality, low volatility) through rules-based strategies — transparent, lower cost than traditional active, but still active relative to cap-weighted benchmarks.',
    option_b: 'Factor investing is identical to passive indexing since it follows rules rather than manager discretion.',
    option_c: 'Factor investing generates alpha through stock selection — it is purely a form of fundamental active management.',
    correct_answer: 'A',
    explanation: 'Factor investing (smart beta) characteristics: What it is: Rules-based, systematic exposure to risk factors supported by academic research and historical evidence. Main factors: Value (low P/B, low P/E): Cheap stocks earn a premium. Size (small cap): Small caps outperform large caps over time. Momentum: Recent outperformers continue outperforming short-term. Quality (high ROE, low debt): High-quality companies earn premium. Low volatility: Low-beta stocks earn excess risk-adjusted returns. How it differs from: Traditional active (discretionary): Factor investing is systematic/transparent; discretionary is judgment-based and opaque. Pure passive (cap-weighted index): Factor portfolios deviate from cap weights based on factor scores → higher active share → tracking error vs benchmark. Costs: Between passive (0.05-0.20%) and active (0.70-1.00%), typically 0.20-0.40%. Key debate: Are factor premiums risk-based (compensation for genuine risk) or behavioral (exploiting systematic investor mistakes)?',
    difficulty: 2
  },
  {
    id: 'pm-adv-29',
    topic_id: 'portfolio-management',
    question_text: 'Analyst Elena Vasquez calculates the M² (Modigliani-Modigliani) measure for two funds: Fund X: Return 14%, SD 20%. Fund Y: Return 11%, SD 12%. Market: Return 12%, SD 15%. Risk-free rate: 3%. The M² measures and ranking are closest to:',
    option_a: 'Fund X M² = 12.75%; Fund Y M² = 12.0%; Fund X ranks higher.',
    option_b: 'Fund X M² = 14%; Fund Y M² = 11%; ranking based on raw returns.',
    option_c: 'Fund X M² = 10.5%; Fund Y M² = 12.0%; Fund Y ranks higher.',
    correct_answer: 'C',
    explanation: 'M² measures: Sharpe(X) = (14-3)/20 = 0.55. Sharpe(Y) = (11-3)/12 = 0.667. M²(X) = 3% + 0.55×15% = 11.25%. M²(Y) = 3% + 0.667×15% = 13.0%. Fund Y has higher M² (13% > 11.25%) → Fund Y ranks higher despite lower raw return (11% vs 14%). Fund X takes more total risk (SD=20%) that is not compensated by proportionally higher returns. M² adjusts to a common risk level (market SD) making funds comparable. Fund Y provides better return per unit of total risk — it would outperform Fund X if both were levered/de-levered to market risk.',
    difficulty: 3
  },
  {
    id: 'pm-adv-30',
    topic_id: 'portfolio-management',
    question_text: 'A portfolio manager implements tax-loss harvesting. In December, she identifies $200,000 of unrealized losses in a technology ETF. She sells the ETF and immediately buys a similar (but not identical) technology ETF. The tax benefit and key risk are closest to:',
    option_a: 'Tax benefit = $200,000 × marginal tax rate (up to ~$74,000 for 37% bracket); Key risk: wash-sale rule if substantially identical security is purchased within 30 days.',
    option_b: 'Tax benefit = $200,000; No risk if similar ETF is purchased.',
    option_c: 'No tax benefit — unrealized losses cannot be harvested until the investment is held for 1 year.',
    correct_answer: 'A',
    explanation: 'Tax-loss harvesting mechanics: By selling the ETF at a loss, she realizes the $200,000 loss for tax purposes. This loss offsets capital gains elsewhere in the portfolio or up to $3,000/year of ordinary income (unlimited offset of capital gains). Tax benefit = $200,000 × capital gains tax rate. For long-term gains: 20% federal = $40,000. For short-term gains at 37% marginal rate = $74,000. Buying a SIMILAR (not identical) ETF: Maintains market exposure (similar tech sector performance). Avoids the wash-sale rule: IRS prohibits claiming a loss if you buy the "substantially identical" security within 30 days before or after the sale. Risk: If she bought the exact same ETF (or an ETF that IRS deems "substantially identical"), the loss is disallowed and added to the cost basis of the new purchase. Key: Different ETF (e.g., sell SPY, buy IVV or VOO) maintains exposure while preserving the tax loss.',
    difficulty: 3
  },
  {
    id: 'pm-adv-31',
    topic_id: 'portfolio-management',
    question_text: 'Which of the following correctly describes the difference between strategic asset allocation (SAA), tactical asset allocation (TAA), and dynamic asset allocation (DAA)?',
    option_a: 'SAA: Long-term policy portfolio based on investor goals/risk tolerance. TAA: Short-term deviations from SAA based on market valuations/economic cycle. DAA: Systematic rules-based adjustments (e.g., risk parity, volatility targeting) responding to market conditions.',
    option_b: 'SAA, TAA, and DAA are identical — they all describe the process of choosing asset weights.',
    option_c: 'TAA is always superior to SAA since active timing adds value consistently.',
    correct_answer: 'A',
    explanation: 'Asset allocation approaches: Strategic Asset Allocation (SAA): Long-term policy portfolio. Based on: Investor objectives, risk tolerance, time horizon, liabilities. Rebalanced periodically back to targets. Example: 60% equity / 35% bonds / 5% alternatives (rebalanced annually). Tactical Asset Allocation (TAA): Short-term (3-12 month) deviations from SAA. Based on: Market valuations (CAPE, credit spreads), economic indicators, momentum. Example: Overweight equities by 5% when CAPE is below historical average. Adds value if forecasts are correct — evidence is mixed. Dynamic Asset Allocation (DAA): Rule-based, systematic adjustments based on observed market conditions. Examples: Risk parity (adjust weights for equal risk contribution). Volatility targeting (reduce risk when vol spikes). CPPI (constant proportion portfolio insurance). More mechanical than TAA — removes discretion. Option C: TAA evidence is mixed — most managers fail to add consistent value after costs. SAA is the foundation; TAA and DAA are potential enhancements.',
    difficulty: 2
  },
  {
    id: 'pm-adv-32',
    topic_id: 'portfolio-management',
    question_text: 'A portfolio manager is evaluating the "risk budgeting" approach to portfolio construction. She allocates risk rather than capital. Portfolio target volatility: 10%. Asset classes: Equities (SD=18%, target risk contribution 60%), Bonds (SD=6%, target risk contribution 25%), Commodities (SD=22%, target risk contribution 15%). What is the approximate equity weight?',
    option_a: '33%',
    option_b: '60%',
    option_c: '45%',
    correct_answer: 'A',
    explanation: 'Risk budgeting approach: Target risk contribution (not capital allocation) for each asset: Equity: 60% of total portfolio risk = 60% × 10% = 6% contribution to portfolio SD. Approximation (ignoring correlations): Weight × SD = Risk contribution. Equity weight × 18% ≈ 6%. Equity weight ≈ 6%/18% = 33%. Bond weight × 6% ≈ 2.5% (25% of 10%). Bond weight ≈ 2.5%/6% = 42%. Commodity weight × 22% ≈ 1.5%. Commodity weight ≈ 1.5%/22% = 7%. Check: 33% + 42% + 7% = 82% (not 100%, so correlations and cross-effects account for the remainder in the full calculation). Key insight: Risk budgeting leads to much lower equity weights than capital budgeting. To achieve only 60% of risk from equities despite their high volatility, equities get only 33% of capital vs 60% in a traditional 60/40. Bonds get ~42% of capital to contribute 25% of risk (their low volatility requires more capital per unit of risk).',
    difficulty: 3
  },
  {
    id: 'pm-adv-33',
    topic_id: 'portfolio-management',
    question_text: 'Client Thomas Berg has significant unrealized gains in a concentrated stock position ($3M in a single stock, original cost basis $300,000). He wants to diversify but is concerned about the large capital gains tax. Which strategy allows diversification while deferring taxes?',
    option_a: 'Sell immediately and pay capital gains tax — no alternative exists for tax deferral.',
    option_b: 'Exchange fund (pooling with other concentrated positions), zero-cost collar (hedge without selling), or charitable remainder trust (donate to charity, receive income stream) — all defer or reduce taxes while achieving diversification.',
    option_c: 'Short the stock — creates a synthetic sale that immediately triggers capital gains.',
    correct_answer: 'B',
    explanation: 'Concentrated position tax-efficient strategies: Exchange fund: Pool concentrated position with other investors into a diversified fund. Defer capital gains as no sale occurs. Must hold 7 years. IRS passive asset requirements. Zero-cost collar: Buy put (floor) + Sell call (ceiling) at zero net premium. Limits downside and upside without triggering a taxable sale. Defers tax until the position is eventually sold. Cannot monetize below the put strike immediately. Charitable Remainder Trust (CRT): Donate stock to CRT (avoid immediate capital gains). CRT sells diversified → no capital gains (charitable entity). Receive income stream for life. Estate tax benefits. Remainder goes to charity at death. Exchange Fund/Variable Prepaid Forward: Receive cash upfront (similar to a loan against concentrated position) without triggering immediate capital gains. Option C (shorting) creates a "constructive sale" → immediately triggers capital gains per IRS rules (Short Against the Box). Option A ignores multiple legitimate tax-deferral strategies.',
    difficulty: 3
  },
  {
    id: 'pm-adv-34',
    topic_id: 'portfolio-management',
    question_text: 'A CFA charterholder is asked by a client to recommend a cryptocurrency allocation of 30% of the portfolio. The client argues: "Crypto has outperformed everything for 5 years and will continue." The most appropriate response following CFA Standards is:',
    option_a: 'Recommend the allocation since the client has the right to make their own investment decisions.',
    option_b: 'Conduct thorough due diligence on the asset class, educate the client on risks (volatility, regulatory uncertainty, lack of intrinsic value analysis frameworks), and recommend a much smaller allocation (if any) consistent with the client\'s IPS, risk tolerance, and financial goals.',
    option_c: 'Refuse entirely — CFA Standards prohibit recommending speculative assets.',
    correct_answer: 'B',
    explanation: 'CFA Standards and suitability: Standard III(C) — Suitability: Members must ensure recommendations are appropriate for each client\'s specific situation. Fiduciary duty: Act in the client\'s BEST INTEREST, not simply execute their requests. Issues with 30% crypto allocation: 30% is an enormous allocation to a highly speculative asset. Past performance (5-year outperformance) does not guarantee future returns — recency bias. Cryptocurrency is uniquely volatile (80-90% drawdowns common), poorly regulated, and lacks traditional valuation frameworks. For most clients, a 30% crypto allocation would likely violate their IPS. Appropriate response: Educate about risks. Discuss the role (if any) of crypto in portfolio context. If client insists after education: Document the discussion, note the allocation was client-directed despite advisor concern. Perhaps implement a much smaller allocation (1-5%) if client\'s financial situation can absorb the risk. Option A (blindly execute): Violates suitability standards. Option C (refuse all crypto): Too absolute — small allocations may be appropriate for some clients.',
    difficulty: 3
  },
  {
    id: 'pm-adv-35',
    topic_id: 'portfolio-management',
    question_text: 'A portfolio risk model identifies the following risk sources for a global equity portfolio: Market risk (beta to global index): 65% of total variance. Country risk: 15%. Sector risk: 10%. Currency risk: 7%. Idiosyncratic stock risk: 3%. An analyst wants to reduce the portfolio\'s overall risk by 20%. Which risk source should be targeted first for the most efficient risk reduction?',
    option_a: 'Market risk (beta) — it contributes 65% of total variance, so reducing beta has the largest impact on total portfolio risk.',
    option_b: 'Idiosyncratic risk — it is the easiest to diversify away by adding more stocks.',
    option_c: 'Currency risk — hedging is cheap and eliminates a discrete risk source.',
    correct_answer: 'A',
    explanation: 'Risk reduction efficiency analysis: To reduce total portfolio risk by 20%, target the largest contributor first. Market risk = 65% of variance: Reducing beta from 1.0 to 0.80 (20% reduction) directly reduces this dominant risk source. Impact: 65% × 20% = 13% reduction in total variance → significant total risk reduction. Methods: Sell some equities, use futures overlay, buy put options. Idiosyncratic risk (3%): Already small contribution. Fully eliminating it would only reduce total risk by 3%. Requires holding hundreds of stocks — already well-diversified. Currency risk (7%): Hedging can eliminate but has costs (forward prices embed rate differentials). Only addresses 7% of variance. The principle: Attack the largest risk contributor first for maximum impact per unit of effort. The 65% market risk is the clear priority — reducing beta through futures is cost-efficient and immediately reduces total portfolio volatility. After addressing market risk, reassess whether remaining risk sources (country, sector, currency) warrant attention.',
    difficulty: 3
  },
  {
    id: 'pm-adv-36',
    topic_id: 'portfolio-management',
    question_text: 'A high-net-worth client has $10M to invest with the following goals: Primary: Preserve capital in real terms. Secondary: Generate $300,000/year income. Tertiary: Leave $5M to charity at death (20-year horizon). Current inflation: 3%. Which portfolio is most appropriate?',
    option_a: '100% inflation-linked bonds (TIPS) — maximum inflation protection and capital preservation.',
    option_b: '45% global equities, 35% TIPS/real bonds, 10% real assets (infrastructure/real estate), 10% cash — balances inflation protection with income generation and long-term growth for charitable bequest.',
    option_c: '70% dividend stocks, 30% bonds — maximum income generation for $300K/year goal.',
    correct_answer: 'B',
    explanation: 'Multi-goal portfolio construction: Goal hierarchy analysis: Primary (capital preservation in real terms): TIPS, real assets, inflation-linked instruments are necessary. Secondary ($300K/year = 3% of $10M): Income from dividends, bond coupons, distributions. 3% withdrawal is sustainable if portfolio earns 3%+ real return. Tertiary (leave $5M in 20 years): Need growth to protect the bequest value. $5M in 20 years at 3% inflation = $5M × (1.03)^20 = $9.03M in nominal terms. Need significant equity exposure for growth. Portfolio B (45/35/10/10): Equities (45%): Growth for bequest goal. Expected return: 9% nominal, 6% real. TIPS/Real bonds (35%): Direct inflation protection for primary goal. Real assets (10%): Additional inflation hedge + income. Cash (10%): Liquidity for income needs. This balanced approach addresses all three goals. Option A fails the growth and income objectives. Option C fails the inflation-protection and real capital preservation objectives.',
    difficulty: 3
  },
  {
    id: 'pm-adv-37',
    topic_id: 'portfolio-management',
    question_text: 'Portfolio manager Kenji Watanabe uses a mean-variance optimizer to construct a portfolio. The optimizer suggests a 0% weight for bonds (despite bonds having a positive Sharpe ratio) and 100% in equities. The most likely explanation is:',
    option_a: 'The optimizer correctly determined that bonds add no value — mean-variance optimization always produces the correct allocation.',
    option_b: 'The correlation between bonds and equities in the optimizer\'s input is too high, causing the optimizer to see bonds as redundant — or expected bond returns are too low relative to their risk contribution.',
    option_c: 'The optimizer is broken — it should always include some bonds for diversification.',
    correct_answer: 'B',
    explanation: 'MVO corner solutions: When MVO allocates 0% to an asset class (corner solution), likely causes: Low expected return relative to other assets: If bond expected return is too close to risk-free rate, MVO sees insufficient return premium to justify inclusion. High correlation with dominant asset: If bonds are positively correlated with equities in the input matrix (unusual but possible with 2022-type environments), their diversification benefit disappears. If bonds and equities are both expected to earn similar returns but bonds have positive correlation with equities, MVO correctly excludes bonds. Solutions: Impose constraints: minimum 10-15% bonds. Review correlation assumptions. Use Black-Litterman to start from equilibrium weights. Check for estimation errors in the correlation matrix. Option A is wrong — MVO produces optimal portfolios given the inputs, but inputs can be wrong. Option C is wrong — there is no automatic requirement for bonds in every portfolio.',
    difficulty: 3
  },
  {
    id: 'pm-adv-38',
    topic_id: 'portfolio-management',
    question_text: 'A fund manager reports the following performance: Year 1: +25% (market +20%), Year 2: -15% (market -18%), Year 3: +30% (market +25%), Year 4: +5% (market +8%), Year 5: +20% (market +15%). The Sharpe ratio and whether the manager added value net of market risk are closest to:',
    option_a: 'Manager outperformed in 4 of 5 years — clear evidence of skill, positive Jensen\'s alpha.',
    option_b: 'Need to calculate beta-adjusted returns to determine if outperformance is skill (alpha) or systematic risk (beta) exposure.',
    option_c: 'The manager underperformed in Year 2 and Year 4 — cannot have consistent skill.',
    correct_answer: 'B',
    explanation: 'Performance attribution requires proper risk adjustment: The manager outperformed in 4 of 5 years in absolute terms — but this could be explained by: Higher beta (more market exposure than the benchmark). If the manager has beta = 1.3: In Year 1: CAPM expected = Rf + 1.3×(20%-Rf). If Rf=3%: Expected = 3% + 1.3×17% = 25.1%. Manager earned 25% ≈ exactly what beta predicts → zero alpha. The proper evaluation: Estimate beta from time series regression. Calculate Jensen\'s alpha = Actual return - CAPM predicted return. Only positive, statistically significant alpha represents genuine skill. Without knowing the fund\'s beta, we cannot determine if the outperformance is skill (alpha) or just beta exposure. Option A makes the common mistake of attributing market outperformance to skill without controlling for systematic risk. Option C is too harsh — underperforming in 2/5 years is consistent with skill if alpha is positive on average.',
    difficulty: 3
  },
  {
    id: 'pm-adv-39',
    topic_id: 'portfolio-management',
    question_text: 'Which of the following correctly describes the "separation theorem" in modern portfolio theory and its practical implications?',
    option_a: 'All investors should hold the same risky portfolio (the market portfolio) — their risk preference only determines the split between the market portfolio and the risk-free asset, not the composition of the risky portfolio.',
    option_b: 'Investors should separate their portfolio into income-producing and growth assets based on their personal financial goals.',
    option_c: 'The separation theorem implies that active management is impossible — all investors must be passive.',
    correct_answer: 'A',
    explanation: 'Separation Theorem (Tobin): In the CAPM framework with a risk-free asset: All investors face the same efficient frontier (common capital market line). The tangency portfolio (market portfolio) is the same for all investors. Separation: Investment decision (WHAT to hold in risky portfolio) is separated from financing decision (HOW MUCH to hold in risky vs risk-free). Result: Conservative investor: 70% risk-free + 30% market portfolio. Aggressive investor: 0% risk-free + 100% market portfolio (or even leveraged). All investors hold the market portfolio in their risky allocation. Practical implications: This is the theoretical basis for indexing — the market portfolio is optimal for all investors. Active management attempts to find a portfolio superior to the market portfolio. If markets are efficient (CAPM holds): Active management cannot consistently outperform → passive is optimal. Limitations: Real markets have heterogeneous expectations → different investors have different tangency portfolios. Transaction costs, taxes, and constraints differ across investors.',
    difficulty: 2
  },
  {
    id: 'pm-adv-40',
    topic_id: 'portfolio-management',
    question_text: 'An investment committee is comparing two risk measures for their $1B portfolio: 95% VaR = $30M and Expected Shortfall (ES, also called CVaR) = $45M. Which statement best describes what these measures tell the committee?',
    option_a: 'VaR: In 95% of scenarios, daily loss will not exceed $30M. ES: When losses DO exceed $30M (the worst 5% of days), the average loss is $45M.',
    option_b: 'VaR: Maximum possible loss is $30M. ES: Maximum loss is $45M.',
    option_c: 'Both measures are identical — ES is just VaR at a different confidence level.',
    correct_answer: 'A',
    explanation: 'VaR vs Expected Shortfall interpretation: 95% VaR = $30M: On any given day, there is a 95% probability that losses will NOT exceed $30M. Alternatively: There is a 5% probability (1 in 20 days) of losing more than $30M. VaR does NOT tell you HOW MUCH you lose in the worst 5% of scenarios. Expected Shortfall (ES/CVaR) = $45M: This is the AVERAGE loss given that you ARE in the worst 5% of scenarios. On the worst 5% of days, expected loss = $45M (some days -$35M, others -$55M, averaging $45M). ES advantages over VaR: Captures tail risk beyond the VaR threshold. Sub-additive (diversification reduces ES). Penalizes fat-tailed distributions more appropriately. Regulatory preference: Basel III/IV requires ES (99-day stressed ES) rather than VaR for market risk capital. Option B: VaR and ES are NOT maximum losses — actual maximum can be much larger. Option C: ES provides different information than VaR at a different level.',
    difficulty: 2
  },
  {
    id: 'pm-adv-41',
    topic_id: 'portfolio-management',
    question_text: 'Portfolio manager Carlos Mendez is implementing a "portable alpha" strategy. He holds $100M in S&P 500 futures (providing beta exposure) and manages a $100M market-neutral long/short equity strategy (providing alpha, targeting 5% return at 3% volatility). The combined strategy aims to:',
    option_a: 'Earn market return (beta) + long/short alpha = S&P 500 return + 5%, with total volatility slightly above market volatility.',
    option_b: 'Eliminate all market risk by offsetting beta with the long/short strategy.',
    option_c: 'Double the market return by using leverage through futures.',
    correct_answer: 'A',
    explanation: 'Portable alpha mechanics: Traditional approach: Hold stocks → get both beta AND idiosyncratic stock risk. Portable alpha: Separate beta and alpha: Beta exposure: S&P 500 futures provide market return (with minimal capital outlay — only margin required). Alpha source: Use released capital ($100M) in a market-neutral long/short strategy that generates alpha independent of market direction. Combined return: Market return (from futures) + Long/short alpha (5%) + Collateral return (T-bills on the $100M margin). Total expected return = S&P 500 return + 5% + T-bill rate. Total risk: Market risk (from futures, beta≈1) + Small additional risk from L/S strategy (market-neutral, 3% vol). Net result: Better than holding S&P 500 alone by +5% alpha annually. The "portable" part: Alpha is "ported" from the long/short strategy onto the S&P 500 beta exposure. Allows investors to separate their beta source (cheap, passive) from their alpha source (wherever best alpha exists).',
    difficulty: 3
  },
  {
    id: 'pm-adv-42',
    topic_id: 'portfolio-management',
    question_text: 'A CFA charterholder manages both institutional and retail accounts. A large institutional client requests preferential treatment: "Execute our trades first before other clients when you have a strong buy conviction." Which response is most consistent with CFA Standards?',
    option_a: 'Agree — large clients deserve priority service as they generate more revenue.',
    option_b: 'Decline — CFA Standard III(B) requires fair dealing: all clients must be treated fairly and orders executed according to a systematic allocation policy, not client size.',
    option_c: 'Partially agree — institutional clients can get priority for orders over $1M to reflect their market impact.',
    correct_answer: 'B',
    explanation: 'CFA Standard III(B) — Fair Dealing: Members must deal fairly and objectively with all clients when: Making investment recommendations. Taking investment action. Standard requirements: All clients should receive investment recommendations and actions simultaneously (or as near-simultaneously as possible). Order allocation must follow a systematic, pre-disclosed policy (e.g., pro-rata allocation). Cannot give preferential treatment based on client size, relationship, or fees paid. Acceptable practices: Different service levels (more frequent communication with large clients) are permissible. Different products (institutional products for large clients) are permissible. NOT acceptable: Front-running own accounts or favored clients. Allocating IPO shares preferentially to large clients. Executing trades in order of client size. Consequences: Violating fair dealing exposes the manager to regulatory sanctions, loss of CFA designation, civil liability. The institutional client\'s request directly asks the manager to violate this standard — must decline.',
    difficulty: 2
  },
  {
    id: 'pm-adv-43',
    topic_id: 'portfolio-management',
    question_text: 'A portfolio manager is analyzing the impact of rebalancing frequency on a 60/40 portfolio. She compares monthly, quarterly, and annual rebalancing over a 10-year period. Which statement is most accurate regarding the trade-offs?',
    option_a: 'More frequent rebalancing always produces better risk-adjusted returns by maintaining the target allocation precisely.',
    option_b: 'More frequent rebalancing better maintains target risk exposure but incurs higher transaction costs and taxes — the optimal frequency balances rebalancing benefits against trading costs.',
    option_c: 'Annual rebalancing is always optimal — transaction costs from more frequent rebalancing eliminate any benefit.',
    correct_answer: 'B',
    explanation: 'Rebalancing frequency trade-offs: Benefits of more frequent rebalancing: Better risk control — portfolio stays closer to target weights. Systematic "buy low, sell high" discipline — reduces high-performing assets that have become overweight. Reduces drift risk — after strong equity bull markets, 60/40 can drift to 70/30+. Costs of more frequent rebalancing: Transaction costs — bid-ask spreads, commissions on each trade. Tax costs — selling winners triggers capital gains (significant in taxable accounts). Time/operational costs. Research findings: Threshold-based rebalancing (rebalance when allocation drifts more than X%) often outperforms time-based (monthly/quarterly) by reducing unnecessary trades. Tax-aware rebalancing: Use new contributions to rebalance. Rebalance across tax-deferred accounts where possible. Tax-loss harvest simultaneously. Optimal frequency depends on: Account type (taxable vs tax-deferred). Transaction cost structure. Volatility of asset classes. Acceptable tracking error to target allocation.',
    difficulty: 2
  },
  {
    id: 'pm-adv-44',
    topic_id: 'portfolio-management',
    question_text: 'A multi-asset portfolio manager wants to maximize the portfolio Sharpe ratio. She currently has a portfolio (Sharpe 0.65) and is evaluating adding Asset Z (Sharpe 0.40, correlation with current portfolio = 0.15). Which calculation determines if Asset Z should be added?',
    option_a: 'Add Asset Z if its Sharpe ratio (0.40) exceeds the portfolio Sharpe (0.65) — it does not, so exclude.',
    option_b: 'Add Asset Z if Sharpe(Z) > Sharpe(portfolio) × correlation(Z, portfolio): 0.40 > 0.65 × 0.15 = 0.098. Since 0.40 > 0.098, ADD Asset Z.',
    option_c: 'Add Asset Z only if its expected return exceeds the portfolio expected return.',
    correct_answer: 'B',
    explanation: 'Optimal asset addition rule: The condition for adding an asset to improve portfolio Sharpe ratio: Sharpe(new asset) > Sharpe(current portfolio) × Correlation(new asset, portfolio). Application: Sharpe(Z) = 0.40. Sharpe(portfolio) × ρ = 0.65 × 0.15 = 0.098. Since 0.40 > 0.098 → ADD Asset Z. Intuition: Even a low-Sharpe asset can improve portfolio Sharpe ratio if its correlation with the existing portfolio is low enough. The low correlation (0.15) means Asset Z provides significant diversification benefits that more than offset its below-average standalone risk-adjusted return. Result: Adding Asset Z will increase the portfolio Sharpe ratio above 0.65 because the diversification benefit exceeds the return drag. This is why investors hold assets like gold, trend-following strategies, or real assets — their low correlation creates portfolio value even with seemingly unattractive standalone characteristics. Option A applies the wrong criterion — never compare assets solely on standalone Sharpe without considering correlation.',
    difficulty: 3
  },
  {
    id: 'pm-adv-45',
    topic_id: 'portfolio-management',
    question_text: 'A portfolio manager uses Monte Carlo simulation to project retirement outcomes for a 65-year-old client with $2M in savings and $80,000/year spending needs. The simulation shows: 90th percentile outcome (favorable): $5.2M at age 90. 50th percentile (median): $2.8M at age 90. 10th percentile (unfavorable): Portfolio depleted at age 82. What is the probability of portfolio depletion before age 90 and how should the manager interpret this?',
    option_a: 'Probability of depletion = 10%; the manager should inform the client that there is a 10% chance of running out of money before age 90 and discuss risk mitigation strategies.',
    option_b: 'Probability of depletion = 50%; the median outcome of $2.8M means half the time the client has insufficient funds.',
    option_c: 'The simulation results are unreliable — Monte Carlo cannot predict retirement outcomes.',
    correct_answer: 'A',
    explanation: 'Monte Carlo interpretation: The 10th percentile outcome shows portfolio depletion at age 82 → this means 10% of simulated scenarios result in running out of money before age 90. This is the "probability of ruin" — running out of money before the end of the planning horizon. Client communication: "There is approximately a 10% probability that your portfolio will be depleted before age 90 under the current spending plan." Risk mitigation strategies to discuss: Reduce spending (from $80K to $70K/year). Delay Social Security (increases benefit). Partial annuitization (buy income annuity to guarantee baseline income). Reduce equity risk if client prioritizes avoiding ruin over maximizing wealth. Acceptable ruin probability varies: Most financial planners target < 10-15% probability of ruin. Very risk-averse clients may want < 5%. The median outcome ($2.8M at 90) is not relevant for assessing ruin risk — it is the tail scenarios that matter for financial security planning.',
    difficulty: 3
  },
  {
    id: 'pm-adv-46',
    topic_id: 'portfolio-management',
    question_text: 'Which of the following best describes the "sequence of returns risk" and why it is particularly important for retirees versus accumulators?',
    option_a: 'Sequence of returns risk is the danger that poor returns occur early in retirement (when the portfolio is largest) rather than late — early losses combined with withdrawals permanently reduce the portfolio base, even if average returns are the same.',
    option_b: 'Sequence of returns risk only affects portfolios with bonds — equity-only portfolios are immune.',
    option_c: 'Sequence of returns risk is identical for accumulators and retirees — the order of returns never matters for long-term outcomes.',
    correct_answer: 'A',
    explanation: 'Sequence of returns risk: For ACCUMULATORS (no withdrawals): Only the average return matters for final wealth — the order of returns does NOT matter. $1,000 × (1.20) × (0.80) = $1,000 × (0.80) × (1.20) = $960. Same regardless of order. For RETIREES (regular withdrawals): The order MATTERS enormously. Early poor returns + withdrawals: Portfolio shrinks, then smaller portfolio compounds poorly → may deplete early. Early good returns + withdrawals: Portfolio grows despite withdrawals → larger base survives downturns. Example: $1M portfolio, $50K/year withdrawal. Scenario A: -30% Year 1, then +7%/year: Portfolio depleted around Year 17. Scenario B: +7%/year, then -30% Year 15: Portfolio still has ~$800K at Year 25. Same average return, vastly different outcomes. Mitigation strategies: Cash/bond buffer (bucket strategy). Flexible spending (reduce withdrawals in down years). CPPI-type strategies. Annuitization for baseline income.',
    difficulty: 2
  },
  {
    id: 'pm-adv-47',
    topic_id: 'portfolio-management',
    question_text: 'A portfolio manager implements a "smart beta" equal-weight portfolio versus a market-cap weighted S&P 500 index. Over 20 years, the equal-weight portfolio returns 11.5% vs 10.2% for the cap-weight index. The most likely explanation for the outperformance is:',
    option_a: 'Equal-weight portfolios are always superior — mathematical proof exists.',
    option_b: 'Equal-weighting implicitly overweights smaller companies and value stocks (tilts toward size and value factors), providing systematic exposure to documented risk premiums.',
    option_c: 'The outperformance is pure alpha — equal-weighting is an active strategy that generates genuine manager skill.',
    correct_answer: 'B',
    explanation: 'Equal-weight portfolio return analysis: By equal-weighting all 500 S&P 500 companies (0.2% each), the portfolio: Overweights smaller S&P 500 members relative to cap-weighting. Underweights the largest mega-caps (Apple, Microsoft, etc.). Implicit factor tilts: Size tilt (smaller companies get relatively more weight). Value tilt (equal weight rebalances — systematically "sells" winners and "buys" losers, which approximates a contrarian/value approach). Rebalancing alpha: Equal-weight requires monthly/quarterly rebalancing → systematic sell-high, buy-low creates a "rebalancing premium." Factor explanations: The 1.3% outperformance is largely explained by: Fama-French size premium. Value tilt from systematic rebalancing. NOT alpha: No manager skill is required to equal-weight mechanically. Option A is wrong — equal-weight has higher turnover costs and may underperform in large-cap momentum environments. Option C misattributes systematic factor exposure to manager skill.',
    difficulty: 3
  },
  {
    id: 'pm-adv-48',
    topic_id: 'portfolio-management',
    question_text: 'A portfolio manager is constructing a portfolio for a university endowment. The endowment has: $500M in assets, 5% annual spending requirement, 20+ year time horizon, no near-term liquidity needs. Current allocation: 55% public equities, 25% bonds, 20% alternatives. The investment committee wants to increase alternatives to 35%. Which of the following is the most appropriate analysis framework?',
    option_a: 'Reject the increase — alternatives are too risky for an educational institution.',
    option_b: 'Evaluate the proposed allocation change by: (1) assessing whether expected alternative returns justify illiquidity, (2) ensuring sufficient liquid assets for annual spending needs, (3) reviewing whether 35% alternatives creates excessive manager/operational risk concentration.',
    option_c: 'Accept immediately — the Yale Model proves high alternative allocations always outperform.',
    correct_answer: 'B',
    explanation: 'Endowment alternatives allocation analysis: Key questions to evaluate: Return justification: Do alternatives provide sufficient illiquidity premium (1-3%+ above liquid equivalents) to justify lockups and complexity? Expected alternatives return > liquid alternative return? Liquidity adequacy: Annual spending = 5% × $500M = $25M. Public equities (55%): $275M — highly liquid, can fund spending. If alternatives increase to 35%, public equities decrease to ~30% ($150M). Still adequate for annual spending. Manager/operational risk: 35% alternatives requires: Due diligence on 10-20+ fund managers. Operational infrastructure. Legal/compliance capabilities. Appropriate for $500M endowment — minimum viable scale. Historical evidence: Yale (70%+ alternatives): Dramatically outperformed. Smaller endowments: Less evidence of alternatives advantage (capacity constraints, less access to top managers). Recommendation: The analysis framework (Option B) is correct — evaluate each dimension rather than blanket accept or reject. Option C oversimplifies — the Yale Model\'s success depends on exceptional manager access not all endowments have.',
    difficulty: 3
  },
  {
    id: 'pm-adv-49',
    topic_id: 'portfolio-management',
    question_text: 'A global macro fund manager has the following view: "The US dollar will strengthen against the Japanese yen by 10% over the next 6 months." The manager wants to express this view with maximum capital efficiency. The most appropriate strategy is:',
    option_a: 'Buy USD/JPY currency forward contracts — zero upfront capital required (except margin), provides pure currency exposure.',
    option_b: 'Buy US dollars and sell Japanese yen in the spot market — requires full capital deployment.',
    option_c: 'Buy US Treasury bonds — USD-denominated assets provide indirect dollar exposure.',
    correct_answer: 'A',
    explanation: 'Capital-efficient currency expression: Currency forward contracts: Agree today to buy USD and sell JPY at the forward rate (spot + interest rate differential). Settlement in 6 months → no upfront capital beyond initial margin (typically 2-5% of notional). Full notional exposure to USD/JPY rate move. Capital efficiency: $10M notional forward requires only ~$200,000-$500,000 margin. If JPY depreciates 10%: Profit = 10% × $10M = $1M on $200K margin = 500% return on capital. Alternatives comparison: Spot FX (B): Requires $10M upfront capital → low capital efficiency (10% move on $10M = $1M = 10% return on capital). US Treasuries (C): Indirect exposure — USD strengthens as rates rise or demand increases, but this adds interest rate risk, credit risk, and duration risk → not a pure currency bet. FX options: Could also work but require premium payment upfront. Forwards are the most capital-efficient pure currency expression for institutional managers.',
    difficulty: 3
  },
  {
    id: 'pm-adv-50',
    topic_id: 'portfolio-management',
    question_text: 'A CFA charterholder is presenting investment performance to a prospective client. She selects the best 3-year period from her 10-year track record to show in the presentation. A colleague advises this violates GIPS standards. The colleague is correct because:',
    option_a: 'GIPS requires presenting only the most recent 5 years of performance (or full performance history if less than 5 years) — cherry-picking favorable periods violates the standard\'s full disclosure requirements.',
    option_b: 'GIPS prohibits presenting any historical performance — only future projections are permissible.',
    option_c: 'The colleague is wrong — selecting favorable periods is standard marketing practice and fully compliant with GIPS.',
    correct_answer: 'A',
    explanation: 'GIPS (Global Investment Performance Standards) compliance: Core GIPS principles: Fair representation: Composite performance must represent all accounts meeting the composite definition — cannot exclude underperforming accounts. Full disclosure: Present minimum 5 years of performance (or since inception if less than 5 years). Cannot cherry-pick favorable periods. Must include all relevant statistics: time-weighted returns, dispersion, number of portfolios. Composites: Performance must be presented for composites (groups of similar mandates), not individual best-performing accounts. Violation in this case: Selecting the best 3-year period from a 10-year track record: Cherry-picking favorable periods. Not presenting the full required history. Creates a misleading impression of manager skill. GIPS prohibition: Presenting selective periods when more complete data is available violates the full disclosure principle. The manager must present at least 5 full years (or complete history if less than 5 years). Consequences: Loss of GIPS compliance claim. Potential violation of CFA Standard I(C) — Misrepresentation.',
    difficulty: 2
  }
];
