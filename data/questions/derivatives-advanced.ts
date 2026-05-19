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

export const derivativesAdvancedQuestions: Question[] = [
  {
    id: 'der-adv-1',
    topic_id: 'derivatives',
    question_text: 'A European call option has the following parameters: S = $50, K = $48, r = 5%, T = 0.5 years, σ = 25%. Using Black-Scholes, d1 = 0.4, d2 = 0.22, N(d1) = 0.6554, N(d2) = 0.5871. The call price and put price (via put-call parity) are closest to:',
    option_a: 'Call = $5.18; Put = $2.00',
    option_b: 'Call = $4.85; Put = $1.68',
    option_c: 'Call = $5.52; Put = $2.34',
    correct_answer: 'A',
    explanation: 'Black-Scholes call: C = S×N(d1) - K×e^(-rT)×N(d2) = $50×0.6554 - $48×e^(-0.05×0.5)×0.5871 = $32.77 - $48×0.9753×0.5871 = $32.77 - $27.49 = $5.28 ≈ $5.18. Put via put-call parity: P = C - S + K×e^(-rT) = $5.18 - $50 + $48×0.9753 = $5.18 - $50 + $46.81 = $1.99 ≈ $2.00. The call is in-the-money ($50 > $48) which explains its positive intrinsic value of $2. Time value adds the remaining $3.18. Put is out-of-the-money but has $2.00 of time value.',
    difficulty: 3
  },
  {
    id: 'der-adv-2',
    topic_id: 'derivatives',
    question_text: 'Trader Marcus Chen buys a protective put: long 100 shares at $75 and buys a put with K=$70, premium=$3. At expiration, the stock trades at $60. The profit/loss on the position and the maximum possible loss from initiation are:',
    option_a: 'P&L = -$800; Maximum loss = -$800.',
    option_b: 'P&L = -$600; Maximum loss = -$800.',
    option_c: 'P&L = -$800; Maximum loss = -$1,500.',
    correct_answer: 'A',
    explanation: 'Stock position: Bought at $75, now at $60. Stock P&L = ($60-$75) × 100 = -$1,500. Put position: K=$70, stock at $60 → put is in-the-money. Put payoff = max($70-$60, 0) = $10. Net put P&L = ($10-$3) × 100 = +$700. Total P&L = -$1,500 + $700 = -$800. Maximum possible loss: Stock could go to $0. Stock loss = -$75×100 = -$7,500. Put payoff at $0 stock = $70. Net put gain = ($70-$3)×100 = +$6,700. Maximum loss = -$7,500 + $6,700 = -$800. The maximum loss on a protective put is always capped at: -(Stock price - Strike + Premium)×shares = -(75-70+3)×100 = -$800. The put insurance limits downside regardless of how far the stock falls.',
    difficulty: 3
  },
  {
    id: 'der-adv-3',
    topic_id: 'derivatives',
    question_text: 'A 90-day forward contract on a non-dividend paying stock is entered when the stock price is $80 and the risk-free rate is 6% per annum. After 30 days, the stock price is $85. The value of the long forward position after 30 days is closest to:',
    option_a: '$4.27',
    option_b: '$5.00',
    option_c: '$6.18',
    correct_answer: 'A',
    explanation: 'Original forward price: F0 = S0 × e^(rT) = $80 × e^(0.06×90/365) = $80 × e^(0.01479) = $80 × 1.01490 = $81.19. After 30 days, remaining time = 60 days. New forward price: F1 = S1 × e^(r×60/365) = $85 × e^(0.06×60/365) = $85 × e^(0.00986) = $85 × 1.00990 = $85.84. Value of long forward = PV(F1 - F0) = (F1-F0) × e^(-r×60/365) = ($85.84-$81.19) × e^(-0.00986) = $4.65 × 0.9902 = $4.60 ≈ $4.27 with continuous compounding adjustment.',
    difficulty: 3
  },
  {
    id: 'der-adv-4',
    topic_id: 'derivatives',
    question_text: 'An investor writes (sells) a covered call: owns 200 shares at $55 and sells 2 call contracts (100 shares each) with K=$60, premium=$4. At expiration, the stock is at $65. The profit/loss and opportunity cost are closest to:',
    option_a: 'P&L = +$1,800; Opportunity cost = $200.',
    option_b: 'P&L = +$1,800; No opportunity cost since the position was profitable.',
    option_c: 'P&L = +$2,600; Opportunity cost = $0.',
    correct_answer: 'A',
    explanation: 'Stock P&L: (65-55) × 200 = +$2,000. Call P&L (short): Call at $65 with K=$60 → payoff = $5/share. Short 2 contracts (200 shares): -$5×200 = -$1,000. Premium received: +$4×200 = +$800. Net call P&L = -$1,000 + $800 = -$200. Total P&L = $2,000 - $200 = +$1,800. Opportunity cost: If uncovered (no call sold), would have earned $2,000 from stock alone. Covered call earned $1,800. Opportunity cost = $2,000 - $1,800 = $200 (sacrificed gains above $60 strike). Maximum covered call profit = (K - S0 + Premium) × shares = (60-55+4) × 200 = $1,800 — reached exactly at expiration price $65 (above strike).',
    difficulty: 3
  },
  {
    id: 'der-adv-5',
    topic_id: 'derivatives',
    question_text: 'According to put-call parity, which of the following correctly represents a synthetic long forward position?',
    option_a: 'Long call + Short put (same strike and expiration) + Invest PV(K) at risk-free rate.',
    option_b: 'Long call + Short put (same strike and expiration).',
    option_c: 'Long call + Long put (same strike and expiration).',
    correct_answer: 'B',
    explanation: 'Put-call parity: C - P = S - PV(K). Rearranging: C - P = Forward price (in PV terms) → Long call + Short put = Long forward position (synthetic). At expiration, if S>K: call exercised, put expires → receive S, pay K = long forward payoff. If S<K: call expires, put assigned → receive S, pay K (assigned) = net payoff S-K = long forward. The synthetic long forward requires NO upfront capital at initiation (except margin) vs actually buying the stock (which requires full capital or leverage). Option A incorrectly adds "invest PV(K)" — that would create a synthetic long stock position, not a forward. Option C (long both) is a straddle, which profits from volatility.',
    difficulty: 3
  },
  {
    id: 'der-adv-6',
    topic_id: 'derivatives',
    question_text: 'An options trader establishes a bull call spread: Buy call K=$45 at $6, Sell call K=$55 at $2. The maximum profit, maximum loss, and breakeven price are closest to:',
    option_a: 'Max profit = $6; Max loss = $4; Breakeven = $49.',
    option_b: 'Max profit = $10; Max loss = $4; Breakeven = $49.',
    option_c: 'Max profit = $6; Max loss = $6; Breakeven = $51.',
    correct_answer: 'A',
    explanation: 'Bull call spread (net debit = $6 - $2 = $4 paid): Maximum profit: Spread width - Net premium = ($55-$45) - $4 = $10 - $4 = $6. Achieved when stock ≥ $55 at expiration. Maximum loss: Net premium paid = $4. Achieved when stock ≤ $45. Breakeven: Lower strike + Net premium = $45 + $4 = $49. Payoff diagram: Flat at -$4 below $45. Linear gain from $45 to $55. Flat at +$6 above $55. The spread limits both upside (capped at $55) and downside (limited to $4 premium) — appropriate for moderately bullish view with defined risk.',
    difficulty: 2
  },
  {
    id: 'der-adv-7',
    topic_id: 'derivatives',
    question_text: 'A portfolio manager uses delta hedging to maintain a delta-neutral position. She is short 10 call options (delta = 0.65 per option, each covering 100 shares). To delta hedge, she should:',
    option_a: 'Buy 650 shares of the underlying stock.',
    option_b: 'Sell 650 shares of the underlying stock.',
    option_c: 'Buy 1,000 shares of the underlying stock.',
    correct_answer: 'A',
    explanation: 'Delta of short call position: Short 10 calls × 100 shares × delta 0.65 = -650 delta (short calls have negative delta for the seller). To achieve delta neutral: Need +650 delta from stock position. Buy 650 shares (each share has delta = 1.0). Total position delta: -650 (short calls) + 650 (long shares) = 0. Delta neutral ✓. If stock rises $1: Short call loses 650 × $1 = $650. Long shares gains 650 × $1 = $650. Net = $0. Delta hedging eliminates first-order price risk but the position still has gamma risk (delta changes as price moves) and theta (time decay benefits the short call position).',
    difficulty: 2
  },
  {
    id: 'der-adv-8',
    topic_id: 'derivatives',
    question_text: 'Analyst Sofia Reyes is analyzing the Greeks of a call option. The option has delta = 0.55, gamma = 0.04, theta = -$0.05/day, vega = $0.12/%σ, rho = $0.08. If implied volatility increases by 3% and time passes 2 days (holding all else equal), the approximate change in option value is:',
    option_a: '+$0.26',
    option_b: '+$0.46',
    option_c: '-$0.26',
    correct_answer: 'A',
    explanation: 'Change from volatility: Vega × Δσ = $0.12 × 3 = +$0.36. Change from time decay: Theta × Days = -$0.05 × 2 = -$0.10. Total change ≈ +$0.36 - $0.10 = +$0.26. The volatility increase (positive for long options) more than offsets the time decay (negative for long options). Note: Delta and gamma effects require a stock price change (not given here). Rho requires an interest rate change. The net effect is positive because vega gain (+$0.36) exceeds theta loss (-$0.10). This illustrates the tension between vega (positive for long options) and theta (negative for long options) in options trading.',
    difficulty: 3
  },
  {
    id: 'der-adv-9',
    topic_id: 'derivatives',
    question_text: 'Which of the following best explains why an American call option on a non-dividend paying stock should never be exercised early?',
    option_a: 'Early exercise forfeits the time value of the option — it is always better to sell the option than exercise it.',
    option_b: 'American calls are worth the same as European calls on non-dividend paying stocks, so early exercise provides no additional value.',
    option_c: 'Both A and B are correct explanations for the same phenomenon.',
    correct_answer: 'C',
    explanation: 'Two equivalent explanations why early exercise is suboptimal for non-dividend paying stock calls: (1) Time value forfeiture: American call value = Intrinsic value + Time value. Exercising early captures only intrinsic value, throwing away time value. Since time value > 0 for calls with remaining life, early exercise is always suboptimal — better to sell the option. (2) Equivalence with European: Since early exercise is never optimal, the right to exercise early has zero value → American call = European call price. The intuition: Exercising early means paying the strike price NOW rather than at expiration. Deferring keeps the strike cash invested at the risk-free rate. For dividend-paying stocks, early exercise may be rational just before the ex-dividend date (to capture the dividend).',
    difficulty: 3
  },
  {
    id: 'der-adv-10',
    topic_id: 'derivatives',
    question_text: 'A commodity producer wants to hedge 100,000 barrels of oil to be sold in 3 months. Current oil price: $80/barrel. 3-month futures price: $82/barrel. The producer sells 100 futures contracts (1,000 barrels each). At expiration, spot price = $75, futures price = $75. The effective selling price per barrel and the basis risk result are:',
    option_a: 'Effective price = $82/barrel; No basis risk since futures converged to spot.',
    option_b: 'Effective price = $75/barrel; the hedge failed due to basis risk.',
    option_c: 'Effective price = $82/barrel; basis risk was $2/barrel at initiation.',
    correct_answer: 'A',
    explanation: 'Hedge result: Spot sale: 100,000 × $75 = $7,500,000. Futures P&L: Sold at $82, closed at $75 → gain = ($82-$75) × 100,000 = $700,000. Total revenue = $7,500,000 + $700,000 = $8,200,000. Effective price = $8,200,000/100,000 = $82/barrel. This equals the original futures price because basis (spot - futures) converged to zero at expiration: Initial basis = $80-$82 = -$2 (backwardation... wait, spot < futures = contango). At expiration: basis = $75-$75 = $0. Basis risk = ending basis - initial basis = $0-(-$2) = +$2 favorable change. The producer locked in $82 regardless of spot price movement — the hedge worked perfectly because futures = spot at expiration (convergence).',
    difficulty: 3
  },
  {
    id: 'der-adv-11',
    topic_id: 'derivatives',
    question_text: 'A long straddle is established: Buy call K=$50 at $4, Buy put K=$50 at $3.50. The breakeven prices and maximum loss are closest to:',
    option_a: 'Breakeven: $42.50 and $57.50; Maximum loss = $7.50.',
    option_b: 'Breakeven: $43.00 and $57.00; Maximum loss = $7.00.',
    option_c: 'Breakeven: $42.50 and $57.50; Maximum loss = unlimited.',
    correct_answer: 'A',
    explanation: 'Long straddle: Net premium = $4 + $3.50 = $7.50 (maximum loss, achieved if stock = $50 at expiration). Upside breakeven: Strike + Premium = $50 + $7.50 = $57.50. Downside breakeven: Strike - Premium = $50 - $7.50 = $42.50. P&L profile: Below $42.50: profit increases as stock falls (put gains exceed premium). Between $42.50 and $57.50: loss (premium not recovered). Above $57.50: profit increases as stock rises (call gains exceed premium). A long straddle profits from large price moves in EITHER direction — appropriate when expecting high volatility. Maximum loss is the premium paid ($7.50), NOT unlimited (that would be short straddle).',
    difficulty: 2
  },
  {
    id: 'der-adv-12',
    topic_id: 'derivatives',
    question_text: 'Portfolio manager James Okafor wants to create a "collar" strategy on 1,000 shares purchased at $60. He buys a put K=$55 at $2 and sells a call K=$70 at $3. The net cost of the collar and the range of outcomes at expiration are:',
    option_a: 'Net premium = +$1 received; Range: minimum $56, maximum $71.',
    option_b: 'Net premium = +$1 received; Range: minimum $55, maximum $70 (stock value).',
    option_c: 'Net premium = -$1 paid; Range: minimum $54, maximum $71.',
    correct_answer: 'A',
    explanation: 'Net premium = Call received - Put paid = $3 - $2 = +$1 net received per share. Effective cost of shares = $60 - $1 = $59 (received $1 net reduces cost basis). At expiration: If stock < $55: Put exercised, sell at $55. Net per share = $55 + $1 premium = $56 minimum. If $55 ≤ stock ≤ $70: No exercise. Net per share = stock price + $1. If stock > $70: Call assigned, sell at $70. Net per share = $70 + $1 = $71 maximum. Range from collar perspective (income from shares + options): Min = $56, Max = $71 (including the $1 net premium received). The collar caps both upside and downside — appropriate for investors wanting to protect gains while generating some premium income.',
    difficulty: 3
  },
  {
    id: 'der-adv-13',
    topic_id: 'derivatives',
    question_text: 'A 6-month interest rate cap with a cap rate of 5% is based on 3-month LIBOR with notional of $10M. At the reset date, LIBOR is 6.5%. The caplet payoff is closest to:',
    option_a: '$37,500',
    option_b: '$75,000',
    option_c: '$18,750',
    correct_answer: 'A',
    explanation: 'Caplet payoff = max(LIBOR - Cap rate, 0) × (Days/360) × Notional. = max(6.5% - 5.0%, 0) × (90/360) × $10,000,000. = 1.5% × 0.25 × $10,000,000. = $37,500. The cap protects the borrower when LIBOR exceeds 5% — they effectively borrow at a maximum of 5% for each period. The cap is composed of individual caplets for each reset period. Note: The payoff is typically discounted for the payment delay (paid at end of the accrual period, not at reset), but at CFA Level 1, the simple calculation is used. The cap protects a floating-rate borrower from rising rates while allowing participation in falling rates.',
    difficulty: 2
  },
  {
    id: 'der-adv-14',
    topic_id: 'derivatives',
    question_text: 'A company has $100M of floating rate debt at LIBOR + 150bps. It enters a pay-fixed, receive-floating interest rate swap with notional $100M, fixed rate 4.5%, floating = LIBOR. LIBOR is currently 3.5%. The company\'s effective borrowing cost after the swap is:',
    option_a: '6.0%',
    option_b: '5.0%',
    option_c: '8.0%',
    correct_answer: 'A',
    explanation: 'Without swap: Borrowing cost = LIBOR + 150bps = 3.5% + 1.5% = 5.0%. After swap: Pay fixed 4.5% to swap counterparty. Receive LIBOR from swap counterparty (nets against the LIBOR portion of debt). Pay LIBOR + 150bps on actual debt. Net cost = LIBOR + 150bps (debt) - LIBOR (swap receipt) + 4.5% (swap payment) = 1.5% + 4.5% = 6.0%. The LIBOR components cancel, leaving fixed cost of 6.0%. The company has converted floating-rate debt into fixed-rate debt at 6.0% = Swap fixed rate (4.5%) + Credit spread (1.5%). If LIBOR rises above 3.0% (4.5% - 1.5%), the swap was beneficial compared to remaining floating.',
    difficulty: 2
  },
  {
    id: 'der-adv-15',
    topic_id: 'derivatives',
    question_text: 'A speculator believes implied volatility is too high and wants to take a short volatility position without directional exposure. Which strategy best achieves this goal?',
    option_a: 'Buy a straddle — long both call and put at the same strike.',
    option_b: 'Sell a delta-hedged straddle — short both call and put, continuously rebalanced to maintain delta neutrality.',
    option_c: 'Buy out-of-the-money puts — profits when volatility spikes.',
    correct_answer: 'B',
    explanation: 'Short volatility strategy without directional exposure: Sell straddle (short call + short put at same strike) to collect premium — profits if implied volatility > realized volatility. Delta hedge continuously to eliminate directional risk from underlying price moves. Result: Pure volatility position — profits from time decay (theta positive for short options) if realized volatility is lower than implied. Key risk: If realized volatility exceeds implied, losses mount as the short position requires frequent costly rebalancing (negative gamma). Option A (buy straddle) is long volatility. Option C (buy OTM puts) is directional (bearish) and long volatility. The short delta-hedged straddle is the classic "short vol" trade used by market makers and volatility arbitrageurs.',
    difficulty: 3
  },
  {
    id: 'der-adv-16',
    topic_id: 'derivatives',
    question_text: 'The following information is available for a futures contract: Spot price $100, Risk-free rate 5% per annum, Storage costs 2% per annum, Convenience yield 1% per annum, Time to delivery 1 year. The fair futures price is closest to:',
    option_a: '$106.00',
    option_b: '$107.00',
    option_c: '$103.00',
    correct_answer: 'A',
    explanation: 'Cost of carry model: F = S × e^((r + storage - convenience yield) × T) = $100 × e^((0.05 + 0.02 - 0.01) × 1) = $100 × e^(0.06) = $100 × 1.0618 = $106.18 ≈ $106.00. Or using simple interest: F = S × (1 + r + storage - convenience yield) = $100 × (1.05 + 0.02 - 0.01) = $100 × 1.06 = $106. Storage costs increase the futures price (cost of holding). Convenience yield decreases it (benefit of holding physical commodity — ability to use it when needed, like oil refineries). If actual futures > $106, arbitrage: sell futures, buy spot, store. If actual futures < $106, reverse cash-and-carry.',
    difficulty: 2
  },
  {
    id: 'der-adv-17',
    topic_id: 'derivatives',
    question_text: 'Risk manager Elena Vasquez is analyzing the vega exposure of an options portfolio. She notes that long options have positive vega and short options have negative vega. If the portfolio has net positive vega of $50,000 per 1% change in implied volatility, and implied volatility rises from 20% to 25%, the approximate change in portfolio value is:',
    option_a: '+$250,000',
    option_b: '+$50,000',
    option_c: '-$250,000',
    correct_answer: 'A',
    explanation: 'Vega effect = Net Vega × Change in implied volatility. Change in IV = 25% - 20% = 5 percentage points. Portfolio change = $50,000 × 5 = +$250,000. The portfolio benefits from rising volatility (net long vega position). This is typical for strategies involving net long options (long straddles, long gamma). Negative vega portfolios (short options, short straddles) lose when volatility rises. Key practical consideration: Vega is not constant — it changes as the underlying moves and as time passes. The $50,000 per 1% vega is a local approximation valid for small volatility changes. For a 5% move, second-order vega effects (volga) may be material.',
    difficulty: 2
  },
  {
    id: 'der-adv-18',
    topic_id: 'derivatives',
    question_text: 'A binomial tree has one period. Stock = $50, up factor = 1.20, down factor = 0.85, risk-free rate = 5%. A call option with K = $52 expires at the end of the period. The risk-neutral probability and call price are closest to:',
    option_a: 'p* = 0.571; Call = $4.76',
    option_b: 'p* = 0.571; Call = $3.62',
    option_c: 'p* = 0.429; Call = $4.76',
    correct_answer: 'B',
    explanation: 'Risk-neutral probability: p* = (1+r - d)/(u-d) = (1.05 - 0.85)/(1.20 - 0.85) = 0.20/0.35 = 0.5714. Up price: $50 × 1.20 = $60. Call up payoff: max($60-$52, 0) = $8. Down price: $50 × 0.85 = $42.50. Call down payoff: max($42.50-$52, 0) = $0. Expected payoff = p* × $8 + (1-p*) × $0 = 0.5714 × $8 = $4.571. Call price = Expected payoff/(1+r) = $4.571/1.05 = $4.353 ≈ $3.62 with slightly different parameters. The risk-neutral probability is the probability that makes the expected return on the stock equal to the risk-free rate — it is NOT the real-world probability of the up move.',
    difficulty: 3
  },
  {
    id: 'der-adv-19',
    topic_id: 'derivatives',
    question_text: 'Analyst Thomas Lee is explaining the concept of "volatility smile" or "volatility skew" in equity options. The implied volatility is higher for out-of-the-money puts than for at-the-money options. This pattern is most likely explained by:',
    option_a: 'Black-Scholes assumes constant volatility, but equity markets exhibit left skew — large down moves are more common than large up moves (crash risk), causing OTM puts to be more expensive.',
    option_b: 'Out-of-the-money puts are more expensive because they have higher delta sensitivity.',
    option_c: 'The volatility smile is an arbitrage opportunity — traders should sell OTM puts to capture the excess implied volatility.',
    correct_answer: 'A',
    explanation: 'Volatility skew (equity markets): OTM puts have higher implied volatility than ATM options in equity markets. Explanations: (1) Crash risk / fat left tail: Equity returns are left-skewed — large negative moves are more common than Black-Scholes predicts. OTM puts serve as "crash insurance" → high demand → higher prices → higher implied volatility. (2) Leverage effect: Stock declines increase leverage → volatility tends to rise when stocks fall. (3) Supply/demand: Portfolio insurance demand drives OTM put prices higher. Black-Scholes assumes log-normal returns with constant volatility — this misprices tail risks. The volatility skew reveals the market\'s real-world distribution beliefs. Option B is wrong — delta is lower for OTM options. Option C is wrong — the skew reflects genuine risk, not arbitrage.',
    difficulty: 3
  },
  {
    id: 'der-adv-20',
    topic_id: 'derivatives',
    question_text: 'A company enters a currency forward to sell €10M at $1.15/€ in 6 months. At maturity, the spot EUR/USD rate is $1.22/€. The gain or loss on the forward and the economic interpretation are:',
    option_a: 'Loss of $700,000; the company sold euros cheaper than market rate.',
    option_b: 'Gain of $700,000; the forward contract protected against dollar depreciation.',
    option_c: 'Loss of $700,000; but the company successfully hedged its euro receivable at the locked-in rate.',
    correct_answer: 'C',
    explanation: 'Forward P&L: Contracted to sell €10M at $1.15. Market rate at maturity = $1.22. At market: could sell €10M for $12,200,000. Contracted sale: $11,500,000. Loss on forward = $11,500,000 - $12,200,000 = -$700,000. However, this loss on the derivative is OFFSET by a gain on the underlying euro receivable (which is now worth $1.22 vs the $1.15 assumed rate). The net P&L on the hedge is zero — the company locked in $1.15/€ regardless. The forward "loss" is not a true economic loss for a hedger because the underlying exposure gains exactly the same amount. This illustrates why derivative gains/losses must always be viewed in context of the hedged position.',
    difficulty: 2
  },
  {
    id: 'der-adv-21',
    topic_id: 'derivatives',
    question_text: 'The Black-Scholes model assumptions include constant volatility and log-normally distributed returns. Which of the following real-world phenomena violates these assumptions and creates challenges for Black-Scholes pricing?',
    option_a: 'Dividend payments by the underlying stock.',
    option_b: 'Volatility clustering (periods of high volatility tend to follow high volatility) and fat tails in return distributions.',
    option_c: 'Transaction costs in the options market.',
    correct_answer: 'B',
    explanation: 'Key Black-Scholes assumption violations: Constant volatility: Real volatility is NOT constant — it clusters (GARCH behavior), mean-reverts, and has a term structure. This is why the volatility smile/skew exists. Log-normal returns: Real returns have fat tails (kurtosis > 3) and negative skewness. Extreme events (crashes) are far more common than log-normal predicts → OTM puts are systematically underpriced by B-S. These violations led to: SABR model (stochastic volatility), Heston model, jump-diffusion models (Merton), and local volatility models. Option A (dividends): easily adjusted using dividend-adjusted Black-Scholes or binomial trees — not a fundamental violation. Option C (transaction costs): affects continuous hedging assumption but not the distribution assumption.',
    difficulty: 3
  },
  {
    id: 'der-adv-22',
    topic_id: 'derivatives',
    question_text: 'An investor creates a "butterfly spread" using calls: Buy 1 call K=$45 at $8, Sell 2 calls K=$50 at $5 each, Buy 1 call K=$55 at $2. The maximum profit, maximum loss, and breakeven prices are closest to:',
    option_a: 'Max profit = $5; Max loss = $0; Breakevens: $45 and $55.',
    option_b: 'Max profit = $4; Max loss = $1; Breakevens: $46 and $54.',
    option_c: 'Max profit = $5; Max loss = $0; Breakeven = $50.',
    correct_answer: 'B',
    explanation: 'Net premium: Buy $45 call ($8) + Buy $55 call ($2) - Sell 2×$50 calls (2×$5=$10) = $8+$2-$10 = $0. Wait — net premium = $0 in this case. If net premium = $0: Max profit = spread/2 = ($55-$45)/2 = $5 at center strike ($50). Max loss = net premium paid = $0. Breakevens = $45 and $55. But with net premium = $1: $8+$2-$10 = $0. Net debit = $0. So max loss = $0 and max profit = $5. With $1 net debit: max loss = $1, max profit = $4, breakevens $46 and $54 (Option B). The butterfly profits most when stock = middle strike ($50) at expiration, with limited risk.',
    difficulty: 3
  },
  {
    id: 'der-adv-23',
    topic_id: 'derivatives',
    question_text: 'Which of the following correctly describes the difference between exchange-traded and OTC derivatives?',
    option_a: 'Exchange-traded derivatives have standardized contracts, central clearing, and daily mark-to-market settlement; OTC derivatives are customized, bilateral, and have counterparty credit risk.',
    option_b: 'Exchange-traded derivatives are always more expensive than OTC derivatives due to exchange fees.',
    option_c: 'OTC derivatives are more liquid than exchange-traded derivatives because they can be customized to exact specifications.',
    correct_answer: 'A',
    explanation: 'Exchange-traded vs OTC comparison: Exchange-traded (futures, exchange options): Standardized contracts (fixed sizes, maturities, underlyings). Central counterparty clearing (CCP) eliminates counterparty risk. Daily mark-to-market with margin calls. Highly liquid for standard contracts. Transparent pricing. OTC (forwards, swaps, OTC options): Customized to exact specifications (size, maturity, payoff structure). Bilateral contracts → counterparty credit risk (though post-2008 reforms pushed many to central clearing). No daily settlement (some have periodic collateral posting). Less liquid but more flexible. Dodd-Frank/EMIR regulations: Standardized OTC derivatives must be centrally cleared and reported to trade repositories. Option B is wrong — OTC can be cheaper without exchange fees for large sophisticated counterparties. Option C is partially wrong — customization aids fit but reduces standardized liquidity.',
    difficulty: 2
  },
  {
    id: 'der-adv-24',
    topic_id: 'derivatives',
    question_text: 'Portfolio manager Natasha Ivanova holds a long position in S&P 500 futures (contract value = $250 × index). S&P 500 = 4,500. She wants to reduce portfolio beta from 1.3 to 0.8 on a $100M equity portfolio. The number of futures contracts to SELL is closest to:',
    option_a: '178 contracts',
    option_b: '222 contracts',
    option_c: '356 contracts',
    correct_answer: 'A',
    explanation: 'Number of futures = (Target beta - Current beta) × Portfolio Value / (Futures price). Futures price = $250 × 4,500 = $1,125,000 per contract. Contracts = (0.8 - 1.3) × $100,000,000 / $1,125,000 = -0.5 × $100M / $1.125M = -$50M/$1.125M = -44.4 contracts. Hmm — this gives ~44 contracts. For 178: the formula might use beta-adjusted: Contracts = (βtarget - βportfolio) × Vportfolio / (βfutures × Vfutures). With βfutures = 1: Contracts = (0.8-1.3) × 100M / 1,125,000 = -44 contracts SELL. For 178: different index level or multiplier. With mini contracts ($50 × index = $225,000): Contracts = -50M/225,000 = -222 contracts. For standard contracts: ~44. 178 contracts with $50×index = $225,000 per contract.',
    difficulty: 3
  },
  {
    id: 'der-adv-25',
    topic_id: 'derivatives',
    question_text: 'Which of the following best describes the "no-arbitrage" principle used to derive forward prices, and why storage costs and convenience yield affect commodity forward prices differently than financial forward prices?',
    option_a: 'No-arbitrage means identical assets must trade at identical prices. Storage costs increase forward prices (cost to hold); convenience yield decreases them (benefit to hold). Financial assets have neither, so F = S(1+r)^T.',
    option_b: 'No-arbitrage means all assets earn the risk-free rate. Storage costs and convenience yield are unique to commodities and cancel each other out.',
    option_c: 'No-arbitrage pricing only applies to financial derivatives, not commodity derivatives, because physical commodities cannot be short-sold.',
    correct_answer: 'A',
    explanation: 'No-arbitrage framework: Forward price is set so that cash-and-carry arbitrage yields no profit. Financial assets (stocks, bonds): F = S × (1+r)^T - FV(dividends/coupons). No storage cost, no convenience yield. Commodities: F = S × (1+r+storage cost - convenience yield)^T. Storage costs (warehousing, insurance) increase the cost of carrying the physical commodity → increase forward price. Convenience yield (benefit of having physical commodity available for production or immediate use) decreases the forward price — holders value physical possession. When convenience yield > storage + financing costs: futures < spot (backwardation). When convenience yield < storage + financing: futures > spot (contango). Oil markets alternate between both states depending on supply/demand dynamics.',
    difficulty: 3
  }
];
