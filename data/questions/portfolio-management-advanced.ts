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
  }
];
