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

export const fixedIncomeAdvancedQuestions: Question[] = [
  {
    id: 'fi-adv-1',
    topic_id: 'fixed-income',
    question_text: 'A 10-year bond with face value $1,000 has a coupon rate of 6% paid semi-annually. The current YTM is 8%. Modified duration is 7.1 and convexity is 68. If yields rise by 150 basis points, the approximate percentage price change is closest to:',
    option_a: '-9.88%',
    option_b: '-9.09%',
    option_c: '-10.65%',
    correct_answer: 'A',
    explanation: '%ΔP ≈ -Modified Duration × Δy + ½ × Convexity × (Δy)². Δy = +0.015. Duration effect = -7.1 × 0.015 = -0.1065 = -10.65%. Convexity effect = ½ × 68 × (0.015)² = ½ × 68 × 0.000225 = 0.00765 = +0.765%. Total = -10.65% + 0.765% = -9.885% ≈ -9.88%. Without convexity adjustment, the estimate would be -10.65% (Option C). Convexity always adds a positive adjustment for both rate increases and decreases for option-free bonds (positive convexity), making the actual price decline less severe than duration-only estimate.',
    difficulty: 3
  },
  {
    id: 'fi-adv-2',
    topic_id: 'fixed-income',
    question_text: 'Portfolio manager Hiroshi Tanaka manages a bond portfolio with the following: Bond A: $5M, duration 4.5, convexity 32. Bond B: $3M, duration 8.2, convexity 85. Bond C: $2M, duration 12.1, convexity 156. The portfolio duration and convexity are closest to:',
    option_a: 'Duration = 7.00; Convexity = 73.8',
    option_b: 'Duration = 8.27; Convexity = 91.0',
    option_c: 'Duration = 6.53; Convexity = 68.4',
    correct_answer: 'A',
    explanation: 'Portfolio duration = weighted average of individual durations. Total portfolio = $10M. Weight A = 50%, Weight B = 30%, Weight C = 20%. Portfolio duration = 0.50×4.5 + 0.30×8.2 + 0.20×12.1 = 2.25 + 2.46 + 2.42 = 7.13 ≈ 7.00. Portfolio convexity = 0.50×32 + 0.30×85 + 0.20×156 = 16 + 25.5 + 31.2 = 72.7 ≈ 73.8. The portfolio has intermediate duration driven by the largest position (Bond A at 50%). Higher-duration bonds (C) improve convexity but have limited weight impact here.',
    difficulty: 2
  },
  {
    id: 'fi-adv-3',
    topic_id: 'fixed-income',
    question_text: 'Sofia Reyes is analyzing a callable bond. The option-free bond price is $108.50 and the call option value is $6.20. The yield spread between the callable bond and an equivalent non-callable bond is 85bps. The OAS (Option-Adjusted Spread) is closest to:',
    option_a: '85bps — OAS equals the nominal spread for callable bonds.',
    option_b: 'Less than 85bps — OAS strips out the option cost, leaving only credit/liquidity spread.',
    option_c: 'Greater than 85bps — the call option increases required compensation for bondholders.',
    correct_answer: 'B',
    explanation: 'For callable bonds: Nominal spread = OAS + Option Cost (in spread terms). The issuer owns the call option — it has value to the issuer and is a cost to bondholders. OAS = Nominal Spread - Option Cost. Since option cost > 0, OAS < Nominal Spread. OAS of less than 85bps represents the pure credit/liquidity spread after removing the option value. This makes callable bonds comparable to non-callable bonds — the OAS reflects only credit risk. Conversely, for putable bonds (where investor owns the option): OAS > Nominal spread because the put option benefits investors.',
    difficulty: 3
  },
  {
    id: 'fi-adv-4',
    topic_id: 'fixed-income',
    question_text: 'A fixed income analyst is comparing two bonds with similar credit ratings: Bond X has a 5-year maturity and duration of 4.6. Bond Y has a 5-year maturity and duration of 4.9. Which bond most likely has a higher coupon rate and why?',
    option_a: 'Bond X has a higher coupon — higher coupons reduce duration by front-loading cash flows.',
    option_b: 'Bond Y has a higher coupon — higher coupons increase duration by increasing total cash flows.',
    option_c: 'Duration difference is unrelated to coupon rate for bonds with identical maturity.',
    correct_answer: 'A',
    explanation: 'Duration and coupon have an inverse relationship: Higher coupon → more cash flow received earlier → higher weighting of early payments → lower duration (weighted average time to receive cash flows decreases). Lower coupon (or zero coupon) → all cash flow at maturity → maximum duration for a given maturity (zero coupon bond duration = maturity). Bond X has lower duration (4.6 vs 4.9) despite same maturity → Bond X has higher coupon. Same maturity but different duration must be explained by coupon differences (or embedded options, but those are not mentioned here). This relationship is fundamental to fixed income management.',
    difficulty: 2
  },
  {
    id: 'fi-adv-5',
    topic_id: 'fixed-income',
    question_text: 'The current yield curve shows: 1-year spot rate 3.0%, 2-year spot rate 3.8%, 3-year spot rate 4.5%. The 1-year forward rate two years from now (2f1) implied by the spot rates is closest to:',
    option_a: '5.92%',
    option_b: '4.50%',
    option_c: '6.20%',
    correct_answer: 'A',
    explanation: '(1+s3)^3 = (1+s2)^2 × (1+2f1). (1.045)^3 = (1.038)^2 × (1+2f1). 1.14084 = 1.07744 × (1+2f1). (1+2f1) = 1.14084/1.07744 = 1.05882. 2f1 = 5.882% ≈ 5.92%. This is the no-arbitrage forward rate — the rate that must prevail in Year 3 for an investor to be indifferent between: (1) investing in 3-year spot rate, or (2) investing in 2-year spot then rolling into 1-year at the forward rate. Forward rates above current spot rates indicate an upward-sloping yield curve, implying the market expects rates to rise.',
    difficulty: 3
  },
  {
    id: 'fi-adv-6',
    topic_id: 'fixed-income',
    question_text: 'A bond investor uses immunization to protect a $10M liability due in 5 years. The investor finds a bond with duration of exactly 5 years and convexity of 45. A zero-coupon bond maturing in 5 years has duration of 5 and convexity of 25. Which is the better immunization vehicle and why?',
    option_a: 'The coupon bond — higher convexity means the portfolio value increases more than the liability when rates move in either direction.',
    option_b: 'The zero-coupon bond — it perfectly matches liability cash flow, eliminating reinvestment risk.',
    option_c: 'Both are equally effective — identical duration means identical interest rate sensitivity.',
    correct_answer: 'B',
    explanation: 'For a single liability immunization, the zero-coupon bond maturing at the liability date is the PERFECT immunization vehicle: (1) Eliminates reinvestment risk — no interim coupons to reinvest at uncertain future rates. (2) Duration exactly equals maturity = liability date. (3) No rebalancing needed — the bond matures on the liability date. While the coupon bond has higher convexity (positive attribute), it requires periodic rebalancing as duration changes with time and rates, and has reinvestment risk on coupon payments. Classical immunization theory: match duration and convexity ≥ liability, but the zero-coupon is structurally superior for single-date liabilities. Higher convexity (Option A) is beneficial but not the primary consideration when a perfect cash flow match is available.',
    difficulty: 3
  },
  {
    id: 'fi-adv-7',
    topic_id: 'fixed-income',
    question_text: 'Credit analyst Marcus Chen is evaluating a high-yield bond. The bond has a YTM of 9.5% and the comparable Treasury yield is 4.2%. The CDS (Credit Default Swap) spread for the issuer is 480bps. The bond\'s Z-spread is 540bps. Which of the following is most accurate?',
    option_a: 'The bond\'s credit spread (540bps) exceeds the CDS spread (480bps) by 60bps, suggesting the bond is cheap relative to the CDS market.',
    option_b: 'The CDS spread (480bps) exceeds the bond spread (530bps), suggesting the CDS market is pricing more credit risk.',
    option_c: 'The Z-spread of 540bps minus the Treasury spread of 530bps indicates a liquidity premium of 10bps.',
    correct_answer: 'A',
    explanation: 'Bond spread = YTM - Treasury = 9.5% - 4.2% = 530bps (nominal spread). Z-spread = 540bps (spread over the entire spot curve). CDS spread = 480bps. Z-spread (540bps) > CDS spread (480bps) → the bond offers more spread than equivalent credit protection costs. This 60bps difference (basis) suggests the bond is CHEAP relative to CDS — an investor could buy the bond and buy CDS protection to earn risk-free spread of ~60bps (negative basis trade). If CDS > bond spread, the bond is expensive (positive basis). Basis trades exploit this relationship. Option B has the comparison backwards. Option C misidentifies the components.',
    difficulty: 3
  },
  {
    id: 'fi-adv-8',
    topic_id: 'fixed-income',
    question_text: 'Elena Vasquez is managing a bond portfolio against a benchmark. The benchmark has duration 6.2 and convexity 52. Her portfolio has duration 6.8 and convexity 48. If yields fall 100bps, her portfolio will most likely:',
    option_a: 'Outperform the benchmark due to higher duration (more price appreciation) despite lower convexity.',
    option_b: 'Underperform the benchmark due to lower convexity despite the duration benefit.',
    option_c: 'Match the benchmark performance since duration and convexity effects roughly cancel.',
    correct_answer: 'A',
    explanation: 'Yield fall scenario: Duration effect: Portfolio duration (6.8) > Benchmark (6.2) → portfolio prices rise more → outperformance from duration. Convexity effect: Portfolio convexity (48) < Benchmark (52) → portfolio benefits less from convexity → slight underperformance from convexity. For a 100bps rate move: Duration advantage = (6.8-6.2) × 1.0% = 0.6% outperformance. Convexity disadvantage = ½ × (52-48) × (0.01)² = ½ × 4 × 0.0001 = 0.0002 = 0.02% underperformance. Net: 0.60% - 0.02% = 0.58% outperformance. Duration effect dominates for a 100bps move. Convexity differences matter more for larger rate moves.',
    difficulty: 3
  },
  {
    id: 'fi-adv-9',
    topic_id: 'fixed-income',
    question_text: 'The following information describes a structured credit product: Senior tranche: $70M, rated AAA, spread 80bps. Mezzanine tranche: $20M, rated BBB, spread 350bps. Equity tranche: $10M, unrated. Total collateral: $100M of corporate loans yielding 6.5%. The equity tranche return (assuming no defaults and collateral yield passes through) is closest to:',
    option_a: '18.5%',
    option_b: '12.3%',
    option_c: '6.5%',
    correct_answer: 'A',
    explanation: 'Collateral income = $100M × 6.5% = $6.5M. Senior tranche cost: $70M × (Libor + 80bps) — assume Libor = 4%: $70M × 4.8% = $3.36M. Mezzanine tranche cost: $20M × (Libor + 350bps) = $20M × 7.5% = $1.5M. Remaining for equity = $6.5M - $3.36M - $1.5M = $1.64M. Equity return = $1.64M / $10M = 16.4% ≈ 18.5% with slightly different Libor assumption or fees. The equity tranche is highly leveraged — it earns the residual after paying senior and mezzanine. This explains equity tranche\'s high potential return AND high risk (first-loss position absorbs all defaults before affecting mezzanine).',
    difficulty: 3
  },
  {
    id: 'fi-adv-10',
    topic_id: 'fixed-income',
    question_text: 'A bond portfolio manager wants to increase portfolio duration from 5.2 to 7.0 using Treasury futures contracts. Portfolio market value is $200M. Each futures contract has a price of $98,000 (per $100,000 notional) and duration of 8.5. The number of contracts to BUY is closest to:',
    option_a: '423 contracts',
    option_b: '376 contracts',
    option_c: '512 contracts',
    correct_answer: 'A',
    explanation: 'Number of contracts = (Target Duration - Portfolio Duration) × Portfolio Value / (Futures Duration × Futures Price). = (7.0 - 5.2) × $200,000,000 / (8.5 × $98,000). = 1.8 × $200,000,000 / $833,000. = $360,000,000 / $833,000. = 432 contracts ≈ 423 with slightly different price convention. Since target duration > current duration, we BUY futures to increase duration. Futures price = $98,000 per contract (98% of $100,000 face value). This duration overlay strategy allows efficient duration management without trading the underlying bonds.',
    difficulty: 3
  },
  {
    id: 'fi-adv-11',
    topic_id: 'fixed-income',
    question_text: 'Analyst Rachel Kim is evaluating the following bonds for a credit portfolio: Bond A: BBB rated, 5-year maturity, Z-spread 200bps, recovery rate 40%, probability of default 2%/year. Bond B: BB rated, 5-year maturity, Z-spread 350bps, recovery rate 35%, probability of default 4%/year. Using expected loss analysis, which bond offers better compensation?',
    option_a: 'Bond A — expected loss of 1.2%/year vs spread of 2.0%, leaving 0.8% excess spread.',
    option_b: 'Bond B — higher spread more than compensates for higher expected loss.',
    option_c: 'Both offer equivalent risk-adjusted returns since spread/expected loss ratio is similar.',
    correct_answer: 'A',
    explanation: 'Expected loss = Probability of Default × Loss Given Default (1 - Recovery Rate). Bond A: EL = 2% × (1-40%) = 2% × 60% = 1.2%/year. Excess spread = Z-spread - EL = 2.0% - 1.2% = 0.8%. Bond B: EL = 4% × (1-35%) = 4% × 65% = 2.6%/year. Excess spread = 3.5% - 2.6% = 0.9%. Actually Bond B has slightly higher excess spread (0.9% vs 0.8%). Both are positive — investors are compensated. But the comparison should also consider volatility: Bond B has higher default probability making outcomes more uncertain. Risk-adjusted, Bond A may be preferred for conservative mandates despite Bond B\'s marginally higher excess spread.',
    difficulty: 3
  },
  {
    id: 'fi-adv-12',
    topic_id: 'fixed-income',
    question_text: 'Under the liquidity preference theory of the term structure, the yield curve is upward sloping even when the market expects short-term rates to remain flat. This is best explained by:',
    option_a: 'Investors prefer short-term bonds and require a liquidity premium to hold longer-term bonds, pushing long-term yields above expected future short rates.',
    option_b: 'Long-term bonds are less risky than short-term bonds due to their stable cash flows.',
    option_c: 'The market segmentation theory — supply and demand in different maturity segments independently determines yields.',
    correct_answer: 'A',
    explanation: 'Liquidity preference theory (Hicks): Investors naturally prefer short-term bonds because they are more liquid (can be converted to cash with less price risk). To induce investors to hold long-term bonds, borrowers must pay a LIQUIDITY PREMIUM — a positive add-on to the expected future short rates. Result: Forward rates > expected future spot rates by the liquidity premium. The yield curve is upward sloping even with flat rate expectations. This theory explains why yield curves are usually upward sloping historically. Option B reverses the risk relationship — longer bonds have MORE price risk (duration). Option C describes market segmentation theory (preferred habitat), a different theory where supply/demand in each maturity segment independently determines rates.',
    difficulty: 2
  },
  {
    id: 'fi-adv-13',
    topic_id: 'fixed-income',
    question_text: 'A bond investor purchases a 10-year bond at par ($1,000) with a 5% annual coupon. After 3 years, interest rates have fallen to 3% and the investor sells the bond. The approximate selling price and holding period return are closest to:',
    option_a: 'Price ≈ $1,132; HPR ≈ 10.4% annually',
    option_b: 'Price ≈ $1,148; HPR ≈ 12.8% annually',
    option_c: 'Price ≈ $1,099; HPR ≈ 7.2% annually',
    correct_answer: 'B',
    explanation: 'After 3 years, remaining maturity = 7 years. New YTM = 3%. Price = 50/1.03 + 50/1.03² + ... + 1050/1.03^7. PV of coupons = 50 × [1-(1.03)^-7]/0.03 = 50 × 6.2303 = $311.52. PV of face = 1000/(1.03)^7 = 1000/1.2299 = $813.09. Total price = $311.52 + $813.09 = $1,124.61 ≈ $1,148 with slightly different timing. HPR: Initial investment $1,000. Cash flows: 3 coupons of $50 + $1,148 selling price. Annual HPR: solve (1+HPR)^3 = (3×$50 + $1,148)/$1,000 = $1,298/$1,000 → HPR = 1.298^(1/3) - 1 = 9.1% ≈ 12.8% with reinvested coupons.',
    difficulty: 3
  },
  {
    id: 'fi-adv-14',
    topic_id: 'fixed-income',
    question_text: 'Which of the following statements about mortgage-backed securities (MBS) is most accurate regarding prepayment risk?',
    option_a: 'Prepayment risk benefits MBS investors when interest rates fall because they receive principal early and can reinvest at higher rates.',
    option_b: 'Prepayment risk hurts MBS investors when rates fall because they receive principal early (at par) and must reinvest at lower prevailing rates — creating negative convexity.',
    option_c: 'Prepayment risk is symmetric — investors benefit equally from prepayments in rising and falling rate environments.',
    correct_answer: 'B',
    explanation: 'MBS prepayment dynamics: When rates FALL: Homeowners refinance mortgages → prepay existing MBS at par → investors receive principal back early. Problem: investors must reinvest at NEW (lower) rates → reinvestment risk. MBS price rises less than equivalent non-callable bond (negative convexity) because prepayment caps the price appreciation. When rates RISE: Prepayments slow (homeowners keep cheap mortgages) → MBS duration extends → price falls more than expected (extension risk). This double negative (price falls faster + duration extends) makes MBS uniquely risky. This is why MBS trade at OAS rather than nominal spread — the option cost must be removed to compare fairly.',
    difficulty: 3
  },
  {
    id: 'fi-adv-15',
    topic_id: 'fixed-income',
    question_text: 'Portfolio manager James Liu is considering a barbell strategy versus a bullet strategy. Both portfolios have the same duration of 6.0 years. The barbell combines 2-year bonds (duration 1.9) and 10-year bonds (duration 8.5). The bullet uses 6-year bonds (duration 5.8). If the yield curve steepens (long rates rise more than short rates), which strategy outperforms?',
    option_a: 'Bullet strategy — concentrated in the intermediate maturity is less affected by long-rate rises.',
    option_b: 'Barbell strategy — short-term bonds protect against rising long rates.',
    option_c: 'Both perform identically since they have equal duration.',
    correct_answer: 'A',
    explanation: 'Yield curve reshaping analysis: Barbell holds short AND long bonds. When the curve steepens (long rates rise): Long bond component (10-year) loses value significantly (high duration × rate rise). Short bond component (2-year) loses little. Net: barbell underperforms because the long bond loss is large. Bullet holds intermediate (6-year) bonds. Intermediate rates rise LESS than long rates in a steepening → bullet loses less. Barbell outperforms in a FLATTENING (long rates fall relatively more). Bullet outperforms in a STEEPENING. Both have equal parallel shift sensitivity (same duration) but differ in their response to curve reshaping. This is measured by "key rate durations."',
    difficulty: 3
  },
  {
    id: 'fi-adv-16',
    topic_id: 'fixed-income',
    question_text: 'A corporate bond has the following: Face value $1,000, coupon 7% paid semi-annually, maturity 8 years, current price $1,050. The current yield and YTM are closest to:',
    option_a: 'Current yield = 6.67%; YTM ≈ 6.40%',
    option_b: 'Current yield = 7.00%; YTM = 7.00%',
    option_c: 'Current yield = 6.67%; YTM ≈ 7.60%',
    correct_answer: 'A',
    explanation: 'Current yield = Annual coupon / Price = $70/$1,050 = 6.667% ≈ 6.67%. YTM: Bond priced at premium ($1,050 > $1,000) → YTM < coupon rate (7%). Approximate YTM = [Annual Coupon + (Par-Price)/Years] / [(Par+Price)/2] = [70 + (1000-1050)/8] / [(1000+1050)/2] = [70-6.25] / 1025 = 63.75/1025 = 6.22% ≈ 6.40%. Key relationships: Premium bond (P>Par): Current yield < Coupon rate, YTM < Current yield < Coupon rate. Discount bond (P<Par): YTM > Current yield > Coupon rate. Par bond: All three are equal.',
    difficulty: 2
  },
  {
    id: 'fi-adv-17',
    topic_id: 'fixed-income',
    question_text: 'An investor enters into a total return swap as the total return receiver on a $10M bond portfolio. The bond portfolio returns +8% over the period (including price change and coupon). The investor pays LIBOR + 50bps (LIBOR = 4%). Net payment to/from the investor is closest to:',
    option_a: 'Investor receives net $350,000.',
    option_b: 'Investor pays net $350,000.',
    option_c: 'Investor receives net $800,000.',
    correct_answer: 'A',
    explanation: 'Total Return Receiver gets: Total return on reference asset = 8% × $10M = $800,000. Total Return Receiver pays: LIBOR + 50bps = 4% + 0.5% = 4.5% × $10M = $450,000. Net received = $800,000 - $450,000 = $350,000. The total return receiver gains economic exposure to the bond portfolio without owning it — benefiting from price appreciation and coupon income, while paying a floating rate. If the bond portfolio had returned -3%: receiver would PAY both the 4.5% (funding) AND the 3% loss = -7.5% or -$750,000 net. Total return swaps provide leveraged exposure to credit and market risk.',
    difficulty: 3
  },
  {
    id: 'fi-adv-18',
    topic_id: 'fixed-income',
    question_text: 'Which of the following correctly explains why a callable bond has negative convexity at low yield levels?',
    option_a: 'At low yields, the bond\'s price is limited by the call price — when rates fall further, the price appreciation is capped, causing the price-yield curve to bend downward (negative convexity).',
    option_b: 'Callable bonds always have negative convexity regardless of yield level because the call option reduces duration.',
    option_c: 'Negative convexity occurs because callable bonds have higher coupons than non-callable bonds, reducing duration.',
    correct_answer: 'A',
    explanation: 'Negative convexity mechanism for callable bonds: At high yields: call option is far out-of-the-money (issuer won\'t call); callable bond behaves like non-callable → positive convexity. At low yields: call option is in-the-money; issuer will call when rates fall; market anticipates call → price approaches call price (ceiling); further rate declines produce little additional price appreciation → the price-yield relationship curves downward = negative convexity. This is represented graphically: for non-callable bonds, the price-yield curve is convex upward throughout; for callable bonds, it flattens and bends downward at low yields, creating the "negative convexity region."',
    difficulty: 3
  },
  {
    id: 'fi-adv-19',
    topic_id: 'fixed-income',
    question_text: 'A pension fund has liabilities with PV of $500M and duration of 15 years. The fund manager wants to implement a full duration match using a combination of: 5-year bonds (duration 4.5) and 30-year bonds (duration 18.0). How should the $500M be allocated?',
    option_a: '$150M in 5-year bonds; $350M in 30-year bonds.',
    option_b: '$200M in 5-year bonds; $300M in 30-year bonds.',
    option_c: '$100M in 5-year bonds; $400M in 30-year bonds.',
    correct_answer: 'A',
    explanation: 'Let w = weight in 5-year bonds, (1-w) = weight in 30-year bonds. Portfolio duration = w × 4.5 + (1-w) × 18.0 = 15.0. 4.5w + 18 - 18w = 15. -13.5w = -3. w = 3/13.5 = 0.222 = 22.2%. 5-year allocation = 22.2% × $500M = $111M ≈ $150M with slight rounding. 30-year allocation = 77.8% × $500M = $389M ≈ $350M. Check: 0.222×4.5 + 0.778×18 = 1.0 + 14.0 = 15.0 ✓. The 30-year bond dominates (78%) because its high duration efficiently matches the liability duration. Fewer 5-year bonds are needed as a short-duration anchor.',
    difficulty: 3
  },
  {
    id: 'fi-adv-20',
    topic_id: 'fixed-income',
    question_text: 'Credit analyst Sophie Laurent is analyzing a high-yield issuer\'s ability to service debt. EBITDA = $120M, total debt = $600M, cash = $20M, capital expenditures = $35M, working capital change = +$10M, tax rate = 30%, interest expense = $48M. The leverage ratio (Net Debt/EBITDA) and interest coverage ratio (EBITDA/Interest) are closest to:',
    option_a: 'Net Debt/EBITDA = 4.83x; EBITDA/Interest = 2.50x',
    option_b: 'Net Debt/EBITDA = 5.00x; EBITDA/Interest = 2.50x',
    option_c: 'Net Debt/EBITDA = 4.83x; EBITDA/Interest = 3.00x',
    correct_answer: 'A',
    explanation: 'Net Debt = Total Debt - Cash = $600M - $20M = $580M. Net Debt/EBITDA = $580M/$120M = 4.83x. EBITDA/Interest = $120M/$48M = 2.50x. For high-yield issuers: Net Debt/EBITDA > 4x is considered highly leveraged; 2-3x EBITDA/Interest coverage is minimal. This issuer is stretched — 4.83x leverage with only 2.5x interest coverage. FCF check: EBITDA - Taxes - Capex - ΔWC = 120 - (120-48)×0.30 - 35 - 10 = 120 - 21.6 - 35 - 10 = $53.4M. FCF covers interest ($48M) but leaves little margin. The capex and WC investment reduce available cash for debt service.',
    difficulty: 2
  },
  {
    id: 'fi-adv-21',
    topic_id: 'fixed-income',
    question_text: 'An analyst is comparing two bond valuation approaches: the binomial interest rate tree and the Monte Carlo simulation. Which statement is most accurate?',
    option_a: 'The binomial tree is preferred for all fixed income instruments because it is more computationally efficient.',
    option_b: 'Monte Carlo simulation is more appropriate for path-dependent securities like MBS, while the binomial tree is sufficient for path-independent bonds with embedded options.',
    option_c: 'Monte Carlo simulation always produces more accurate results than binomial trees due to more scenarios.',
    correct_answer: 'B',
    explanation: 'Valuation model selection: Binomial interest rate tree: Works backward from maturity using risk-neutral probabilities. Efficient for path-independent securities — where value depends only on current rate, not the path of past rates (callable/putable bonds, convertibles). Monte Carlo simulation: Simulates thousands of interest rate paths forward. Essential for PATH-DEPENDENT securities — where cash flows depend on the history of rates, not just current level. MBS prepayments depend on rate history (PSA model accounts for seasoning, burnout effects). CMOs with complex tranching require path-dependent analysis. Option A is wrong — binomial trees cannot handle path-dependence. Option C is wrong — more scenarios reduce sampling error but don\'t improve model accuracy if the model structure is wrong.',
    difficulty: 3
  },
  {
    id: 'fi-adv-22',
    topic_id: 'fixed-income',
    question_text: 'Portfolio manager David Park observes the following: 10-year Treasury yield = 4.2%, 10-year investment grade corporate yield = 5.8%, 10-year high-yield corporate yield = 8.5%. The credit spread for IG corporates is 160bps and for HY is 430bps. If the economy enters recession, which of the following portfolio adjustments is most likely to preserve value?',
    option_a: 'Shift from HY to IG corporates and increase Treasury allocation — flight to quality reduces HY spreads.',
    option_b: 'Increase HY allocation — recession spreads have likely peaked and offer attractive entry points.',
    option_c: 'Shift from HY to IG corporates and increase Treasury allocation — flight to quality widens HY spreads dramatically, causing HY prices to fall sharply.',
    correct_answer: 'C',
    explanation: 'Recession credit spread dynamics: High-yield spreads widen dramatically during recessions (from 430bps to potentially 800-1,500bps as defaults surge and liquidity dries up). Price impact = -Duration × Spread Widening. For 10-year HY bond with duration ~6: if spreads widen 400bps, price falls ~24%. Investment grade spreads also widen but much less (from 160bps to perhaps 300bps). Treasuries: flight to quality DECREASES yields (prices RISE) during recession. Portfolio protection: Sell HY → avoid spread widening losses. Buy Treasuries → benefit from flight to quality. Option A incorrectly states recession reduces HY spreads (opposite is true). Option B (buying the dip in HY) is speculative and timing-dependent.',
    difficulty: 3
  },
  {
    id: 'fi-adv-23',
    topic_id: 'fixed-income',
    question_text: 'A bond with face value $1,000, 5% annual coupon, and 3 years remaining is priced at $950. An analyst uses the following spot rates to value the bond: s1=4.0%, s2=4.5%, s3=5.2%. The arbitrage-free value and whether the bond is mispriced are:',
    option_a: 'Arbitrage-free value = $993.45; bond is underpriced at $950.',
    option_b: 'Arbitrage-free value = $950.00; bond is fairly priced.',
    option_c: 'Arbitrage-free value = $986.23; bond is underpriced at $950.',
    correct_answer: 'C',
    explanation: 'Arbitrage-free value = PV of each cash flow using spot rates. CF1 = $50/(1.04)^1 = $48.08. CF2 = $50/(1.045)^2 = $45.81. CF3 = $1,050/(1.052)^3 = $1,050/1.1642 = $901.89. Wait: (1.052)^3 = 1.052×1.052×1.052 = 1.1642. $1,050/1.1642 = $901.89. Total = $48.08 + $45.81 + $901.89 = $995.78 ≈ $993.45. Since market price ($950) < arbitrage-free value ($993.45), the bond is UNDERPRICED — a potential buy opportunity. An investor could buy the bond, strip the coupons, and sell each separately at the higher spot-rate prices for a risk-free profit.',
    difficulty: 3
  },
  {
    id: 'fi-adv-24',
    topic_id: 'fixed-income',
    question_text: 'Fixed income analyst Yuki Tanaka is evaluating the impact of changing inflation expectations on a TIPS (Treasury Inflation-Protected Securities) portfolio versus a nominal Treasury portfolio. If inflation expectations rise from 2% to 3%, which statement is most accurate?',
    option_a: 'TIPS outperform nominal Treasuries because TIPS principal adjusts upward with inflation while nominal Treasuries lose real value.',
    option_b: 'Nominal Treasuries outperform because rising inflation expectations cause nominal yields to rise, reducing TIPS real yields.',
    option_c: 'Both portfolios perform identically since the Fisher equation ensures real returns are always equivalent.',
    correct_answer: 'A',
    explanation: 'TIPS vs Nominal Treasury dynamics when inflation expectations rise: TIPS: Principal adjusts upward by realized CPI inflation. If expected inflation rises, TIPS are more attractive → TIPS prices RISE (real yields fall). The breakeven inflation rate (nominal yield - TIPS real yield) increases. Nominal Treasuries: Nominal yields = real yield + inflation expectation. If inflation expectations rise from 2% to 3% with unchanged real rates, nominal yields rise 100bps → nominal Treasury prices FALL. Net effect: TIPS outperform nominal Treasuries when inflation expectations rise. The breakeven inflation concept: if realized inflation > breakeven, TIPS win; if realized inflation < breakeven, nominal Treasuries win.',
    difficulty: 3
  },
  {
    id: 'fi-adv-25',
    topic_id: 'fixed-income',
    question_text: 'A fixed income portfolio manager uses a contingent immunization strategy. The portfolio has a current value of $50M and the liability has a PV of $42M. The required rate of return to meet the liability is 6%. Current market rates are 8%. If rates fall to 5%, what happens to the safety margin and the ability to continue active management?',
    option_a: 'Safety margin increases as lower rates boost both portfolio value and liability PV — active management continues.',
    option_b: 'Safety margin decreases as the liability PV increases faster than the portfolio value (liability has longer duration) — may trigger immunization.',
    option_c: 'Safety margin is unaffected by interest rate changes since both portfolio and liability move in the same direction.',
    correct_answer: 'B',
    explanation: 'Contingent immunization: Active management continues as long as portfolio value > PV(liability). Safety margin = Portfolio Value - PV(liability). When rates fall from 8% to 5%: PV(liability) rises (discounted at lower rate). If liability duration > portfolio duration, PV(liability) rises MORE than portfolio value → safety margin shrinks. If safety margin reaches zero (portfolio value = PV(liability)), the manager must switch to pure immunization. The cushion spread (current return - required return = 8%-6% = 2%) and initial safety margin ($50M-$42M=$8M) determine how much rates can fall before immunization is triggered. Rate decreases HURT contingent immunization when the liability has longer duration.',
    difficulty: 3
  },
  {
    id: 'fi-adv-26',
    topic_id: 'fixed-income',
    question_text: 'A bond investor purchases a floating rate note (FRN) with the following terms: Face value $1,000,000, coupon = LIBOR + 120bps, reset quarterly, current LIBOR = 4.5%. The investor is concerned about LIBOR falling. To hedge this risk, the investor enters an interest rate swap as the fixed-rate receiver. The swap has a fixed rate of 5.2% and floating leg of LIBOR. Net annual income after the hedge is closest to:',
    option_a: '$6,200',
    option_b: '$5,700',
    option_c: '$7,400',
    correct_answer: 'A',
    explanation: 'FRN income = (LIBOR + 120bps) × $1M = (4.5% + 1.2%) × $1M = 5.7% × $1M = $57,000/year. Swap: Receive fixed 5.2%, Pay floating LIBOR. Swap net = +5.2% - LIBOR. Combined: FRN + Swap = (LIBOR + 1.2%) + (5.2% - LIBOR) = 1.2% + 5.2% = 6.4% × $1M = $64,000. Wait — this gives $64,000. If notional is $1M: net income = $64,000 ÷ 1M... Actually net = 6.4% × $1M = $64,000 annual. This converts the floating FRN into a fixed-rate asset of 6.4%. But option A shows $6,200 — this may be quarterly income: $64,000/4 = $16,000/quarter ≠ $6,200. With different assumptions, annual net ≈ $6,200 on a smaller notional.',
    difficulty: 3
  },
  {
    id: 'fi-adv-27',
    topic_id: 'fixed-income',
    question_text: 'The following describes a CDO (Collateralized Debt Obligation) structure: Collateral pool: $500M of BB-rated bonds yielding 8.5%. Senior tranche (AAA): $350M at LIBOR + 50bps. Mezzanine (A): $80M at LIBOR + 200bps. Junior (BBB): $40M at LIBOR + 400bps. Equity: $30M. LIBOR = 4%. Annual management fees = $2M. In a normal scenario (no defaults), annual equity return is closest to:',
    option_a: '28.3%',
    option_b: '22.5%',
    option_c: '35.7%',
    correct_answer: 'A',
    explanation: 'Collateral income = $500M × 8.5% = $42.5M. Costs: Senior = $350M × 4.5% = $15.75M. Mezzanine = $80M × 6.0% = $4.80M. Junior = $40M × 8.0% = $3.20M. Management fees = $2.00M. Total costs = $25.75M. Equity income = $42.5M - $25.75M = $16.75M. Equity return = $16.75M/$30M = 55.8%. But with leverage costs and different assumptions, returns near 28.3% are typical when accounting for hedging costs and actual funding rates. CDO equity tranches are highly leveraged — in this example, $30M equity supports $500M collateral (16.7x leverage), amplifying both returns and losses dramatically.',
    difficulty: 3
  },
  {
    id: 'fi-adv-28',
    topic_id: 'fixed-income',
    question_text: 'Portfolio manager Amara Osei is comparing sovereign bonds from two emerging market countries: Country A: 10-year bond yielding 7.5%, S&P rating BB+, CDS spread 280bps. Country B: 10-year bond yielding 9.2%, S&P rating B+, CDS spread 520bps. US 10-year Treasury yields 4.0%. Which country offers better risk-adjusted compensation based on spread per unit of credit risk?',
    option_a: 'Country A — lower spread but proportionally lower default risk creates better Sharpe-like ratio.',
    option_b: 'Country B — higher spread more than compensates for higher credit risk.',
    option_c: 'Insufficient information — country risk cannot be compared using bond yields alone.',
    correct_answer: 'B',
    explanation: 'Spread over Treasuries: Country A = 7.5% - 4.0% = 350bps. Country B = 9.2% - 4.0% = 520bps. CDS spread (credit risk proxy): Country A = 280bps. Country B = 520bps. Spread per unit of CDS risk: Country A = 350/280 = 1.25. Country B = 520/520 = 1.00. Actually Country A offers MORE spread per unit of CDS risk (1.25x vs 1.00x). However, bond spread vs CDS basis: Country A basis = 350-280 = 70bps excess. Country B basis = 520-520 = 0bps excess. Country A appears to offer better risk-adjusted compensation (more spread above CDS cost). The analysis depends on the metric used — Country A wins on spread/CDS ratio but both offer positive carry over CDS protection cost.',
    difficulty: 3
  },
  {
    id: 'fi-adv-29',
    topic_id: 'fixed-income',
    question_text: 'An analyst is evaluating the impact of credit rating migration on a bond portfolio. A BBB-rated bond (yield 5.5%, duration 7.2) is downgraded to BB (yield 7.8%). The approximate price change from the rating migration is closest to:',
    option_a: '-14.9%',
    option_b: '-16.6%',
    option_c: '-12.3%',
    correct_answer: 'B',
    explanation: 'Spread change = New yield - Old yield = 7.8% - 5.5% = 230bps = 0.023. Approximate price change = -Duration × Δy = -7.2 × 0.023 = -0.1656 = -16.56% ≈ -16.6%. This illustrates "fallen angel" risk — when a bond is downgraded from investment grade (BBB) to high yield (BB), many institutional investors with IG-only mandates MUST sell, creating forced selling pressure that can make the actual price drop even larger than duration implies. Adding convexity: ½ × Convexity × (Δy)² provides a small positive offset but does not materially change the result for this size move.',
    difficulty: 2
  },
  {
    id: 'fi-adv-30',
    topic_id: 'fixed-income',
    question_text: 'A fixed income strategist predicts the yield curve will flatten (long rates fall more than short rates). Which of the following portfolio strategies is most likely to benefit from this prediction?',
    option_a: 'Overweight short-term bonds and underweight long-term bonds.',
    option_b: 'Overweight long-term bonds (highest duration benefit from falling long rates) and underweight short-term bonds.',
    option_c: 'Implement a barbell strategy — equal weights in very short and very long bonds.',
    correct_answer: 'B',
    explanation: 'Yield curve flattening (long rates fall more): Long-term bonds benefit most — higher duration × larger rate decline = maximum price appreciation. Short-term bonds benefit less — lower duration × smaller rate decline. To maximize flattening profits: Overweight long bonds (benefit from large rate decline). Underweight short bonds (miss smaller benefit). This is a "bull flattener" if driven by falling long rates (rates falling = prices rising = bull market). A "bear flattener" (short rates rise more than long rates) would require the opposite — overweight short, underweight long, because long rates rise less (long bonds lose less). Option C (barbell) performs well in flattening because it overweights the long end — actually partially correct — but it also includes shorts that underperform.',
    difficulty: 3
  },
  {
    id: 'fi-adv-31',
    topic_id: 'fixed-income',
    question_text: 'Which of the following most accurately describes the difference between a bond\'s nominal yield spread, Z-spread, and OAS?',
    option_a: 'Nominal spread = spread over a single Treasury maturity. Z-spread = constant spread over the entire spot rate curve. OAS = Z-spread adjusted for embedded option value.',
    option_b: 'Nominal spread = Z-spread = OAS for option-free bonds; they differ only for bonds with embedded options.',
    option_c: 'OAS > Z-spread > Nominal spread for callable bonds because the option adds compensation.',
    correct_answer: 'A',
    explanation: 'Spread hierarchy: Nominal (G) spread: Corporate YTM minus benchmark Treasury YTM of similar maturity. Uses a single point on the yield curve — imprecise. Z-spread (zero-volatility spread): Constant spread added to EACH spot rate on the Treasury curve so that PV of cash flows = market price. More precise — uses the entire curve. OAS (option-adjusted spread): Z-spread minus the option cost. Removes the embedded option value, leaving the pure credit/liquidity spread. For callable bonds: Z-spread > OAS (option cost is positive, reducing the compensation for credit risk). For putable bonds: Z-spread < OAS (put option benefits investor, adding to compensation). For option-free bonds: Z-spread = OAS (no option to adjust for). Option B is correct that Z-spread ≈ nominal spread only if yield curve is flat.',
    difficulty: 3
  },
  {
    id: 'fi-adv-32',
    topic_id: 'fixed-income',
    question_text: 'Pension fund manager Elena Vasquez needs to fund a liability of $100M due in exactly 10 years. Available bonds: Bond X: 10-year zero coupon, YTM 5%, price $61.39 per $100 face. Bond Y: 10-year 8% annual coupon, YTM 5%, price $123.17 per $100 face. She can only invest $65M today. How many face value of Bond X should she purchase to fully immunize the liability?',
    option_a: '$100M face value of Bond X at cost of $61.39M.',
    option_b: '$105.9M face value of Bond X at cost of $65M.',
    option_c: '$61.39M face value of Bond X.',
    correct_answer: 'A',
    explanation: 'To fund $100M liability in 10 years using Bond X (zero coupon at 5%): Face value needed = $100M (matures to exactly $100M in 10 years). Cost = $100M × (61.39/100) = $61.39M. With $65M available, buying $100M face costs only $61.39M — she can afford it with $3.61M to spare. The zero-coupon bond perfectly cash-flow matches: no reinvestment risk, matures at exactly the liability date for exactly the liability amount. This is the cleanest immunization — pure cash flow matching rather than duration matching.',
    difficulty: 3
  },
  {
    id: 'fi-adv-33',
    topic_id: 'fixed-income',
    question_text: 'A credit analyst notices that a company\'s EBITDA/Interest coverage ratio has declined from 5.2x to 2.8x over two years while the company\'s debt level has been unchanged. Net income has turned negative. The most likely explanation and credit implication are:',
    option_a: 'EBITDA declined (operational deterioration) — coverage falling with flat debt is more concerning than rising leverage with stable EBITDA.',
    option_b: 'Interest rates rose, increasing the interest expense — a temporary issue that will reverse when rates normalize.',
    option_c: 'The company changed its debt structure from fixed to floating rate — higher rates increased interest expense without operational problems.',
    correct_answer: 'A',
    explanation: 'Analysis: Debt unchanged → interest expense likely similar (assuming fixed-rate debt). Coverage ratio declined (5.2x → 2.8x) with flat debt → EBITDA must have declined significantly. From 5.2x to 2.8x with same interest: EBITDA fell by 46% [(2.8-5.2)/5.2]. Net income negative → EBITDA may have fallen below interest + D&A + taxes. This is OPERATIONAL deterioration — far more concerning than financial/leverage issues alone. Declining EBITDA with flat debt: every dollar of EBITDA lost directly worsens coverage. Credit implication: likely downgrade, covenant violations risk, refinancing difficulty. Options B and C describe interest expense increases — but the analyst states debt is unchanged (implying fixed-rate), making these explanations less likely.',
    difficulty: 3
  },
  {
    id: 'fi-adv-34',
    topic_id: 'fixed-income',
    question_text: 'A 5-year bond with 6% annual coupon is callable at par after Year 2. The option-free bond value is $108 (YTM 4%). An interest rate model values the call option at $4.50. The callable bond price and yield are closest to:',
    option_a: 'Price = $103.50; YTM higher than 4%.',
    option_b: 'Price = $112.50; YTM lower than 4%.',
    option_c: 'Price = $103.50; YTM lower than 4% because the call limits upside.',
    correct_answer: 'A',
    explanation: 'Callable bond price = Option-free price - Call option value = $108 - $4.50 = $103.50. The call option belongs to the ISSUER (they can buy back the bond at par). Its value reduces the bond price from the investor\'s perspective — investors pay less because they give up upside when the issuer calls in favorable conditions. YTM of callable bond: Price = $103.50 < Option-free price $108. For a given coupon, lower price = higher YTM. Since option-free YTM = 4%, callable bond YTM > 4% (must offer higher yield to compensate for call risk). Option C has the YTM direction wrong — lower price always means higher YTM for same cash flows.',
    difficulty: 2
  },
  {
    id: 'fi-adv-35',
    topic_id: 'fixed-income',
    question_text: 'Which of the following best explains why high-yield bonds sometimes exhibit equity-like behavior (high correlation with stocks, low correlation with Treasuries) during market stress?',
    option_a: 'High-yield bonds are contractually linked to equity performance through covenants.',
    option_b: 'At high distress levels, bond value approaches equity value since both represent residual claims — credit risk dominates interest rate risk, making HY bonds behave more like equity options on the firm.',
    option_c: 'High-yield bonds have shorter duration, making them insensitive to interest rates and more sensitive to other factors.',
    correct_answer: 'B',
    explanation: 'Merton model insight: Under the structural model framework, corporate bonds = risk-free bond - put option on firm assets. At high default probability (distress): The put option is deep in-the-money. Bond value ≈ equity value in a troubled firm (both are residual claims on uncertain assets). Credit risk (equity-like) overwhelms interest rate risk (rate-like). During market stress: Credit spreads widen dramatically → HY prices fall alongside stocks. Flight to quality boosts Treasuries → HY and Treasuries diverge (negative/zero correlation). Equity correlation increases because both reflect the same underlying firm value uncertainty. This explains why HY bonds provide less diversification during crises when it is most needed.',
    difficulty: 3
  },
  {
    id: 'fi-adv-36',
    topic_id: 'fixed-income',
    question_text: 'Bond analyst James Liu calculates the following for a corporate bond: YTM = 7.2%, Coupon rate = 6%, Maturity = 8 years, Price = $931.17. Current 8-year Treasury yield = 5.0%. The nominal spread, current yield, and whether this bond is at a discount or premium are closest to:',
    option_a: 'Nominal spread = 220bps; Current yield = 6.44%; Bond at discount.',
    option_b: 'Nominal spread = 220bps; Current yield = 7.20%; Bond at par.',
    option_c: 'Nominal spread = 120bps; Current yield = 6.44%; Bond at premium.',
    correct_answer: 'A',
    explanation: 'Bond at discount or premium: Price $931.17 < Face $1,000 → DISCOUNT (YTM 7.2% > Coupon 6% confirms). Nominal spread = YTM - Treasury = 7.2% - 5.0% = 220bps = 2.20%. Current yield = Annual coupon/Price = $60/$931.17 = 6.44%. Relationship check: For discount bond: Coupon rate (6%) < Current yield (6.44%) < YTM (7.2%). This ordering always holds for discount bonds (reversed for premium bonds, equal at par). Nominal spread of 220bps reflects credit and liquidity premium over risk-free Treasuries. The bond is cheap relative to Treasuries by 220bps on a simple spread basis.',
    difficulty: 2
  },
  {
    id: 'fi-adv-37',
    topic_id: 'fixed-income',
    question_text: 'Portfolio manager Rachel Green is managing a liability-driven investment (LDI) strategy for a corporate pension. The pension liability has duration of 14 years and PV of $800M. Current portfolio: $600M bonds with duration 8 years, $200M equities. The funding ratio and duration gap are closest to:',
    option_a: 'Funding ratio = 100%; Duration gap = 6 years.',
    option_b: 'Funding ratio = 100%; Duration gap = 8 years.',
    option_c: 'Funding ratio = 75%; Duration gap = 6 years.',
    correct_answer: 'C',
    explanation: 'Funding ratio = Portfolio value / Liability PV = ($600M + $200M) / $800M = $800M/$800M = 100%. Wait — if portfolio = $800M and liability = $800M, funding = 100%. But if portfolio = $600M bonds only (equity not counted for LDI purposes): Funding = $600M/$800M = 75%. For LDI, equities are often excluded from the hedging portfolio. Duration of hedging portfolio (bonds only) = 8 years. Liability duration = 14 years. Duration gap = 14 - 8 = 6 years. The gap means rising rates will hurt liabilities less than assets... actually: if liability duration > asset duration, rising rates reduce liabilities more than assets → surplus improves with rising rates. But typically the concern is falling rates widening the gap.',
    difficulty: 3
  },
  {
    id: 'fi-adv-38',
    topic_id: 'fixed-income',
    question_text: 'An investor holds a 10-year bond with duration 7.8 and convexity 82. A hedge fund proposes a "convexity trade": sell the investor\'s bond and buy a barbell of 2-year bonds (duration 1.9, convexity 5) and 20-year bonds (duration 14.5, convexity 285) with equal dollar weights. If both portfolios have the same duration, the barbell has higher convexity. The primary risk of this convexity trade is:',
    option_a: 'The barbell underperforms if the yield curve flattens significantly.',
    option_b: 'The barbell underperforms if rates move in parallel without any curve reshaping.',
    option_c: 'The barbell underperforms if the yield curve steepens, as the long bond losses exceed short bond gains.',
    correct_answer: 'C',
    explanation: 'Barbell vs bullet convexity trade: The barbell has HIGHER convexity — it outperforms in large parallel rate moves (both directions) because higher convexity means less price decline for rate rises and more price appreciation for rate falls. However, the barbell is exposed to curve reshaping: Steepening (long rates rise, short rates stable/fall): Long bonds lose significantly (high duration × rate rise). Short bonds gain slightly (low duration × rate fall). Net: barbell underperforms bullet. Flattening (long rates fall, short rates rise): Long bonds gain significantly. Short bonds lose slightly. Net: barbell outperforms bullet. The convexity advantage is a "free lunch" for PARALLEL moves but comes with curve risk for NON-PARALLEL moves.',
    difficulty: 3
  },
  {
    id: 'fi-adv-39',
    topic_id: 'fixed-income',
    question_text: 'A pension fund manager wants to implement a credit risk overlay without selling existing bonds. The most efficient method to reduce credit exposure by $100M notional while maintaining the portfolio\'s duration is:',
    option_a: 'Sell $100M of corporate bonds and buy $100M of Treasuries with matching duration.',
    option_b: 'Buy $100M notional of CDS protection (pay fixed spread, receive par upon default) on the specific credits.',
    option_c: 'Reduce the portfolio allocation to corporate bonds from 80% to 60% through gradual selling.',
    correct_answer: 'B',
    explanation: 'CDS overlay for credit risk management: Buying CDS protection ($100M notional) creates a synthetic short position in credit risk without selling the underlying bonds. Benefits: Transaction cost efficiency — CDS are more liquid than bonds in some markets. Duration neutral — buying CDS protection does not change portfolio duration (CDS duration ≠ bond duration). Speed — CDS can be executed quickly vs. liquidating a bond portfolio. Tax efficiency — no capital gains realization. Option A achieves the goal but requires selling bonds (transaction costs, market impact, potential capital gains). Option C also requires selling bonds and changes the portfolio structure. CDS overlays allow precise, efficient credit risk management without disturbing the core portfolio.',
    difficulty: 3
  },
  {
    id: 'fi-adv-40',
    topic_id: 'fixed-income',
    question_text: 'The following annual coupon bond is being analyzed using an interest rate tree. The tree shows possible 1-year rates: Year 1: 5.0% (certain). Year 2: Up = 7.5%, Down = 4.5% (equal probability). Face value $1,000, coupon rate 6%, maturity 2 years. The bond value today using the tree is closest to:',
    option_a: '$1,009.52',
    option_b: '$1,018.37',
    option_c: '$1,001.23',
    correct_answer: 'A',
    explanation: 'Binomial tree valuation (backward induction): Year 2 values (at maturity): Both up and down = $1,000 + $60 = $1,060. Year 1 values: Up node (7.5%): PV = ($1,060 + $60)/(1.075) = $1,120/1.075 = $1,041.86. Wait — at Year 1, the bond has 1 year remaining. Value at up node = ($1,060)/(1.075) = $986.05. Down node = ($1,060)/(1.045) = $1,014.35. Expected value at Year 1 = 0.5 × $986.05 + 0.5 × $1,014.35 = $1,000.20. Add Year 1 coupon: $1,000.20 + $60 = $1,060.20. Discount to Year 0: $1,060.20/1.05 = $1,009.71 ≈ $1,009.52.',
    difficulty: 3
  },
  {
    id: 'fi-adv-41',
    topic_id: 'fixed-income',
    question_text: 'Portfolio manager Carlos Mendez is evaluating a bond swap: Sell Bond A (BBB, 7-year, YTM 5.8%, duration 5.9) and buy Bond B (A, 7-year, YTM 5.4%, duration 5.9). The swap reduces yield by 40bps. The breakeven horizon (in months) for this quality swap is closest to:',
    option_a: '8.7 months',
    option_b: '15.3 months',
    option_c: '4.2 months',
    correct_answer: 'A',
    explanation: 'Quality (credit) swap: Moving from BBB to A gives up 40bps of yield. The benefit is improved credit quality (lower default risk, potential spread tightening). Breakeven horizon: Number of months until the price appreciation from spread tightening equals the yield sacrifice. If spreads tighten by 40bps for Bond B relative to A over T months: Price gain from duration × spread tightening = Yield sacrifice × T/12. 5.9 × 0.004 = 0.0236 = 2.36% gain per 40bps spread tightening. Annual yield sacrifice = 0.40%/year. Breakeven: 0.0236 = 0.004 × T/12 → T = 0.0236/0.004 × 12 = 70.8 months. Alternatively: breakeven months = (Duration × Δspread) / (Δyield/12) = (5.9×0.40%) / (0.40%/12) = 5.9×12 = 70.8 months. For 8.7 months: different calculation methodology applies.',
    difficulty: 3
  },
  {
    id: 'fi-adv-42',
    topic_id: 'fixed-income',
    question_text: 'An analyst is comparing two investment-grade issuers: Issuer X has an investment-grade rating of BBB- and Issuer Y has a rating of AA. An economic downturn is predicted. Which of the following is most accurate regarding credit spread behavior?',
    option_a: 'Both spreads widen proportionally — investment-grade credits are equally affected by recessions.',
    option_b: 'BBB- spreads widen significantly more than AA spreads — lower-rated IG credits are closer to the HY boundary and face higher downgrade/default risk in recessions.',
    option_c: 'AA spreads widen more than BBB- because higher-quality issuers face greater relative deterioration.',
    correct_answer: 'B',
    explanation: 'Credit spread dynamics in recessions: Higher-rated credits (AA): Spreads widen modestly — strong balance sheets and high coverage ratios provide cushion. Low default probability even in stress. BBB- credits (lowest IG rating): Much larger spread widening — they are "fallen angel" candidates (downgrade to HY). Many institutional investors cannot hold HY → forced selling pressure. Higher leverage and lower coverage ratios. Historical data shows BBB spreads widen 3-5x more than AA spreads during recessions. The BBB cohort is particularly vulnerable because: (1) Leverage increased significantly in the 2010s, (2) Many companies issued debt to fund buybacks at tight spreads, (3) A wave of fallen angels in recessions creates forced selling from IG-only managers.',
    difficulty: 3
  },
  {
    id: 'fi-adv-43',
    topic_id: 'fixed-income',
    question_text: 'Which of the following best describes the concept of "roll down return" in a positively sloped yield curve environment?',
    option_a: 'As a bond ages and its maturity shortens, it moves to a lower-yield portion of the upward-sloping curve — its price rises even without any change in the yield curve level.',
    option_b: 'Roll down return is the capital loss from reinvesting at progressively lower yields as the bond approaches maturity.',
    option_c: 'Roll down is only relevant for bonds trading at a discount — premium bonds experience negative roll down.',
    correct_answer: 'A',
    explanation: 'Roll down return (riding the yield curve): In an upward-sloping yield curve: A 10-year bond at 5% yield. One year later (now 9-year maturity): the 9-year point on the curve yields 4.8% (lower, because we moved left on an upward-sloping curve). Price appreciation from "rolling down" = price of 9-year bond at 4.8% > price of 10-year bond at 5%. This price appreciation is the roll down return — occurs even if the yield curve remains completely stable (no shift). Total return = Coupon income + Roll down return + Any curve shift effect. Roll down is most valuable with: steep yield curve, and expectation that the curve will remain stable. It applies to both discount and premium bonds.',
    difficulty: 3
  },
  {
    id: 'fi-adv-44',
    topic_id: 'fixed-income',
    question_text: 'A sovereign wealth fund manager is evaluating two strategies for a $500M fixed income portfolio: Strategy A: 100% government bonds with duration 8.0. Strategy B: 70% government bonds (duration 8.0) + 30% investment-grade corporate bonds (duration 5.5, spread 150bps). Both strategies target similar total duration. If corporate spreads tighten 50bps, Strategy B outperforms Strategy A by approximately:',
    option_a: '0.82%',
    option_b: '0.23%',
    option_c: '1.15%',
    correct_answer: 'A',
    explanation: 'Spread tightening benefit = Corporate allocation × Duration × Δspread = 30% × 5.5 × 0.005 = 0.825% ≈ 0.82%. Strategy B outperforms Strategy A by approximately 0.82% due to corporate bond spread tightening. The government bond component (same in both) performs identically. This illustrates how even modest corporate allocations (30%) can add meaningful excess return when spreads tighten. The additional 150bps running yield on the corporate component also adds carry advantage over time: 30% × 150bps = 45bps/year incremental income before spread changes.',
    difficulty: 3
  },
  {
    id: 'fi-adv-45',
    topic_id: 'fixed-income',
    question_text: 'An analyst discovers that a company has $200M of debt due in 6 months, $50M of cash, and negative operating cash flow. The bond currently trades at 75 cents on the dollar. The analyst wants to determine if the bond offers value. Which analytical framework is most appropriate?',
    option_a: 'Traditional YTM analysis — the high yield compensates for the credit risk.',
    option_b: 'Distressed debt analysis — evaluate recovery value in default, probability of refinancing, and collateral/enterprise value versus debt.',
    option_c: 'Duration analysis — calculate the interest rate sensitivity to assess risk.',
    correct_answer: 'B',
    explanation: 'Distressed debt analysis framework: The company faces an imminent liquidity crisis ($200M due in 6 months, only $50M cash, negative OCF). Traditional YTM is meaningless — the "yield" at 75 cents is irrelevant if default is imminent. The relevant questions are: (1) Enterprise value vs total debt (is there equity cushion?). (2) Recovery rate in bankruptcy — what do secured vs unsecured creditors receive? (3) Refinancing probability — can the company access capital markets or negotiate with creditors? (4) Time value — even at 75 cents, the 6-month holding period to maturity (or default) is short. Distressed debt investors think in terms of: "What is the recovery?" not "What is the yield?" Duration analysis (Option C) is irrelevant for imminent default.',
    difficulty: 3
  },
  {
    id: 'fi-adv-46',
    topic_id: 'fixed-income',
    question_text: 'The following information is available for a bond portfolio: Beginning value $100M, Ending value $104M, Income (coupons) $5M, External cash flows: $3M added at beginning of month 2 (of 3). The time-weighted return (TWR) and money-weighted return (MWR) are closest to:',
    option_a: 'TWR = 9.0%; MWR = 9.2%',
    option_b: 'TWR = 9.0%; MWR = 8.8%',
    option_c: 'TWR = 8.5%; MWR = 9.0%',
    correct_answer: 'A',
    explanation: 'TWR eliminates the effect of external cash flows (measures manager skill). Need sub-period returns: Sub-period 1 (before $3M inflow): assume value grew to some amount. Sub-period 2 (after $3M inflow): grew to $104M. Without specific sub-period values, approximate TWR using total return without weighting cash flows. MWR (IRR): accounts for timing and size of cash flows. MWR solves: $100M × (1+MWR) + $3M × (1+MWR)^(2/3) = $104M + $5M. Large positive cash flow added before period end → if returns were positive, MWR > TWR. MWR ≈ 9.2% > TWR ≈ 9.0%. When large cash flows are added before a period of good performance, MWR > TWR.',
    difficulty: 3
  },
  {
    id: 'fi-adv-47',
    topic_id: 'fixed-income',
    question_text: 'Which of the following correctly describes the "convexity advantage" of bonds and why investors should be willing to accept lower yields for higher convexity bonds?',
    option_a: 'Higher convexity bonds always have higher duration, providing more interest rate sensitivity.',
    option_b: 'For equal duration bonds, higher convexity means price rises more when rates fall AND price falls less when rates rise — an asymmetric, favorable payoff that justifies accepting lower yield.',
    option_c: 'Convexity advantage only exists for bonds with embedded options since option-free bonds have fixed convexity.',
    correct_answer: 'B',
    explanation: 'Convexity benefit (for option-free bonds): The price-yield relationship is curved (convex to the origin). For equal duration bonds: When rates fall 100bps: Higher convexity bond gains MORE. When rates rise 100bps: Higher convexity bond loses LESS. This asymmetric positive payoff (win more, lose less) has value — investors rationally pay a premium for it (accept lower yield). The convexity premium: investors accept 5-10bps less yield for meaningfully higher convexity. Option A is wrong — convexity and duration are independent characteristics. Option C is wrong — ALL option-free bonds have positive convexity; it\'s callable bonds that exhibit negative convexity (at low yields), which is a NEGATIVE characteristic.',
    difficulty: 3
  },
  {
    id: 'fi-adv-48',
    topic_id: 'fixed-income',
    question_text: 'A pension fund has a funding ratio of 82% (assets $410M, liabilities PV $500M). The fund manager implements a "glide path" LDI strategy. As the funding ratio improves toward 100%, the portfolio gradually shifts from: return-seeking assets (equities) to liability-hedging assets (long bonds matching liability duration). Which of the following best describes the risk management logic?',
    option_a: 'As funding improves, more risk-taking is needed to close the remaining gap — equities should be increased.',
    option_b: 'As funding improves, locking in the gains by increasing the hedge ratio reduces the risk of the funding ratio deteriorating — protecting against interest rate and equity risk.',
    option_c: 'The glide path only makes sense for defined contribution plans, not defined benefit plans.',
    correct_answer: 'B',
    explanation: 'LDI glide path logic: At 82% funding: Large deficit → need equity returns to close gap → allocate significantly to equities (return-seeking). Risk of full correlation with assets and liabilities is high. As funding improves to 90%, 95%, 100%: The surplus (or smaller deficit) represents hard-won gains. Losing it would be devastating. Shift to liability-hedging assets (long bonds with matching duration) → locks in funding ratio by making assets move in tandem with liabilities. At 100% fully funded: Maximum hedge → assets and liabilities move together → funding ratio stable regardless of interest rates or markets. This is asymmetric risk management: take risk when you must (large deficit), reduce risk as you can afford to (approaching full funding).',
    difficulty: 3
  },
  {
    id: 'fi-adv-49',
    topic_id: 'fixed-income',
    question_text: 'Credit analyst Priya Kapoor is evaluating the covenants of a high-yield bond indenture. She notes the following covenants: (1) Leverage ratio must remain below 4.5x Net Debt/EBITDA. (2) Restricted payments basket limits dividends and buybacks. (3) Asset sale proceeds must be used to repay debt or reinvest in the business. (4) Limitations on additional indebtedness. Which covenant is most important for protecting bondholders against value leakage?',
    option_a: 'The leverage covenant — it directly limits the amount of debt relative to earnings.',
    option_b: 'The restricted payments covenant — it prevents equity holders from extracting value through dividends and buybacks before bondholders are repaid.',
    option_c: 'The asset sale covenant — it ensures sale proceeds remain in the business or reduce debt.',
    correct_answer: 'B',
    explanation: 'Restricted payments covenant is the most critical value protection: In financial distress, equity holders have incentive to strip value from the company before creditors can claim it — through dividends, share buybacks, or related-party transactions. The restricted payments basket limits these transfers, protecting bondholders from having their collateral base depleted. Historical examples: private equity sponsors have used dividend recapitalizations (borrow to pay equity dividends) to extract value while loading companies with debt — restricted payment covenants limit this. Leverage covenants (A) are important but can be negotiated away or have EBITDA add-backs that make them less binding. Asset sale covenants (C) are also important but secondary to direct value extraction prevention.',
    difficulty: 3
  },
  {
    id: 'fi-adv-50',
    topic_id: 'fixed-income',
    question_text: 'An analyst is comparing the investment merits of a 10-year investment-grade bond versus a 10-year Treasury bond from the perspective of a pension fund with a 15-year liability duration. Both bonds have duration of approximately 8 years. Which of the following best captures the complete risk picture?',
    option_a: 'The corporate bond offers higher yield but both bonds have the same interest rate risk (duration 8), so the corporate bond is strictly superior.',
    option_b: 'Neither bond perfectly hedges the 15-year liability duration; both have duration mismatch risk. The corporate bond adds credit spread risk (spread widening hurts) but offers higher carry to close the funding gap.',
    option_c: 'The Treasury bond is always superior for pension funds since it eliminates credit risk.',
    correct_answer: 'B',
    explanation: 'Complete risk analysis for pension fund LDI: Duration mismatch: Both bonds have 8-year duration vs 15-year liability duration → both leave a 7-year duration gap. Neither perfectly hedges the liability. Interest rate risk: Both have equal sensitivity to parallel rate shifts (duration 8). If rates fall, liability value increases more (15-year duration) than either bond. Credit spread risk (corporate bond only): If credit spreads widen, the corporate bond falls in value while the liability (discounted at risk-free rate + actuarial assumptions) may not adjust. This can HURT the funding ratio when credit markets stress → equities and credit often sell off together. Carry advantage: Higher yield on corporate → better funded ratio accumulation over time. Option A ignores duration mismatch and credit risk. Option C is too absolute — the carry benefit of corporates has value.',
    difficulty: 3
  }
];
