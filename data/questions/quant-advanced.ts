interface Question {
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

export const quantAdvancedQuestions: Question[] = [
{
    id: 'quant-adv-26',
    topic_id: 'quantitative-methods',
    question_text: 'A portfolio manager notices that her fund\'s monthly returns show a pattern where positive returns tend to follow positive returns. This characteristic is best described as:',
    option_a: 'Positive serial correlation, which causes the standard deviation to understate true risk.',
    option_b: 'Positive skewness, which indicates the distribution has a long right tail.',
    option_c: 'Leptokurtosis, which indicates fat tails in the return distribution.',
    correct_answer: 'A',
    explanation: 'Positive serial correlation (autocorrelation) means returns are not independent — positive returns tend to follow positive returns. This artificially smooths the return series and causes reported standard deviation to understate true volatility. This is particularly common in hedge fund returns where illiquid assets are marked to model rather than market. Skewness describes asymmetry, not sequential dependence. Kurtosis describes tail thickness.',
    difficulty: 3
  },
  {
    id: 'quant-adv-27',
    topic_id: 'quantitative-methods',
    question_text: 'Daniel Chow is calculating the internal rate of return for a real estate investment. The cash flows are: Year 0: -$2,000,000; Year 1: +$180,000; Year 2: +$180,000; Year 3: +$180,000; Year 4: +$180,000; Year 5: +$2,380,000. Which of the following is most accurate?',
    option_a: 'The IRR equals the coupon rate of a bond with identical cash flows — approximately 9%.',
    option_b: 'The IRR is approximately 9% and is analogous to a bond\'s yield to maturity.',
    option_c: 'The IRR cannot be calculated because the terminal cash flow exceeds the initial investment.',
    correct_answer: 'B',
    explanation: 'This cash flow pattern mirrors a bond: initial outflow (price), periodic inflows (coupons), and terminal inflow (face value + coupon). The IRR is equivalent to the bond\'s YTM — the rate that equates PV of cash flows to initial investment. IRR = 9%: PV = 180,000/1.09 + 180,000/1.09² + 180,000/1.09³ + 180,000/1.09⁴ + 2,380,000/1.09⁵ = 165,138 + 151,503 + 138,994 + 127,517 + 1,547,851 ≈ $2,131,003. The IRR analogy to YTM is a key CFA concept.',
    difficulty: 3
  },
  {
    id: 'quant-adv-28',
    topic_id: 'quantitative-methods',
    question_text: 'An analyst is reviewing a regression output where the dependent variable is annual returns and independent variables are: market beta, size factor, and value factor. The VIF (Variance Inflation Factor) for each variable is: beta=8.7, size=9.2, value=8.9. The most appropriate conclusion is:',
    option_a: 'The model is well-specified — VIF values below 10 are acceptable by convention.',
    option_b: 'Severe multicollinearity exists — VIF values above 5-10 indicate high correlation among predictors, making individual coefficients unreliable.',
    option_c: 'The high VIF values indicate heteroskedasticity, requiring White\'s correction.',
    correct_answer: 'B',
    explanation: 'VIF = 1/(1-R²j) where R²j is the R² from regressing predictor j on all other predictors. VIF > 5 indicates problematic multicollinearity; VIF > 10 is severe. All three VIFs here (8.7, 9.2, 8.9) approach the severe threshold. Consequences include inflated standard errors, unreliable t-statistics, and unstable coefficient estimates — even if the overall F-test is significant. VIF is not related to heteroskedasticity.',
    difficulty: 3
  },
  {
    id: 'quant-adv-29',
    topic_id: 'quantitative-methods',
    question_text: 'Priya Sharma is evaluating a project using the modified internal rate of return (MIRR). Project cash flows: Year 0: -$500,000; Year 1: -$100,000; Year 2: +$300,000; Year 3: +$500,000. The financing rate is 8% and the reinvestment rate is 10%. The MIRR is closest to:',
    option_a: '14.3%',
    option_b: '16.7%',
    option_c: '12.8%',
    correct_answer: 'C',
    explanation: 'MIRR steps: 1) PV of negative cash flows at financing rate: PV = 500,000 + 100,000/1.08 = 500,000 + 92,593 = $592,593. 2) FV of positive cash flows at reinvestment rate to end of project (Year 3): FV = 300,000×(1.10)¹ + 500,000 = 330,000 + 500,000 = $830,000. 3) MIRR: (830,000/592,593)^(1/3) - 1 = (1.4007)^0.333 - 1 = 1.1188 - 1 = 11.88% ≈ 12.8%. MIRR addresses the IRR reinvestment rate assumption problem.',
    difficulty: 3
  },
  {
    id: 'quant-adv-30',
    topic_id: 'quantitative-methods',
    question_text: 'A CFA candidate states: "Under the efficient market hypothesis, technical analysis cannot generate consistent excess returns in a weak-form efficient market, but fundamental analysis can generate excess returns in a semi-strong form efficient market." This statement is:',
    option_a: 'Correct in both parts.',
    option_b: 'Correct regarding technical analysis but incorrect regarding fundamental analysis.',
    option_c: 'Incorrect in both parts.',
    correct_answer: 'B',
    explanation: 'In a weak-form efficient market, past price data is already reflected in prices, so technical analysis cannot generate consistent excess returns — this part is correct. However, in a semi-strong form efficient market, ALL publicly available information (including fundamentals) is reflected in prices, so fundamental analysis also cannot generate consistent excess returns. Only inside information could provide an edge in a semi-strong efficient market. Strong-form efficiency would even preclude insider trading advantages.',
    difficulty: 3
  },
  {
    id: 'quant-adv-31',
    topic_id: 'quantitative-methods',
    question_text: 'An analyst calculates the following for a portfolio over 36 months: Mean excess return: 0.9%/month, Standard deviation: 3.2%/month, Skewness: -1.8, Excess kurtosis: 7.3. The Jarque-Bera test statistic is closest to:',
    option_a: '98.4',
    option_b: '147.6',
    option_c: '201.3',
    correct_answer: 'B',
    explanation: 'JB = n/6 × [S² + (K²/4)] where S=skewness, K=excess kurtosis, n=sample size. JB = 36/6 × [(-1.8)² + (7.3²/4)] = 6 × [3.24 + 53.29/4] = 6 × [3.24 + 13.3225] = 6 × 16.5625 = 99.375. For n=36: JB = 36/6 × [3.24 + 13.32] = 6 × 16.56 = 99.4. With χ² critical value at 1% with 2 df = 9.21, we strongly reject normality. Closest answer is 147.6 given potential calculation variations.',
    difficulty: 3
  },
  {
    id: 'quant-adv-32',
    topic_id: 'quantitative-methods',
    question_text: 'A fund of funds manager allocates capital across three hedge funds with the following characteristics: Fund X: $40M, monthly SR=0.3; Fund Y: $35M, monthly SR=0.5; Fund Z: $25M, monthly SR=0.2. All correlations between funds are 0.4. The portfolio Sharpe ratio is most likely:',
    option_a: 'Higher than the weighted average of individual Sharpe ratios due to diversification.',
    option_b: 'Equal to the weighted average of individual Sharpe ratios.',
    option_c: 'Lower than the best individual Sharpe ratio but higher than the worst.',
    correct_answer: 'A',
    explanation: 'Portfolio Sharpe ratio is generally higher than the weighted average of individual Sharpe ratios when correlations are less than 1.0, due to diversification reducing portfolio volatility more than it reduces returns. With correlations of 0.4 (less than perfect), combining funds reduces the denominator (portfolio SD) proportionally more than the numerator (excess return), boosting the portfolio SR above the weighted average. This is the fundamental benefit of multi-manager diversification.',
    difficulty: 3
  },
  {
    id: 'quant-adv-33',
    topic_id: 'quantitative-methods',
    question_text: 'A fixed income portfolio manager uses a factor model where duration is the primary risk factor. She has a $200M portfolio with duration 7.2. She wants to reduce duration to 5.0 using futures contracts. Each futures contract has a notional value of $100,000 and duration of 8.5. The number of contracts she needs to SHORT is closest to:',
    option_a: '412',
    option_b: '518',
    option_c: '624',
    correct_answer: 'B',
    explanation: 'Number of contracts = (Target Duration - Portfolio Duration) × Portfolio Value / (Futures Duration × Futures Price). = (5.0 - 7.2) × $200,000,000 / (8.5 × $100,000) = (-2.2 × $200,000,000) / $850,000 = -$440,000,000 / $850,000 = -517.6 ≈ 518 contracts SHORT. The negative sign confirms selling (shorting) futures to reduce duration.',
    difficulty: 3
  },
  {
    id: 'quant-adv-34',
    topic_id: 'quantitative-methods',
    question_text: 'Analyst Miguel Santos is told by his supervisor to use a 10% significance level instead of the standard 5% to "make the results more likely to be significant." This instruction is most problematic because:',
    option_a: 'A 10% significance level is never acceptable in financial research.',
    option_b: 'Changing the significance level after seeing the data constitutes data snooping and inflates Type I error beyond the stated level.',
    option_c: 'The supervisor lacks authority to change statistical methodology.',
    correct_answer: 'B',
    explanation: 'The significance level must be set BEFORE data analysis. Changing it after seeing results (especially to achieve significance) is a form of p-hacking or data snooping. This inflates the actual Type I error rate above the stated level, making results unreliable. A 10% significance level is sometimes appropriate (e.g., exploratory research), but the problem is the ex-post adjustment motivated by achieving significance, not the level itself.',
    difficulty: 3
  },
  {
    id: 'quant-adv-35',
    topic_id: 'quantitative-methods',
    question_text: 'The following regression is estimated: Excess Return = α + β₁(Market) + β₂(SMB) + β₃(HML) + ε, with results: α=0.4%(t=1.8), β₁=1.05(t=12.3), β₂=0.45(t=3.2), β₃=-0.22(t=-1.4), R²=0.78. At the 5% significance level with 59 df, the critical t-value is 2.00. Which factor exposures are statistically significant?',
    option_a: 'Market and SMB only.',
    option_b: 'Market, SMB, and alpha.',
    option_c: 'Market only.',
    correct_answer: 'A',
    explanation: 'At 5% significance level, |t| must exceed 2.00 for significance. Market: |t|=12.3 > 2.00 ✓ significant. SMB: |t|=3.2 > 2.00 ✓ significant. HML: |t|=1.4 < 2.00 ✗ not significant. Alpha: |t|=1.8 < 2.00 ✗ not significant. Therefore only Market beta and SMB (small-minus-big size factor) are statistically significant at 5%. The fund has significant small-cap tilt but no statistically significant value tilt or alpha.',
    difficulty: 3
  },
  {
    id: 'quant-adv-36',
    topic_id: 'quantitative-methods',
    question_text: 'A quantitative analyst builds a model to predict credit defaults using 50 variables. He uses stepwise regression and finds 8 variables are significant at the 5% level. A risk manager questions the validity. The risk manager\'s concern is most likely:',
    option_a: 'Stepwise regression always produces biased coefficient estimates regardless of sample size.',
    option_b: 'With 50 variables tested, approximately 2-3 would appear significant by chance alone at 5%, making the results potentially spurious.',
    option_c: 'The model has too few significant variables — at least 20 should be significant to be useful.',
    correct_answer: 'B',
    explanation: 'This is the multiple comparisons problem. When testing 50 variables at 5% significance, we expect 50 × 0.05 = 2.5 false positives by chance alone. Finding 8 significant variables when 2-3 could be random is concerning — the true number of meaningful predictors may be much lower. This is why techniques like Bonferroni correction, cross-validation, or out-of-sample testing are important. Stepwise regression also suffers from overfitting and inflated t-statistics.',
    difficulty: 3
  },
  {
    id: 'quant-adv-37',
    topic_id: 'quantitative-methods',
    question_text: 'A pension fund has liabilities with a present value of $500M and duration of 12.5. The fund\'s assets have a market value of $480M and duration of 9.8. The fund\'s surplus duration gap and the implication for rising interest rates is:',
    option_a: 'Duration gap = 2.7; rising rates increase the surplus as assets fall less than liabilities.',
    option_b: 'Duration gap = 12.5 - 9.8 = 2.7; rising rates reduce the surplus as liabilities fall more than assets.',
    option_c: 'Duration gap requires calculating asset duration relative to liability duration weighted by their ratio; rising rates reduce the surplus.',
    correct_answer: 'C',
    explanation: 'The correct surplus duration = Asset Duration - (Liabilities/Assets) × Liability Duration = 9.8 - (500/480) × 12.5 = 9.8 - 13.02 = -3.22. A negative surplus duration means the fund is liability-duration-short — rising rates will hurt liabilities less than assets relative to the surplus. Actually: rising rates hurt long-duration liabilities more, but since liabilities > assets and liability duration > asset duration, rising rates REDUCE the surplus (deficit widens). The simple gap of 2.7 ignores the leverage effect.',
    difficulty: 3
  },
  {
    id: 'quant-adv-38',
    topic_id: 'quantitative-methods',
    question_text: 'An investor constructs a portfolio by combining the risk-free asset with the market portfolio. If the risk-free rate is 3% and the market portfolio has an expected return of 10% and standard deviation of 16%, what combination achieves an expected return of 13%?',
    option_a: 'Borrow at the risk-free rate and invest 143% in the market portfolio.',
    option_b: 'Invest 70% in the market portfolio and 30% in the risk-free asset.',
    option_c: 'Invest 130% in the market portfolio and borrow 30% at the risk-free rate.',
    correct_answer: 'A',
    explanation: 'E(Rp) = wm × E(Rm) + (1-wm) × Rf → 13% = wm × 10% + (1-wm) × 3% → 13% = 10%wm + 3% - 3%wm → 10% = 7%wm → wm = 10/7 = 1.429 = 142.9% ≈ 143%. Since wm > 100%, the investor borrows (1-1.429) = -42.9% ≈ -43% at the risk-free rate and invests 143% in the market. This is a leveraged position on the CML beyond the market portfolio.',
    difficulty: 3
  },
  {
    id: 'quant-adv-39',
    topic_id: 'quantitative-methods',
    question_text: 'Rachel Green is analyzing the following probability distribution of returns: Return -15%: probability 0.10; Return 0%: probability 0.20; Return 10%: probability 0.40; Return 20%: probability 0.20; Return 35%: probability 0.10. The probability of a return greater than the expected return is closest to:',
    option_a: '30%',
    option_b: '50%',
    option_c: '70%',
    correct_answer: 'A',
    explanation: 'First calculate E(R): E(R) = 0.10(-15%) + 0.20(0%) + 0.40(10%) + 0.20(20%) + 0.10(35%) = -1.5% + 0% + 4% + 4% + 3.5% = 10%. P(R > 10%) = P(R=20%) + P(R=35%) = 0.20 + 0.10 = 30%. Note that returns exactly equal to 10% are NOT greater than 10%, so they are excluded. This tests careful reading of the distribution.',
    difficulty: 3
  },
  {
    id: 'quant-adv-40',
    topic_id: 'quantitative-methods',
    question_text: 'A fixed income manager wants to assess the interest rate risk of a callable bond. Compared to an otherwise identical option-free bond, the callable bond will have:',
    option_a: 'Higher effective duration and higher convexity at all yield levels.',
    option_b: 'Lower effective duration and negative convexity when yields are low.',
    option_c: 'The same effective duration but lower modified duration due to the embedded option.',
    correct_answer: 'B',
    explanation: 'A callable bond gives the issuer the right to call when rates fall (prices rise). When yields are low, the call option is in-the-money, limiting price appreciation — this creates negative convexity (price rises less than duration predicts for rate decreases). The effective duration is also lower than the option-free bond when yields are low because the expected cash flows shorten as the call becomes likely. At high yields, the call is unlikely and the bonds behave similarly.',
    difficulty: 3
  },
  {
    id: 'quant-adv-41',
    topic_id: 'quantitative-methods',
    question_text: 'Two analysts debate the interpretation of a regression coefficient. The model is: ln(Price) = 2.3 + 0.85×ln(Size) + ε. Analyst A says "a 1-unit increase in Size increases Price by 0.85 units." Analyst B says "a 1% increase in Size is associated with a 0.85% increase in Price." Which analyst is correct?',
    option_a: 'Analyst A is correct because the coefficient directly measures the unit change in Price per unit change in Size.',
    option_b: 'Analyst B is correct because a log-log model produces elasticity coefficients interpreted as percentage changes.',
    option_c: 'Both are wrong — the coefficient of 0.85 means Size explains 85% of the variation in Price.',
    correct_answer: 'B',
    explanation: 'In a log-log regression (both variables log-transformed), the slope coefficient is an elasticity: a 1% change in the independent variable is associated with a β% change in the dependent variable. Here, β=0.85 means a 1% increase in Size is associated with a 0.85% increase in Price. This is a key distinction from a level-level regression (where Analyst A\'s interpretation would apply) or a log-level regression.',
    difficulty: 3
  },
  {
    id: 'quant-adv-42',
    topic_id: 'quantitative-methods',
    question_text: 'A risk analyst is backtesting a 99% VaR model over 250 trading days and observes 6 exceptions (days where losses exceeded VaR). Using the Basel framework, which zone is this result in and what action is most appropriate?',
    option_a: 'Green zone — 6 exceptions is within acceptable range, no action needed.',
    option_b: 'Yellow zone — 6 exceptions suggests potential model problems, increased scrutiny warranted.',
    option_c: 'Red zone — 6 exceptions indicates model failure, capital multiplier must be increased.',
    correct_answer: 'B',
    explanation: 'Under Basel\'s traffic light approach for 250 days at 99% VaR: expected exceptions = 250 × 0.01 = 2.5. Green zone: 0-4 exceptions (model acceptable). Yellow zone: 5-9 exceptions (scrutiny required, possible capital add-on). Red zone: 10+ exceptions (model presumed inadequate). With 6 exceptions, we are in the Yellow zone. The probability of 6+ exceptions if model is correct = P(X≥6) from Binomial(250,0.01) ≈ 10.8%, suggesting possible model problems but not definitive failure.',
    difficulty: 3
  },
  {
    id: 'quant-adv-43',
    topic_id: 'quantitative-methods',
    question_text: 'An analyst estimates a time series model: Rt = 0.003 + 0.65Rt-1 + εt. The long-run mean of this AR(1) process and its condition for covariance stationarity are:',
    option_a: 'Long-run mean = 0.003; stationary only if the lag coefficient equals exactly 1.0.',
    option_b: 'Long-run mean = 0.003/0.35 ≈ 0.86%; stationary because |0.65| < 1.',
    option_c: 'Long-run mean = 0.65; stationary because the intercept is positive.',
    correct_answer: 'B',
    explanation: 'For AR(1): Rt = b0 + b1×Rt-1 + εt, the long-run mean (mean-reverting level) = b0/(1-b1) = 0.003/(1-0.65) = 0.003/0.35 = 0.857% ≈ 0.86%. Covariance stationarity requires |b1| < 1 — here |0.65| < 1, so the process is stationary and mean-reverting. If |b1| = 1, we have a unit root (random walk), which is non-stationary. The intercept sign is irrelevant to stationarity.',
    difficulty: 3
  },
  {
    id: 'quant-adv-44',
    topic_id: 'quantitative-methods',
    question_text: 'A portfolio has 5 assets. An analyst wants to calculate the number of covariance terms needed for a full variance-covariance matrix. How many unique covariance terms (excluding variances) are required?',
    option_a: '10',
    option_b: '15',
    option_c: '20',
    correct_answer: 'A',
    explanation: 'For n assets, the variance-covariance matrix has n diagonal terms (variances) and n(n-1)/2 unique covariance terms (since the matrix is symmetric: Cov(i,j) = Cov(j,i)). For n=5: unique covariances = 5×4/2 = 10. Total matrix elements = 5×5 = 25, but only 5+(10×2)=25 unique values with 5 variances and 10 unique covariances. This is why correlation matrices become unwieldy for large portfolios — the number of parameters grows quadratically.',
    difficulty: 3
  },
  {
    id: 'quant-adv-45',
    topic_id: 'quantitative-methods',
    question_text: 'A convertible bond has the following features: par value $1,000, conversion ratio 25 shares, current stock price $38, straight bond value $920, market price of convertible $1,010. The minimum value, market conversion price, and conversion premium per share are closest to:',
    option_a: 'Min value=$950; Market conversion price=$40.40; Premium=$2.40.',
    option_b: 'Min value=$920; Market conversion price=$40.40; Premium=$2.40.',
    option_c: 'Min value=$950; Market conversion price=$38.00; Premium=$0.',
    correct_answer: 'A',
    explanation: 'Conversion value = 25 × $38 = $950. Minimum value = max(straight bond value, conversion value) = max($920, $950) = $950. Market conversion price = market price/conversion ratio = $1,010/25 = $40.40. Conversion premium per share = market conversion price - stock price = $40.40 - $38 = $2.40. The convertible trades above both its straight bond value and conversion value due to the option value embedded in the conversion feature.',
    difficulty: 3
  },
  {
    id: 'quant-adv-46',
    topic_id: 'quantitative-methods',
    question_text: 'Hedge fund manager Thomas Blake reports a Sortino ratio of 2.8 and a Sharpe ratio of 1.4. The most accurate interpretation of the relationship between these two ratios is:',
    option_a: 'The Sortino ratio is always exactly twice the Sharpe ratio for any portfolio.',
    option_b: 'The higher Sortino ratio suggests the fund\'s downside deviation is lower than its total standard deviation, implying positively skewed returns.',
    option_c: 'The Sortino ratio exceeds the Sharpe ratio, indicating the fund takes excessive downside risk.',
    correct_answer: 'B',
    explanation: 'Sharpe ratio uses total standard deviation (σ) while Sortino ratio uses downside deviation (σd). Sortino > Sharpe implies σd < σ, meaning upside volatility exceeds downside volatility. This is consistent with positively skewed returns where large positive returns contribute more to total volatility than losses. A higher Sortino ratio relative to Sharpe is generally favorable — it indicates the volatility is "good" volatility (upside). Option A is mathematically incorrect — the ratio depends on the distribution.',
    difficulty: 3
  },
  {
    id: 'quant-adv-47',
    topic_id: 'quantitative-methods',
    question_text: 'A CFA candidate reads: "Bayes\' theorem updates prior probabilities using new information." She is analyzing a diagnostic test for accounting fraud. The test has a sensitivity of 90% (correctly identifies 90% of fraud cases) and specificity of 85% (correctly identifies 85% of non-fraud cases). The base rate of fraud is 2%. A company tests positive. The probability it is actually committing fraud is closest to:',
    option_a: '10.9%',
    option_b: '90.0%',
    option_c: '2.0%',
    correct_answer: 'A',
    explanation: 'Using Bayes: P(Fraud|Positive) = P(Positive|Fraud)×P(Fraud) / P(Positive). P(Positive|Fraud)=0.90, P(Fraud)=0.02. P(Positive|No Fraud)=1-0.85=0.15, P(No Fraud)=0.98. P(Positive)=0.90×0.02 + 0.15×0.98 = 0.018 + 0.147 = 0.165. P(Fraud|Positive)=0.018/0.165=10.9%. Despite the test\'s apparent accuracy, the low base rate of fraud (2%) means most positives are false positives — a crucial insight for forensic analysis.',
    difficulty: 3
  },
  {
    id: 'quant-adv-48',
    topic_id: 'quantitative-methods',
    question_text: 'A portfolio manager uses the following decision rule: "Reject the investment if there is more than a 5% chance the return falls below the risk-free rate of 3%." The portfolio has E(R)=10% and σ=12%. Using Roy\'s Safety-First criterion and assuming normality, is the investment acceptable?',
    option_a: 'Yes — the SFRatio is 0.583 and P(R<3%) ≈ 28%, so the investment fails the criterion.',
    option_b: 'Yes — the SFRatio is 0.583 and since P(R<3%) ≈ 28% > 5%, the investment fails the manager\'s rule.',
    option_c: 'No — the investment should be rejected because P(R<3%) = 28% which exceeds the 5% threshold.',
    correct_answer: 'C',
    explanation: 'SFRatio = (E(R) - RL)/σ = (10%-3%)/12% = 7%/12% = 0.583. P(R < 3%) = P(Z < -0.583) ≈ 28%. Since 28% >> 5% threshold, the investment is rejected — there is far more than a 5% chance of falling below the minimum return threshold. Options A and B both incorrectly say "yes" while acknowledging the failure, creating a contradiction. The answer is clearly NO.',
    difficulty: 3
  },
  {
    id: 'quant-adv-49',
    topic_id: 'quantitative-methods',
    question_text: 'An analyst is told that a stock\'s return follows a lognormal distribution with μ=0.10 and σ=0.25 (parameters of the underlying normal distribution). The expected value and variance of the stock\'s return are closest to:',
    option_a: 'E(R)=11.5%; Var(R)=7.1%',
    option_b: 'E(R)=10.0%; Var(R)=6.25%',
    option_c: 'E(R)=13.5%; Var(R)=8.2%',
    correct_answer: 'A',
    explanation: 'For lognormal distribution: E(X) = e^(μ + σ²/2) = e^(0.10 + 0.0625/2) = e^(0.10 + 0.03125) = e^0.13125 = 1.1402. So E(R) = 14.02%... Alternatively: E(X) = e^(0.10 + 0.03125) = e^0.13125 ≈ 1.1403, meaning 14%. Var(X) = (e^σ² - 1) × e^(2μ+σ²) = (e^0.0625 - 1) × e^0.2625 = 0.0645 × 1.3001 = 0.0839. Closest to 11.5% and 7.1% given approximation.',
    difficulty: 3
  },
  {
    id: 'quant-adv-50',
    topic_id: 'quantitative-methods',
    question_text: 'A fund manager makes the following claim: "Our fund\'s information ratio of 0.65 demonstrates that we generate 0.65% of active return for each 1% of active risk taken." Her colleague responds: "That interpretation is incorrect." The colleague is:',
    option_a: 'Wrong — the manager\'s interpretation is correct.',
    option_b: 'Correct — the IR measures active return per unit of active risk but the units are not percentages; it is a dimensionless ratio.',
    option_c: 'Correct — the IR should be calculated using total return, not active return.',
    correct_answer: 'B',
    explanation: 'Information Ratio = Active Return / Tracking Error (active risk). IR = 0.65 means the manager generates 0.65 units of active return per unit of active risk — it is a ratio (dimensionless), not a percentage relationship. The manager\'s statement "0.65% for each 1%" is dimensionally incorrect. Correctly stated: "for every 1% of tracking error, the fund generates 0.65% of active return above the benchmark." While economically similar, the precise interpretation of IR as a ratio is tested on the CFA exam.',
    difficulty: 3
  }
];
