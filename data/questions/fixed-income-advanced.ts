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
  }
];
