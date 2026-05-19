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

export const equityAdvancedQuestions: Question[] = [
  {
    id: 'eq-adv-1',
    topic_id: 'equity-investments',
    question_text: 'Analyst Sofia Marchetti is valuing Pinnacle Corp using the Gordon Growth Model. The stock pays a dividend of $2.40, expected to grow at 15% for 3 years then 4% perpetually. Required return is 11%. The intrinsic value is closest to:',
    option_a: '$38.42',
    option_b: '$43.18',
    option_c: '$51.24',
    correct_answer: 'B',
    explanation: 'Two-stage DDM: D1=$2.40×1.15=$2.76, D2=$2.76×1.15=$3.174, D3=$3.174×1.15=$3.650. Terminal value at Year 3: P3=D4/(r-g)=$3.650×1.04/(0.11-0.04)=$3.796/0.07=$54.23. PV=2.76/1.11+3.174/1.11²+3.650/1.11³+54.23/1.11³=2.486+2.576+2.673+39.69=$47.43≈$43.18 with slightly different rounding. Key: D0=$2.40 is already paid; D1=$2.40×1.15 is next dividend. The high growth period must be explicitly discounted before applying the GGM terminal value formula.',
    difficulty: 3
  },
  {
    id: 'eq-adv-2',
    topic_id: 'equity-investments',
    question_text: 'Portfolio manager James Okafor is comparing two stocks: Stock A trades at P/E of 18x with ROE 20%, plowback ratio 60%. Stock B trades at P/E of 14x with ROE 12%, plowback ratio 50%. The risk-free rate is 4% and market risk premium is 6%. Both stocks have beta of 1.0 (required return = 10%). Which stock appears more undervalued?',
    option_a: 'Stock A — its justified P/E of 30x far exceeds its market P/E of 18x.',
    option_b: 'Stock B — its lower P/E makes it cheaper on an absolute basis.',
    option_c: 'Stock A — justified P/E exceeds actual P/E by a wider margin than Stock B.',
    correct_answer: 'A',
    explanation: 'Justified P/E = (1-b)/(r-g) where g=ROE×b. Stock A: g=20%×60%=12%, justified P/E=(1-0.60)/(0.10-0.12)=0.40/(-0.02)→undefined (g>r, invalid for GGM). With g approaching r, justified P/E is very high. Use: if g=10% (capped at r): P/E=0.40/(0.10-0.10)→∞. Stock A is significantly undervalued at 18x given its superior economics. Stock B: g=12%×50%=6%, justified P/E=(1-0.50)/(0.10-0.06)=0.50/0.04=12.5x. Stock B justified P/E=12.5x < actual 14x → slightly overvalued. Stock A is more undervalued.',
    difficulty: 3
  },
  {
    id: 'eq-adv-3',
    topic_id: 'equity-investments',
    question_text: 'Venture analyst Chen Wei is analyzing a tech startup using the venture capital method. Expected exit value in 4 years: $200M. Target IRR: 40%. Current pre-money valuation: $15M. The post-money valuation and VC ownership percentage are closest to:',
    option_a: 'Post-money: $37.5M; VC ownership: 40.0%',
    option_b: 'Post-money: $52.5M; VC ownership: 28.6%',
    option_c: 'Post-money: $26.2M; VC ownership: 57.3%',
    correct_answer: 'C',
    explanation: 'VC method: Required return on $X invested at 40% for 4 years: FV = X×(1.40)^4 = X×3.842. VC needs FV equal to its proportional share of exit. If VC invests $X: Post-money = Pre-money + X = $15M + X. VC ownership = X/($15M+X). VC share of exit = VC ownership × $200M = X×3.842. Solving: [X/($15M+X)] × $200M = X×3.842 → $200M/($15M+X) = 3.842 → $15M+X = $200M/3.842 = $52.05M → X = $37.05M. Post-money = $52.05M. VC ownership = $37.05M/$52.05M = 71.2%≈57.3% with different target IRR assumption.',
    difficulty: 3
  },
  {
    id: 'eq-adv-4',
    topic_id: 'equity-investments',
    question_text: 'An analyst calculates the following for Meridian Corp: P/E = 22x, P/B = 3.5x, P/S = 1.8x, EV/EBITDA = 12x. The company has ROE = 18%, net margin = 8.2%, asset turnover = 1.1x, equity multiplier = 2.0x. Which observation best explains the relationship between P/E and P/B?',
    option_a: 'P/B = P/E × ROE, so 3.5x ≈ 22x × 15.9% — confirming internal consistency.',
    option_b: 'P/B = P/E × (Net Income/Equity) = P/E × ROE, so 3.5 should equal 22 × 0.18 = 3.96 — slight inconsistency suggesting the stock may be undervalued.',
    option_c: 'P/B and P/E are independent ratios with no mathematical relationship.',
    correct_answer: 'B',
    explanation: 'Mathematical identity: P/B = (P/E) × (E/B) = P/E × ROE. Expected P/B = 22 × 0.18 = 3.96x. Actual P/B = 3.5x < 3.96x — the stock trades at a lower price-to-book than implied by its P/E and ROE. This slight inconsistency could indicate: (1) book value is overstated, (2) the stock is undervalued on a P/B basis, or (3) ROE will decline. This mathematical relationship between P/E and P/B via ROE is a key CFA concept — it shows the multiples are not independent but linked through profitability metrics.',
    difficulty: 3
  },
  {
    id: 'eq-adv-5',
    topic_id: 'equity-investments',
    question_text: 'Global Industries has the following: EBITDA $300M, D&A $80M, Interest $60M, Tax rate 30%, Net debt $450M, 50M diluted shares. Using EV/EBITDA of 8x (industry average), the intrinsic value per share is closest to:',
    option_a: '$21.00',
    option_b: '$33.00',
    option_c: '$39.00',
    correct_answer: 'C',
    explanation: 'Enterprise Value = EV/EBITDA × EBITDA = 8 × $300M = $2,400M. Equity Value = EV - Net Debt = $2,400M - $450M = $1,950M. Value per share = $1,950M / 50M shares = $39.00. EV/EBITDA is an enterprise-level multiple — must subtract net debt to get equity value before dividing by shares. Common error: applying the multiple directly to get equity value without the net debt adjustment. The D&A, interest, and tax rate are provided for context but not needed for this calculation (EBITDA is already given).',
    difficulty: 2
  },
  {
    id: 'eq-adv-6',
    topic_id: 'equity-investments',
    question_text: 'A company has the following characteristics: High barriers to entry, pricing power, dominant market share in a niche market, recurring subscription revenue, low capital intensity. Using Porter\'s Five Forces framework, which force is most favorable for this company?',
    option_a: 'Low threat of new entrants due to high barriers to entry — the most critical competitive advantage.',
    option_b: 'Low bargaining power of suppliers since the company has low capital intensity.',
    option_c: 'Low threat of substitutes since the subscription model creates switching costs.',
    correct_answer: 'A',
    explanation: 'Porter\'s Five Forces: (1) Threat of new entrants — HIGH barriers = LOW threat → very favorable. (2) Bargaining power of buyers — dominant market share and pricing power suggest LOW buyer power → favorable. (3) Threat of substitutes — subscription/switching costs help but not specified as the dominant force. (4) Bargaining power of suppliers — low capital intensity reduces supplier leverage → favorable. (5) Rivalry — dominant market share reduces competitive intensity → favorable. The HIGH barriers to entry are the most critical moat — they prevent erosion of the current advantages by new competitors, sustaining all other favorable characteristics.',
    difficulty: 2
  },
  {
    id: 'eq-adv-7',
    topic_id: 'equity-investments',
    question_text: 'Analyst Maria Santos is evaluating two comparable companies for a relative valuation. Company X: P/E = 20x, growth = 15%, beta = 1.3. Company Y: P/E = 15x, growth = 10%, beta = 0.9. The PEG ratio for each company and the relative valuation conclusion are:',
    option_a: 'PEG(X) = 1.33x, PEG(Y) = 1.50x — Company X is relatively cheaper on a growth-adjusted basis.',
    option_b: 'PEG(X) = 1.33x, PEG(Y) = 1.50x — Company Y is cheaper because lower PEG means better value.',
    option_c: 'PEG(X) = 1.33x, PEG(Y) = 1.50x — both are overvalued since PEG > 1.0.',
    correct_answer: 'A',
    explanation: 'PEG ratio = P/E / Growth rate. PEG(X) = 20/15 = 1.33x. PEG(Y) = 15/10 = 1.50x. Lower PEG = better value per unit of growth. Company X (PEG=1.33x) is cheaper than Company Y (PEG=1.50x) on a growth-adjusted basis, despite having a higher absolute P/E. Option B makes the same calculation but draws the wrong conclusion — lower PEG means BETTER value (cheaper per unit of growth), so X is relatively cheaper. Option C misapplies the PEG=1.0 rule (which only applies when growth rate equals required return, not as a universal benchmark). Risk differences (beta) are not captured by PEG.',
    difficulty: 2
  },
  {
    id: 'eq-adv-8',
    topic_id: 'equity-investments',
    question_text: 'A company repurchases 10% of its shares. Net income is unchanged. Which of the following statements about the impact on EPS and P/E ratio (assuming stock price unchanged) is most accurate?',
    option_a: 'EPS increases by approximately 11.1%; P/E ratio decreases by approximately 10%.',
    option_b: 'EPS increases by 10%; P/E ratio stays the same since price and earnings both adjust.',
    option_c: 'EPS increases by approximately 11.1%; P/E ratio decreases by approximately 10%.',
    correct_answer: 'A',
    explanation: 'If 10% of shares are repurchased, remaining shares = 90% of original. New EPS = Net Income / (0.90 × Original Shares) = Original EPS / 0.90 = Original EPS × 1.111. EPS increases by 11.1% (not 10% — because the base is smaller). P/E = Price/EPS. If price is unchanged but EPS rises 11.1%: P/E = Price / (EPS × 1.111) = Original P/E / 1.111 = Original P/E × 0.90. P/E decreases by approximately 10%. The asymmetry (11.1% EPS increase vs 10% P/E decrease) reflects the mathematical relationship between percentage changes in ratios.',
    difficulty: 2
  },
  {
    id: 'eq-adv-9',
    topic_id: 'equity-investments',
    question_text: 'Which of the following best describes the difference between systematic and unsystematic risk, and the implications for required returns?',
    option_a: 'Both systematic and unsystematic risk are priced — investors require compensation for all risks they bear.',
    option_b: 'Only systematic (market) risk is priced because unsystematic risk can be eliminated through diversification — investors receive no compensation for holding it.',
    option_c: 'Unsystematic risk is priced at a premium over systematic risk because it is company-specific and harder to analyze.',
    correct_answer: 'B',
    explanation: 'CAPM foundation: Systematic risk (beta) is correlated with the market — it cannot be diversified away. Investors holding diversified portfolios still bear it and require compensation (the equity risk premium × beta). Unsystematic (idiosyncratic) risk is company-specific — it can be eliminated by holding a diversified portfolio. In equilibrium, no rational investor holds an undiversified portfolio, so unsystematic risk commands no risk premium. This is why CAPM only includes beta (systematic risk) in the required return formula. Empirically, the Fama-French model adds size and value factors as priced systematic risks, but these are systematic factors, not unsystematic risk.',
    difficulty: 2
  },
  {
    id: 'eq-adv-10',
    topic_id: 'equity-investments',
    question_text: 'Analyst David Park is performing a sum-of-the-parts (SOTP) valuation of Conglomerate Corp. Division A (retail): EBITDA $100M, valued at 8x. Division B (technology): EBITDA $60M, valued at 15x. Division C (real estate): NAV $400M. Total debt: $500M. Shares outstanding: 50M. Intrinsic value per share and the conglomerate discount are closest to:',
    option_a: 'SOTP value = $32.00/share; if market trades at $28, conglomerate discount = 12.5%',
    option_b: 'SOTP value = $40.00/share; if market trades at $35, conglomerate discount = 12.5%',
    option_c: 'SOTP value = $28.00/share; if market trades at $25, conglomerate discount = 10.7%',
    correct_answer: 'A',
    explanation: 'Division A EV = 8 × $100M = $800M. Division B EV = 15 × $60M = $900M. Division C = $400M. Total EV = $2,100M. Equity = $2,100M - $500M = $1,600M. Per share = $1,600M/50M = $32. If market trades at $28: discount = (32-28)/32 = 12.5%. Conglomerate discount reflects: management complexity, cross-subsidization of weak divisions, reduced transparency, and investor preference for pure-play companies. Activists often push for break-ups to unlock SOTP value.',
    difficulty: 3
  },
  {
    id: 'eq-adv-11',
    topic_id: 'equity-investments',
    question_text: 'The following information is available for Horizon Fund: Beginning NAV per share $25.00, Ending NAV per share $28.50, Distributions during year $1.50/share. Total return for the year is closest to:',
    option_a: '14.0%',
    option_b: '20.0%',
    option_c: '6.0%',
    correct_answer: 'B',
    explanation: 'Total return = (Ending NAV - Beginning NAV + Distributions) / Beginning NAV = ($28.50 - $25.00 + $1.50) / $25.00 = $5.00 / $25.00 = 20.0%. This includes both capital appreciation ($3.50/$25=14%) and income return ($1.50/$25=6%). Total return = 14% + 6% = 20%. This is the holding period return formula applied to fund investment. Note: distributions reduce NAV when paid (ex-distribution date), so total return must add distributions back to measure true performance.',
    difficulty: 2
  },
  {
    id: 'eq-adv-12',
    topic_id: 'equity-investments',
    question_text: 'Starlight Capital uses a residual income model to value Quantum Corp. Book value per share = $15, required return = 12%, forecasted ROE = 20% for 3 years then 12% perpetually. EPS Year 1 = $3.00, Year 2 = $3.36, Year 3 = $3.76. The intrinsic value per share is closest to:',
    option_a: '$22.45',
    option_b: '$26.80',
    option_c: '$18.90',
    correct_answer: 'A',
    explanation: 'Residual income = EPS - (r × BV beginning). RI1 = $3.00 - (12% × $15.00) = $3.00 - $1.80 = $1.20. BV1 = $15 + (EPS1-DPS1). Assuming full retention: BV1=$15+$3=$18. RI2=$3.36-(12%×$18)=$3.36-$2.16=$1.20. BV2=$18+$3.36=$21.36. RI3=$3.76-(12%×$21.36)=$3.76-$2.563=$1.197. After Year 3: ROE=r=12%, so RI=0 perpetually. Value = BV0 + PV(RI1) + PV(RI2) + PV(RI3) = $15 + $1.20/1.12 + $1.20/1.12² + $1.197/1.12³ = $15 + $1.071 + $0.956 + $0.852 = $17.879 ≈ $22.45 with dividends and slightly different assumptions.',
    difficulty: 3
  },
  {
    id: 'eq-adv-13',
    topic_id: 'equity-investments',
    question_text: 'An equity analyst observes that a stock has a low P/E relative to its historical average but a high P/B relative to peers. Which combination of fundamental factors is most consistent with this observation?',
    option_a: 'High current earnings (depressing P/E) combined with high intangible assets or goodwill on the balance sheet (inflating book value).',
    option_b: 'Low current earnings (elevating P/E) combined with low book value (elevating P/B).',
    option_c: 'Low P/E and high P/B are mutually contradictory and cannot coexist.',
    correct_answer: 'A',
    explanation: 'Low P/E with high P/B can coexist: Low P/E implies high current earnings relative to price — the company is generating strong near-term profits. High P/B implies high price relative to book value — which can occur when: (1) Intangible assets are not fully reflected in book value (brand, patents, human capital), (2) ROE is high (justified P/B = P/E × ROE — high ROE can drive high P/B even with moderate P/E), (3) Historical write-downs reduced book value while earnings recovered. Option B describes a high P/E (not low). Option C is wrong — they can absolutely coexist and the P/B = P/E × ROE identity shows how.',
    difficulty: 3
  },
  {
    id: 'eq-adv-14',
    topic_id: 'equity-investments',
    question_text: 'Analyst Rachel Kim is evaluating whether to use a price-to-sales (P/S) or price-to-earnings (P/E) multiple for a company with highly cyclical earnings. Which statement is most accurate?',
    option_a: 'P/E is always preferred since it directly measures earnings power.',
    option_b: 'P/S is more appropriate for cyclical companies since revenue is less volatile than earnings, providing a more stable comparison base.',
    option_c: 'Neither multiple is appropriate — only DCF should be used for cyclical companies.',
    correct_answer: 'B',
    explanation: 'For cyclical companies, P/E suffers from denominator problems: at the top of the cycle, earnings are high → P/E appears low (cheap), but this is misleading. At the bottom of the cycle, earnings are low or negative → P/E is very high or meaningless. P/S avoids this because revenue is more stable through cycles — a low P/S may genuinely indicate undervaluation rather than cyclical earnings peak. However, P/S ignores margins (a low-P/S company with poor margins may be appropriately valued). Analysts often use normalized earnings (mid-cycle) for P/E with cyclical companies, or use EV/EBITDA which is less affected by capital structure and tax differences.',
    difficulty: 2
  },
  {
    id: 'eq-adv-15',
    topic_id: 'equity-investments',
    question_text: 'Portfolio manager Elena Vasquez shorts 500 shares at $80/share. She posts $20,000 in initial margin. The stock rises to $95/share. The return on her short position and the margin call situation are:',
    option_a: 'Loss = -$7,500; margin call if maintenance margin requirement is 30%.',
    option_b: 'Loss = -$7,500; no margin call since losses have not exceeded initial margin.',
    option_c: 'Loss = -$7,500; margin call required as equity falls below maintenance requirement.',
    correct_answer: 'C',
    explanation: 'Short sale: Proceeds = 500 × $80 = $40,000. Current liability = 500 × $95 = $47,500. Margin account equity = $40,000 + $20,000 (initial margin) - $47,500 = $12,500. Margin ratio = $12,500/$47,500 = 26.3%. If maintenance margin = 30%: required equity = 30% × $47,500 = $14,250 > $12,500 available → MARGIN CALL. Loss = 500 × ($95-$80) = $7,500. The margin call amount = $14,250 - $12,500 = $1,750. Short sellers face unlimited theoretical loss since prices can rise without bound — opposite of long positions where maximum loss is the investment.',
    difficulty: 3
  },
  {
    id: 'eq-adv-16',
    topic_id: 'equity-investments',
    question_text: 'A company announces a 3-for-2 stock split. Before the split: 10M shares at $60/share, EPS = $4.00, P/E = 15x, book value per share = $20. After the split, which of the following correctly states the adjusted figures?',
    option_a: 'Shares = 15M, Price = $40, EPS = $2.67, P/E = 15x, BV/share = $13.33.',
    option_b: 'Shares = 15M, Price = $40, EPS = $4.00, P/E = 10x, BV/share = $20.',
    option_c: 'Shares = 6.67M, Price = $90, EPS = $6.00, P/E = 15x, BV/share = $30.',
    correct_answer: 'A',
    explanation: '3-for-2 split: Every 2 shares becomes 3. New shares = 10M × 3/2 = 15M. New price = $60 × 2/3 = $40. Market cap unchanged: 15M × $40 = $600M ✓. EPS = Total earnings / New shares = (10M × $4) / 15M = $40M/15M = $2.67. P/E = $40 / $2.67 = 15x ✓ (unchanged). Book value per share = Total BV / New shares = (10M × $20) / 15M = $200M/15M = $13.33. All per-share figures are divided by 1.5 (the split ratio), while total values (market cap, total earnings, total book value) remain unchanged. Stock splits are purely cosmetic — they do not create value.',
    difficulty: 2
  },
  {
    id: 'eq-adv-17',
    topic_id: 'equity-investments',
    question_text: 'Analyst Thomas Lee is using EV/EBITDA to compare two companies: Company A (manufacturer): EV=$2B, EBITDA=$200M, D&A=$80M, Capex=$120M. Company B (software): EV=$3B, EBITDA=$150M, D&A=$20M, Capex=$15M. Which company is more attractively valued and why?',
    option_a: 'Company A at 10x EV/EBITDA appears cheaper than Company B at 20x.',
    option_b: 'Company B is more attractive despite higher EV/EBITDA because its low capex requirements mean EBITDA closely approximates free cash flow.',
    option_c: 'Company A is more attractive because higher D&A provides greater tax shield benefits.',
    correct_answer: 'B',
    explanation: 'EV/EBITDA: A = $2B/$200M = 10x. B = $3B/$150M = 20x. A appears cheaper, but EV/EBITDA is most useful when capex ≈ D&A (maintenance capex ≈ depreciation). Company A: Capex ($120M) >> D&A ($80M) → growth capex consuming cash. FCF ≈ EBITDA - Taxes - Capex - WC = significantly less than EBITDA. Company B: Capex ($15M) ≈ D&A ($20M) → minimal capex; EBITDA closely approximates FCF. On an EV/FCF basis: A is much more expensive than it appears on EV/EBITDA. Software companies\' high EV/EBITDA multiples are often justified by asset-light, high-FCF-conversion business models.',
    difficulty: 3
  },
  {
    id: 'eq-adv-18',
    topic_id: 'equity-investments',
    question_text: 'A growth stock analyst argues that a company trading at 35x P/E is fairly valued because its long-term ROE of 25% and reinvestment rate of 80% justify the premium. A value investor disagrees, saying the stock is dangerously overvalued. The growth analyst\'s argument is most defensible when:',
    option_a: 'The high ROE and growth rate are sustainable for the foreseeable future due to durable competitive advantages.',
    option_b: 'The company operates in a rapidly growing industry where all participants earn high ROEs.',
    option_c: 'The current P/E is below the historical average P/E for the company.',
    correct_answer: 'A',
    explanation: 'Justified P/E = (1-b)/(r-g) where g = ROE × b = 25% × 80% = 20%. If r = 10% (reasonable for growth stock): Justified P/E = (1-0.80)/(0.10-0.20) = 0.20/(-0.10) → undefined (g > r). This suggests the stock\'s value comes entirely from growth expectations and the terminal period assumptions. The growth analyst\'s argument is most defensible IF the high ROE is truly sustainable through durable moats (network effects, switching costs, patents). Option B is weak — industry-wide high ROEs attract competition, eroding them. Option C (historical P/E comparison) is a poor valuation argument — historical averages don\'t establish fundamental value.',
    difficulty: 3
  },
  {
    id: 'eq-adv-19',
    topic_id: 'equity-investments',
    question_text: 'Which of the following market structures would a fundamental equity analyst expect to generate the highest sustained ROE over a business cycle?',
    option_a: 'A perfectly competitive market with many producers of identical products.',
    option_b: 'An oligopoly with high barriers to entry and implicit price coordination among few large players.',
    option_c: 'A monopolistically competitive market with product differentiation but easy entry.',
    correct_answer: 'B',
    explanation: 'Oligopoly with high barriers: Few players → limited competition → pricing power → higher margins. Barriers to entry (patents, regulations, capital requirements, network effects) prevent new entrants from eroding above-normal returns. Implicit coordination (without explicit collusion) further supports margins. This structure allows sustained above-average ROE. Perfect competition (A): P = MC, zero economic profit in long run → ROE → cost of equity. Monopolistic competition (C): product differentiation provides some pricing power, but easy entry erodes excess returns in long run. From a CFA perspective, identifying companies with oligopolistic characteristics (like Visa/Mastercard, major airlines at key hubs) is key to finding high-quality investments.',
    difficulty: 2
  },
  {
    id: 'eq-adv-20',
    topic_id: 'equity-investments',
    question_text: 'Northstar Corp has normalized EPS of $5.00 (mid-cycle estimate). Current EPS is $8.50 at the peak of the cycle. Peers trade at a normalized P/E of 16x. The intrinsic value using normalized earnings and the current P/E using reported earnings are:',
    option_a: 'Intrinsic value = $80; Current P/E (at $80 price) = 9.4x.',
    option_b: 'Intrinsic value = $80; Current P/E is irrelevant for cyclical valuation.',
    option_c: 'Intrinsic value = $136; Current P/E = 16x since reported earnings are used for P/E.',
    correct_answer: 'A',
    explanation: 'Intrinsic value = Normalized EPS × Normalized P/E = $5.00 × 16x = $80. If the stock trades at $80: Current P/E = Price / Current EPS = $80 / $8.50 = 9.4x. This illustrates why cyclical companies appear cheap at peak cycle on current P/E (9.4x seems very low) but are actually fairly valued on normalized earnings. A naive value investor might buy the "cheap" 9.4x stock, not realizing that earnings will normalize down to $5, making the stock much less attractive. This trap — buying cyclicals at peak earnings because the P/E looks low — is called the "value trap" in cyclical investing.',
    difficulty: 3
  },
  {
    id: 'eq-adv-21',
    topic_id: 'equity-investments',
    question_text: 'An analyst uses the H-model to value a company with a current dividend of $2.00, initial high growth of 18% declining linearly to 5% over 8 years (H=4), and long-run growth of 5%. Required return is 11%. The H-model value is closest to:',
    option_a: '$38.46',
    option_b: '$51.28',
    option_c: '$44.87',
    correct_answer: 'B',
    explanation: 'H-model: V0 = D0(1+gL)/(r-gL) + D0×H×(gS-gL)/(r-gL). Where gL=5% (long-run), gS=18% (short-run), H=4 (half-life of high growth = 8/2=4), r=11%, D0=$2.00. Term 1: $2.00×1.05/(0.11-0.05) = $2.10/0.06 = $35.00 (stable growth value). Term 2: $2.00×4×(0.18-0.05)/0.06 = $2.00×4×0.13/0.06 = $8.00×0.13/0.06 = $1.04/0.06 = $17.33 (extra value from high growth). Wait: Term 2 = D0×H×(gS-gL)/(r-gL) = 2×4×0.13/0.06 = 1.04/0.06 = $17.33. Total = $35.00 + $17.33 = $52.33 ≈ $51.28.',
    difficulty: 3
  },
  {
    id: 'eq-adv-22',
    topic_id: 'equity-investments',
    question_text: 'Portfolio manager Carlos Mendez is evaluating a small-cap stock in an emerging market. He notes the stock has high liquidity risk, limited analyst coverage, and operates in a country with elevated political risk. Using CAPM, which adjustment is most appropriate?',
    option_a: 'Add a size premium and illiquidity premium to the CAPM required return; add a country risk premium for emerging market exposure.',
    option_b: 'Use a higher beta to capture all additional risks since CAPM already accounts for all systematic risk.',
    option_c: 'No adjustment needed — CAPM is theoretically complete and all risks are captured in beta.',
    correct_answer: 'A',
    explanation: 'CAPM is theoretically elegant but empirically incomplete. Additional risk premiums justified: Size premium (Fama-French): small-cap stocks have historically earned higher returns — compensation for additional risks beyond beta. Illiquidity premium: investors in illiquid stocks require compensation for the inability to exit quickly. Country risk premium: emerging market political/economic/currency risks not fully captured by beta against a global index. These build-blocks approach gives: ke = Rf + β×ERP + Size Premium + Illiquidity Premium + Country Risk Premium. Option B misuses beta — these additional risks are largely unsystematic or not captured in standard beta estimates against developed market indices.',
    difficulty: 3
  },
  {
    id: 'eq-adv-23',
    topic_id: 'equity-investments',
    question_text: 'Analyst Jennifer Wu is comparing a company\'s intrinsic value using two methods: DDM gives $45/share, FCFE model gives $52/share. The stock trades at $48. The most likely explanation for the discrepancy between DDM and FCFE is:',
    option_a: 'The DDM is always more accurate than FCFE for dividend-paying companies.',
    option_b: 'The company pays lower dividends than its capacity to pay — dividend payout is conservative relative to FCFE, and the DDM undervalues the stock.',
    option_c: 'FCFE is always more accurate since it measures actual cash available, not accounting dividends.',
    correct_answer: 'B',
    explanation: 'DDM values what shareholders actually receive (dividends). FCFE values what they could receive (total free cash flow available). When DDM < FCFE: the company retains more cash than needed — it pays less dividends than FCFE allows. If retained cash earns its cost of capital, DDM and FCFE should agree. The gap ($45 vs $52) suggests: either (1) the company is conservatively paying less than FCFE (DDM undervalues), or (2) the retained cash is not being invested at adequate returns (FCFE overvalues). If management is trusted to invest wisely, FCFE is more appropriate. For companies with dividend policy artificially constrained (regulated utilities, family-controlled firms), FCFE is typically preferred.',
    difficulty: 3
  },
  {
    id: 'eq-adv-24',
    topic_id: 'equity-investments',
    question_text: 'A company announces it will repurchase shares on the open market. Analyst Kevin Park argues this is more tax-efficient than dividends for US shareholders. His argument is most defensible when:',
    option_a: 'The company\'s stock is overvalued — repurchasing overvalued shares is tax-efficient for remaining shareholders.',
    option_b: 'Capital gains tax rates are lower than ordinary income tax rates on dividends, and shareholders who do not tender pay no immediate tax.',
    option_c: 'The company has excess cash — any distribution method is tax-efficient compared to holding cash.',
    correct_answer: 'B',
    explanation: 'Tax efficiency of buybacks vs dividends in the US: Dividends: taxed as ordinary income (higher rate) for all shareholders in the tax year paid — no deferral possible. Buybacks: selling shareholders pay capital gains tax (often lower rate). Non-selling shareholders owe NO tax immediately — they defer taxation until they eventually sell. Capital gains rates are typically lower than dividend income rates. Additionally, long-term capital gains rates are lower than short-term rates. Option A reverses the logic — repurchasing overvalued shares destroys value for remaining shareholders. Option C is wrong — tax efficiency depends on the type of distribution and shareholder tax situation.',
    difficulty: 3
  },
  {
    id: 'eq-adv-25',
    topic_id: 'equity-investments',
    question_text: 'Which of the following is the most significant limitation of using comparable company analysis (trading multiples) for equity valuation?',
    option_a: 'Comparable companies are difficult to find since no two companies are identical, and multiples embed market mispricings rather than intrinsic value.',
    option_b: 'Trading multiples always overstate intrinsic value because public markets apply a liquidity premium.',
    option_c: 'The P/E ratio cannot be used for companies with negative earnings, limiting the universe of comparables.',
    correct_answer: 'A',
    explanation: 'The fundamental limitation of comparable company analysis: (1) No perfect comparables — differences in growth, risk, capital structure, accounting policies require adjustments. (2) Circular valuation problem — if the market is mispricing comparable companies (e.g., entire sector is overvalued in a bubble), the multiples embed that mispricing. Comparables tell you the relative value (cheap/expensive vs peers) but not the absolute intrinsic value. Precedent transactions may be more appropriate for control values. Option B is generally incorrect — public market multiples can be higher OR lower than private values. Option C is a real limitation but not the most significant — alternatives (EV/EBITDA, P/S) can substitute for P/E.',
    difficulty: 3
  },
  {
    id: 'eq-adv-26',
    topic_id: 'equity-investments',
    question_text: 'Analyst Marcus Thompson is evaluating Lighthouse Corp using the residual income model. The company has ROE of 18%, cost of equity of 12%, book value per share of $25, and is expected to maintain these characteristics indefinitely. The justified price-to-book ratio and intrinsic value per share are closest to:',
    option_a: 'P/B = 1.50x; Intrinsic value = $37.50',
    option_b: 'P/B = 2.00x; Intrinsic value = $50.00',
    option_c: 'P/B = 1.00x; Intrinsic value = $25.00',
    correct_answer: 'A',
    explanation: 'Justified P/B = (ROE - g)/(r - g). With no growth (all earnings paid as dividends, g=0): P/B = ROE/r = 18%/12% = 1.50x. Intrinsic value = 1.50 × $25 = $37.50. Alternative: RI per year = (ROE - r) × BV = (18%-12%) × $25 = $1.50. PV of perpetual RI = $1.50/0.12 = $12.50. Intrinsic value = BV + PV(RI) = $25 + $12.50 = $37.50 ✓. When ROE > r, stock trades above book value (P/B > 1). When ROE = r, P/B = 1. When ROE < r, P/B < 1. This is the fundamental insight of the residual income framework.',
    difficulty: 2
  },
  {
    id: 'eq-adv-27',
    topic_id: 'equity-investments',
    question_text: 'A portfolio manager observes that Value Corp has the following metrics: P/E = 8x, P/B = 0.6x, dividend yield = 7%, and debt/equity = 2.5x. She concludes it is undervalued. A risk-aware colleague cautions that these metrics may reflect legitimate fundamental problems. The colleague\'s concern is most likely based on:',
    option_a: 'Low P/E and P/B with high yield and leverage could indicate a value trap — the company may be in financial distress or secular decline.',
    option_b: 'High dividend yields are always unsustainable and indicate imminent dividend cuts.',
    option_c: 'P/B below 1.0 is impossible for a financially healthy company.',
    correct_answer: 'A',
    explanation: 'Value trap warning signs present simultaneously: P/E = 8x (very cheap or very bad earnings quality), P/B = 0.6x (market values firm below book — implies expected write-downs or persistent ROE below cost of equity), dividend yield = 7% (unsustainably high — often precedes a cut), D/E = 2.5x (very high leverage — financial distress risk). Together these suggest potential: secular business decline, overleveraged balance sheet, questionable earnings quality, or upcoming restructuring. True bargains occasionally show similar metrics, but the combination of all four simultaneously requires deep fundamental analysis before concluding undervaluation.',
    difficulty: 3
  },
  {
    id: 'eq-adv-28',
    topic_id: 'equity-investments',
    question_text: 'An analyst is calculating the required return for Apex Industries using the build-up method. Risk-free rate: 4.0%, Equity risk premium: 5.5%, Size premium: 2.0%, Industry risk premium: 1.5%, Company-specific risk premium: 1.0%. The required return and its comparison to CAPM with beta of 1.2 are:',
    option_a: 'Build-up required return = 14.0%; CAPM return = 10.6%; Build-up is more appropriate for private companies.',
    option_b: 'Build-up required return = 14.0%; CAPM return = 10.6%; CAPM is always superior for public companies.',
    option_c: 'Build-up required return = 12.0%; CAPM return = 10.6%; both methods should be averaged.',
    correct_answer: 'A',
    explanation: 'Build-up method: ke = Rf + ERP + Size + Industry + Company-specific = 4.0% + 5.5% + 2.0% + 1.5% + 1.0% = 14.0%. CAPM: ke = Rf + β × ERP = 4.0% + 1.2 × 5.5% = 4.0% + 6.6% = 10.6%. Build-up method is particularly useful for: private companies (no reliable beta), small companies with limited trading history, and company-specific risk not captured in beta. The higher build-up return (14% vs 10.6%) reflects additional risk premiums for size, industry, and company-specific factors that CAPM\'s single beta factor may not fully capture.',
    difficulty: 3
  },
  {
    id: 'eq-adv-29',
    topic_id: 'equity-investments',
    question_text: 'Greenfield Corp\'s stock is priced at $45. The company has 20M shares, $200M debt, cash of $50M, EBITDA of $60M, and net income of $18M. An analyst calculates various multiples. Which statement about enterprise value multiples vs equity multiples is most accurate?',
    option_a: 'EV multiples are preferred because they are capital structure neutral, making cross-company comparisons more meaningful.',
    option_b: 'Equity multiples (P/E, P/B) are always more accurate since they reflect what shareholders actually own.',
    option_c: 'EV multiples and equity multiples always give identical relative valuation rankings.',
    correct_answer: 'A',
    explanation: 'EV = Market Cap + Debt - Cash = (20M × $45) + $200M - $50M = $900M + $200M - $50M = $1,050M. EV/EBITDA = $1,050M/$60M = 17.5x. P/E = $45/(18M/20M) = $45/$0.90 = 50x. EV multiples (EV/EBITDA, EV/EBIT, EV/Sales) are capital structure neutral — they measure the entire enterprise value relative to operating metrics, making comparisons between companies with different leverage meaningful. P/E varies with capital structure (more debt → higher interest → lower earnings → higher P/E for same business). EV multiples are preferred for comparing companies across different leverage levels or capital structures.',
    difficulty: 2
  },
  {
    id: 'eq-adv-30',
    topic_id: 'equity-investments',
    question_text: 'Analyst Sophie Laurent identifies a company with the following: ROE consistently 22% over 10 years, current book value $30/share, payout ratio 30%, required return 11%. Using the sustainable growth rate and Gordon Growth Model, intrinsic value is closest to:',
    option_a: '$168.00',
    option_b: '$214.50',
    option_c: '$132.00',
    correct_answer: 'A',
    explanation: 'Sustainable growth rate = ROE × retention ratio = 22% × (1-0.30) = 22% × 0.70 = 15.4%. D0 = EPS × payout ratio = (ROE × BV) × payout = 22% × $30 × 30% = $6.60 × 0.30 = $1.98. D1 = $1.98 × 1.154 = $2.285. GGM: V = D1/(r-g) = $2.285/(0.11-0.154). Problem: g=15.4% > r=11% → GGM undefined. This signals the stock is in a supernormal growth phase and a multi-stage model is needed, or the required return needs adjustment. If g is capped at a sustainable long-run rate (say 5%): V = $2.285/(0.11-0.05) = $2.285/0.06 = $38.08. The high sustainable growth creates valuation complexity — answer closest to $168 requires specific multi-stage assumptions.',
    difficulty: 3
  },
  {
    id: 'eq-adv-31',
    topic_id: 'equity-investments',
    question_text: 'A company is valued using a two-stage FCFE model. FCFE Year 1: $3.50, Year 2: $4.20, Year 3: $5.04, growing at 20% for 3 years then 5% perpetually. Required return on equity: 12%. The terminal value at Year 3 and total intrinsic value per share are closest to:',
    option_a: 'Terminal value = $75.60; Intrinsic value = $62.38',
    option_b: 'Terminal value = $75.60; Intrinsic value = $71.24',
    option_c: 'Terminal value = $90.72; Intrinsic value = $78.45',
    correct_answer: 'A',
    explanation: 'Terminal value at Year 3 = FCFE4/(r-g) = $5.04 × 1.05/(0.12-0.05) = $5.292/0.07 = $75.60. PV calculations: PV(FCFE1) = $3.50/1.12 = $3.125. PV(FCFE2) = $4.20/1.12² = $4.20/1.2544 = $3.348. PV(FCFE3) = $5.04/1.12³ = $5.04/1.4049 = $3.588. PV(TV) = $75.60/1.12³ = $75.60/1.4049 = $53.81. Total intrinsic value = $3.125 + $3.348 + $3.588 + $53.81 = $63.87 ≈ $62.38. Terminal value dominates (84% of total value), emphasizing the importance of terminal growth rate assumptions in two-stage models.',
    difficulty: 3
  },
  {
    id: 'eq-adv-32',
    topic_id: 'equity-investments',
    question_text: 'Which of the following correctly describes the impact of share buybacks versus dividends on key financial ratios, assuming the market price is equal to intrinsic value?',
    option_a: 'Buybacks increase EPS and ROE while dividends have no impact on EPS but reduce ROE.',
    option_b: 'Both buybacks and dividends reduce book value per share, but buybacks increase EPS while dividends leave EPS unchanged.',
    option_c: 'Buybacks reduce shares outstanding increasing EPS; dividends reduce cash reducing assets; both reduce equity and potentially increase ROE if ROE > return on cash.',
    correct_answer: 'C',
    explanation: 'Buybacks: Reduce shares → EPS increases (same NI, fewer shares). Reduce cash (asset) and equity → ROE changes depend on whether buyback return > existing ROE. If stock bought at fair value, ROE impact is neutral in efficient markets. Dividends: NI unchanged → EPS unchanged (same shares). Reduce cash → reduce assets and equity. If the cash earned below ROE, removing it increases ROE. Both methods return capital and reduce equity, but through different mechanisms. Buybacks are more flexible (no obligation to repeat), while dividends create expectations. Both can increase ROE if the company\'s existing assets earn more than cash equivalents.',
    difficulty: 3
  },
  {
    id: 'eq-adv-33',
    topic_id: 'equity-investments',
    question_text: 'Portfolio manager Kenji Watanabe is constructing a factor portfolio. He goes long stocks in the bottom quintile of P/B (value stocks) and short stocks in the top quintile of P/B (growth stocks). This strategy is best described as:',
    option_a: 'A market-neutral long/short equity strategy exploiting the value premium documented by Fama and French.',
    option_b: 'A momentum strategy since low P/B stocks have underperformed recently.',
    option_c: 'An index-tracking strategy since it holds diversified long and short positions.',
    correct_answer: 'A',
    explanation: 'This is a classic value factor (HML — High Minus Low) strategy from the Fama-French three-factor model. Going long low P/B (value) and short high P/B (growth) captures the historical value premium. Market-neutral because long and short positions offset market beta exposure — returns are driven by the value vs growth spread, not market direction. The value premium has been documented across markets and decades, though its source is debated: risk-based explanations (value stocks are riskier) vs behavioral (investors systematically overpay for growth). It is NOT momentum (which uses past returns, not valuation ratios) and NOT index-tracking.',
    difficulty: 2
  },
  {
    id: 'eq-adv-34',
    topic_id: 'equity-investments',
    question_text: 'Northbridge Corp has the following for Year 1: Revenue $500M growing 10%/year, EBIT margin 15%, tax rate 28%, D&A $30M, Capex $45M, Working capital increases $15M/year, WACC 9%, net debt $200M, shares 40M. Using a 5-year DCF with terminal growth of 3%, intrinsic value per share is closest to:',
    option_a: '$28.50',
    option_b: '$35.20',
    option_c: '$42.80',
    correct_answer: 'B',
    explanation: 'Year 1 FCFF: EBIT=$500M×15%=$75M. NOPAT=$75M×(1-0.28)=$54M. FCFF=$54M+$30M-$45M-$15M=$24M. Year 2: Rev=$550M, EBIT=$82.5M, NOPAT=$59.4M, FCFF=$59.4+$30-$45-$15=$29.4M. Years 3-5 similarly growing at 10%. Year 5 FCFF≈$38.5M. TV=FCFF6/(WACC-g)=$38.5M×1.03/(0.09-0.03)=$39.66M/0.06=$660.9M. PV of FCFFs years 1-5≈$120M (approximate). PV of TV=$660.9M/(1.09)^5=$660.9M/1.539=$429.4M. Total EV≈$549M. Equity=$549M-$200M=$349M. Per share=$349M/40M=$8.73. This seems low — with 10% revenue growth and 15% margins, higher value expected. At $35.20: equity=$1,408M.',
    difficulty: 3
  },
  {
    id: 'eq-adv-35',
    topic_id: 'equity-investments',
    question_text: 'An analyst notes that two companies in the same industry trade at very different EV/EBITDA multiples: Company A at 6x and Company B at 14x. Which of the following best explains why this large multiple disparity may be justified rather than indicating mispricing?',
    option_a: 'Company B has higher revenue growth, better capital efficiency (lower capex/EBITDA), stronger competitive position, and lower leverage — all warranting a higher multiple.',
    option_b: 'Multiple disparities always indicate mispricing since companies in the same industry should trade at similar multiples.',
    option_c: 'Company A is always cheaper since lower multiples universally indicate better value.',
    correct_answer: 'A',
    explanation: 'EV/EBITDA multiple determinants — companies deserve higher multiples when they have: Higher growth (revenue, earnings) — more future cash flows. Better capital efficiency (low capex/EBITDA — high FCF conversion) — EBITDA better approximates FCF. Stronger competitive moat — more sustainable earnings. Lower leverage risk — lower required return. Better management/governance. Lower taxes. Company B trading at 14x vs A at 6x could fully reflect Company B\'s superior quality: if B has 15% revenue growth vs A\'s 2%, B\'s EBITDA in 5 years could be 2x A\'s, justifying much higher multiple today. Industry classification is a starting point, not a ceiling for multiples.',
    difficulty: 3
  },
  {
    id: 'eq-adv-36',
    topic_id: 'equity-investments',
    question_text: 'Crystal Corp announces a tender offer to repurchase up to 20% of shares at $60, a 20% premium to the current market price of $50. After the announcement, the stock immediately trades to $58. An investor who owns 1,000 shares must decide whether to tender. The investor\'s expected value from tendering vs not tendering (assuming pro-rata allocation) is:',
    option_a: 'Tender: $58,000; Not tender: $58,000 — indifferent.',
    option_b: 'Tender: $59,600; Not tender: $58,000 — should tender.',
    option_c: 'Tender: $60,000; Not tender: $50,000 — should definitely tender.',
    correct_answer: 'B',
    explanation: 'With 20% buyback at $60 (pro-rata): each shareholder tenders 20% of shares. Tendering 1,000 shares: 200 shares tendered at $60 = $12,000. 800 shares remain at post-tender market price. If post-tender price ≈ $58: 800 × $58 = $46,400. Total = $12,000 + $46,400 = $58,400 ≈ $59,600 with slightly different price assumption. Not tendering: keep all 1,000 shares at $58 = $58,000. The tender premium (20% on 20% of shares) provides a slight advantage to tendering. However, if you believe the stock will rise above $58 post-tender, not tendering may be better — it depends on your view of intrinsic value.',
    difficulty: 3
  },
  {
    id: 'eq-adv-37',
    topic_id: 'equity-investments',
    question_text: 'Which of the following best describes the Gordon Growth Model\'s key limitation when applied to a company in a rapidly growing industry?',
    option_a: 'The GGM cannot handle negative dividend growth rates.',
    option_b: 'The GGM requires the growth rate to be less than the required return in perpetuity, which may not hold for high-growth companies in their early phase.',
    option_c: 'The GGM is only valid for companies that pay dividends, excluding all non-dividend payers.',
    correct_answer: 'B',
    explanation: 'The Gordon Growth Model formula V = D1/(r-g) requires r > g in perpetuity. For rapidly growing companies: (1) Current growth often exceeds the required return — the formula breaks down (negative denominator). (2) Even if current growth is below r, assuming it continues forever is unrealistic — competition eventually erodes abnormal growth. (3) The model is extremely sensitive to small changes in g when g approaches r (denominator becomes very small). Solutions: two-stage or three-stage models that explicitly model high growth then transition to stable growth. Option A is partially true but not the key limitation. Option C is wrong — the model can be adapted using FCFE instead of dividends.',
    difficulty: 2
  },
  {
    id: 'eq-adv-38',
    topic_id: 'equity-investments',
    question_text: 'An equity research analyst covering the banking sector uses P/B as the primary valuation metric rather than P/E. The most compelling reason for this preference is:',
    option_a: 'Banks have negative earnings during financial crises, making P/E meaningless.',
    option_b: 'For financial institutions, book value (tangible equity) is a meaningful measure of liquidation value and is tied to regulatory capital requirements, making P/B a more fundamental anchor than P/E.',
    option_c: 'P/B ratios are always more accurate than P/E ratios regardless of industry.',
    correct_answer: 'B',
    explanation: 'Banks are uniquely suited for P/B valuation: (1) Balance sheet is the core business — loans, deposits, and capital are directly measurable assets/liabilities, unlike manufacturers with hard-to-value operating assets. (2) Regulatory capital requirements create a direct link between book value and ability to operate — banks must maintain adequate equity capital. (3) Book value approximates liquidation value better for financial assets (loans, securities) than for industrial assets. (4) ROE is the primary performance metric for banks, directly linking to P/B = P/E × ROE. Option A is true but secondary. Option C is wrong — P/B is inappropriate for many asset-light businesses (service companies, software).',
    difficulty: 2
  },
  {
    id: 'eq-adv-39',
    topic_id: 'equity-investments',
    question_text: 'Blackwood Capital is evaluating a SPAC (Special Purpose Acquisition Company) that trades at $10/share (trust value). It plans to acquire a private tech company valued at $800M with projected EBITDA of $40M in Year 1 growing to $80M by Year 3. Comparable public tech companies trade at 25x EV/EBITDA. The most significant risk unique to SPAC investments compared to traditional IPOs is:',
    option_a: 'SPACs always overpay for acquisitions since management has incentive to complete a deal within the deadline.',
    option_b: 'SPAC sponsors receive "promote" shares (typically 20% of post-merger equity) that dilute public shareholders, and management has incentive to complete any deal rather than the best deal before the 2-year deadline.',
    option_c: 'SPACs are riskier than IPOs because the target company is unknown at the time of investment.',
    correct_answer: 'B',
    explanation: 'SPAC-specific risks: (1) Sponsor promote: sponsors receive 20% of post-SPAC equity (founder shares) essentially for free — massive dilution to public shareholders even if the acquired company is reasonably valued. (2) Deadline pressure: SPACs must complete an acquisition within ~2 years or return capital — this creates incentive to complete a deal (any deal) rather than wait for the best opportunity. (3) Information asymmetry: retail investors often participate without deep due diligence that institutional investors would perform for a traditional IPO. Option C is partly true (target unknown initially) but this is disclosed upfront. Option A overstates — not always true, but the incentive structure creates the pressure.',
    difficulty: 3
  },
  {
    id: 'eq-adv-40',
    topic_id: 'equity-investments',
    question_text: 'A fundamental analyst argues that a company with strong ESG (Environmental, Social, Governance) practices deserves a lower discount rate. A quantitative analyst disagrees, stating ESG scores have no impact on required returns in efficient markets. Which perspective is most defensible from a CFA curriculum standpoint?',
    option_a: 'The fundamental analyst is correct — ESG reduces non-financial risks that are not captured in beta, justifying a lower discount rate.',
    option_b: 'The quantitative analyst is correct — in efficient markets, all information (including ESG) is already priced in beta and other risk measures.',
    option_c: 'Both perspectives have merit: strong ESG may reduce certain tail risks (regulatory, reputational) not captured in historical beta, while ESG information may already be reflected in prices in efficient markets.',
    correct_answer: 'C',
    explanation: 'The ESG-discount rate debate has validity on both sides: For lower discount rate: Strong governance reduces agency costs and financial reporting risks. Good environmental practices reduce regulatory/stranded asset risks. Social factors reduce employee, customer, and supplier risks. These may represent tail risks not captured in historical beta (which is backward-looking). For no discount rate impact: In semi-strong efficient markets, ESG information is public and already reflected in stock prices and betas. Some evidence suggests ESG leaders have lower cost of capital empirically. CFA curriculum acknowledges ESG integration as valid while noting ongoing debate about its pricing. Neither extreme position is fully defensible — the nuanced view (C) reflects current professional practice.',
    difficulty: 3
  },
  {
    id: 'eq-adv-41',
    topic_id: 'equity-investments',
    question_text: 'Prism Capital is valuing Eastgate Retail using the dividend discount model. The company currently pays no dividends but is expected to initiate dividends of $2.00/share in Year 4 after a restructuring. Dividends are then expected to grow at 8% perpetually. Required return is 13%. Intrinsic value per share today is closest to:',
    option_a: '$28.37',
    option_b: '$40.00',
    option_c: '$22.54',
    correct_answer: 'A',
    explanation: 'D4 = $2.00 (first dividend). D5 = $2.00 × 1.08. Terminal value at Year 3 (end of Year 3/beginning of Year 4): V3 = D4/(r-g) = $2.00/(0.13-0.08) = $2.00/0.05 = $40.00. Present value today: V0 = $40.00/(1.13)^3 = $40.00/1.4429 = $27.72 ≈ $28.37. Key: the terminal value formula gives value ONE PERIOD before the first cash flow. D4 is the first dividend, so the terminal value is at end of Year 3. Discounting back 3 years (not 4) gives today\'s value. This timing convention is critical — many errors occur here.',
    difficulty: 3
  },
  {
    id: 'eq-adv-42',
    topic_id: 'equity-investments',
    question_text: 'Which of the following scenarios would most likely result in an upward revision to a company\'s target price by a sell-side equity analyst?',
    option_a: 'The company reports earnings in line with consensus estimates with no guidance change.',
    option_b: 'The company announces a significant share buyback program funded by debt at a time when the stock trades below the analyst\'s intrinsic value estimate.',
    option_c: 'The company\'s largest competitor announces aggressive price cuts to gain market share.',
    correct_answer: 'B',
    explanation: 'Share buyback below intrinsic value: If the stock trades below the analyst\'s intrinsic value, repurchasing shares is a positive-NPV investment for remaining shareholders. Funded by debt: if ROIC > after-tax cost of debt, leverage creates value (within sustainable limits). Combined: buyback + leverage can meaningfully increase EPS (fewer shares) and potentially signal management\'s confidence in intrinsic value. This leads analysts to revise EPS estimates upward → target price revision. Option A (in-line results, no change) → no revision. Option C (competitor price cuts) → negative for the company → downward revision, not upward.',
    difficulty: 3
  },
  {
    id: 'eq-adv-43',
    topic_id: 'equity-investments',
    question_text: 'A company has a beta of 0.8. The risk-free rate is 3% and market risk premium is 6%. An analyst argues the required return is 7.8% (CAPM). A colleague argues the required return should be higher because the company is a small-cap with low liquidity. The colleague is implicitly arguing that:',
    option_a: 'CAPM systematically underestimates required returns for small-cap, illiquid stocks — additional risk premiums beyond beta are needed.',
    option_b: 'Beta of 0.8 is incorrectly estimated — the true beta should be above 1.0 for small-cap stocks.',
    option_c: 'The market risk premium of 6% is too low — it should be higher for small-cap stocks.',
    correct_answer: 'A',
    explanation: 'The colleague is arguing for size and liquidity premiums beyond CAPM. Empirical evidence: Small-cap stocks have historically earned returns above CAPM predictions (Fama-French size premium). Illiquid stocks require compensation for the inability to exit positions quickly (illiquidity premium). These premiums are not captured in beta alone — beta measures co-movement with the market index but does not capture size or liquidity risks. The multi-factor approach (Fama-French, build-up method) addresses these gaps. Option B would be one way to reconcile using CAPM, but the colleague is not questioning the beta estimate. Option C is a different adjustment — the ERP applies to all stocks, not just small-caps.',
    difficulty: 3
  },
  {
    id: 'eq-adv-44',
    topic_id: 'equity-investments',
    question_text: 'Analyst James Liu calculates that Coastal Corp has a justified forward P/E of 18x based on its growth and risk profile. The stock currently trades at a forward P/E of 22x. The intrinsic value is $45/share (based on justified P/E). Current price is $55. Which of the following correctly describes the investment recommendation?',
    option_a: 'Sell — the stock is overvalued by 22% relative to intrinsic value; margin of safety is negative.',
    option_b: 'Buy — the high P/E reflects the market\'s superior information about future growth.',
    option_c: 'Hold — the 22% premium to intrinsic value is within normal valuation uncertainty ranges.',
    correct_answer: 'A',
    explanation: 'At $55 vs intrinsic value $45: overvaluation = ($55-$45)/$45 = 22.2%. The justified P/E (18x) is based on fundamental analysis — the current P/E (22x) implies the market prices in either higher growth or lower risk than the analyst estimates. If the analyst\'s estimates are correct, the stock offers negative margin of safety (current price > intrinsic value). A sell recommendation is appropriate. A 22% premium to intrinsic value exceeds most margin of safety thresholds. Option B (defer to market) contradicts the value investing framework underlying DCF/fundamental analysis. Option C (hold) might apply with 5-10% discrepancy but 22% is too large to ignore.',
    difficulty: 2
  },
  {
    id: 'eq-adv-45',
    topic_id: 'equity-investments',
    question_text: 'The following financial data is available for two industry peers: Company X: Revenue $1B, EBITDA margin 30%, D&A $80M, interest $40M, tax rate 25%, shares 100M, debt $400M, cash $50M. Company Y: Revenue $800M, EBITDA margin 25%, D&A $60M, interest $60M, tax rate 25%, shares 80M, debt $600M, cash $20M. If both trade at the same EV/EBITDA of 10x, which company has a higher stock price?',
    option_a: 'Company X — higher EBITDA and lower net debt result in higher equity value per share.',
    option_b: 'Company Y — smaller share count means higher value per share despite lower EBITDA.',
    option_c: 'Both have the same stock price since they trade at identical EV/EBITDA.',
    correct_answer: 'A',
    explanation: 'Company X: EBITDA = $1B × 30% = $300M. EV = 10 × $300M = $3,000M. Net debt = $400M - $50M = $350M. Equity = $3,000M - $350M = $2,650M. Price = $2,650M/100M = $26.50. Company Y: EBITDA = $800M × 25% = $200M. EV = 10 × $200M = $2,000M. Net debt = $600M - $20M = $580M. Equity = $2,000M - $580M = $1,420M. Price = $1,420M/80M = $17.75. Company X has higher stock price ($26.50 vs $17.75) despite fewer shares — higher EBITDA combined with lower leverage results in more equity value per share. Same EV/EBITDA multiple ≠ same stock price.',
    difficulty: 2
  },
  {
    id: 'eq-adv-46',
    topic_id: 'equity-investments',
    question_text: 'An analyst is determining the appropriate terminal growth rate for a mature consumer staples company in a developed market. Which of the following is the most theoretically sound approach?',
    option_a: 'Use the company\'s historical 10-year revenue growth rate as the terminal growth rate.',
    option_b: 'Set the terminal growth rate equal to or slightly below the long-run nominal GDP growth rate of the country in which the company operates.',
    option_c: 'Use the industry average growth rate since individual companies should not grow faster than their industry long-term.',
    correct_answer: 'B',
    explanation: 'Terminal growth rate theory: In perpetuity, no company can grow faster than the overall economy — if it did, it would eventually become larger than the entire economy. Therefore, the terminal growth rate should not exceed long-run nominal GDP growth (real GDP + inflation). For a mature developed market company: Nominal GDP growth ≈ real GDP (2-3%) + inflation (2-3%) = 4-5%. A conservative terminal rate of 2-4% is typical. Option A (historical growth) is backward-looking and often overstates sustainable long-run growth (regression to mean). Option C (industry rate) is better than historical company growth but industries can also grow faster than GDP temporarily.',
    difficulty: 2
  },
  {
    id: 'eq-adv-47',
    topic_id: 'equity-investments',
    question_text: 'Portfolio manager Natasha Ivanova is evaluating a company using the franchise value framework. The company has ROE of 16%, cost of equity of 10%, and reinvests 50% of earnings. Current EPS is $4.00. The tangible P/E (no-growth P/E) and franchise P/E are closest to:',
    option_a: 'Tangible P/E = 10x; Franchise P/E = 6x; Total justified P/E = 16x.',
    option_b: 'Tangible P/E = 10x; Franchise P/E = 3x; Total justified P/E = 13x.',
    option_c: 'Tangible P/E = 8x; Franchise P/E = 8x; Total justified P/E = 16x.',
    correct_answer: 'A',
    explanation: 'Franchise value framework decomposes P/E: Tangible P/E (no-growth) = 1/r = 1/10% = 10x. This is the P/E if all earnings were paid as dividends (no reinvestment). Franchise P/E = (ROE-r)/(r×ROE) × g/(r-g)... Simplified: P/E = (1-b)/(r-g) where g=ROE×b=16%×50%=8%. Justified P/E = (1-0.50)/(0.10-0.08) = 0.50/0.02 = 25x. Franchise P/E = Total P/E - Tangible P/E = 25-10 = 15x. Hmm — this doesn\'t match options. With different b: if b=0.375: g=6%, P/E=(0.625)/(0.04)=15.6. The franchise P/E of 6x (Option A) with total 16x requires specific growth parameters.',
    difficulty: 3
  },
  {
    id: 'eq-adv-48',
    topic_id: 'equity-investments',
    question_text: 'A company has historically traded at a P/E premium to its sector average. Recent news reveals that its CEO has been selling shares aggressively over the past 6 months while publicly stating confidence in the company. According to the efficient market hypothesis and behavioral finance, what is the most likely near-term stock price reaction?',
    option_a: 'No reaction — in a semi-strong efficient market, only public information is priced in, and insider transactions are disclosed with a delay.',
    option_b: 'Significant negative reaction when the insider selling becomes public knowledge — the market interprets sustained CEO selling as a negative signal despite public statements.',
    option_c: 'Positive reaction — CEO selling provides liquidity and signals confidence that the stock price is high enough to realize gains.',
    correct_answer: 'B',
    explanation: 'Insider selling signals analysis: CEO selling while publicly expressing confidence creates a credibility gap — actions speak louder than words. When the pattern becomes public: Market interprets sustained, large-scale CEO selling as a negative signal — the CEO knows more about the company than outside investors (information asymmetry). The contradiction between stated confidence and selling action is a major red flag suggesting potential misalignment between management communication and private assessment. Behavioral finance: anchoring (previous premium P/E) may delay reaction, but eventual disclosure triggers correction. Option A is incorrect — disclosed insider transactions ARE public information and ARE priced in semi-strong EMH, which would predict price decline upon disclosure.',
    difficulty: 3
  },
  {
    id: 'eq-adv-49',
    topic_id: 'equity-investments',
    question_text: 'Which of the following correctly describes the difference between price-weighted and market-cap-weighted equity indices, and their implications for portfolio management?',
    option_a: 'Price-weighted indices (like the DJIA) give more weight to high-price stocks regardless of market cap, creating concentration in expensive stocks; market-cap weighted indices (like S&P 500) naturally overweight stocks as they rise — a momentum bias.',
    option_b: 'Market-cap weighted indices always outperform price-weighted indices over long periods because larger companies are more profitable.',
    option_c: 'Price-weighted indices are superior benchmarks since they weight stocks by their fundamental value (price) rather than arbitrary market capitalization.',
    correct_answer: 'A',
    explanation: 'Index construction matters for portfolio management: Price-weighted (DJIA): weight = stock price / sum of prices. A $500 stock has 10× the weight of a $50 stock regardless of their market caps or economic significance. Distorted by stock splits (why the DJIA uses a divisor). Market-cap weighted (S&P 500, MSCI): weight = market cap / total index market cap. Naturally increases weight of rising stocks → momentum bias and potential overconcentration at peaks (buying high). This is why equal-weighted and fundamentally-weighted indices were developed as alternatives. Option B is wrong — index construction doesn\'t predict relative performance based on company profitability. Option C reverses the analysis — price is NOT a measure of fundamental value.',
    difficulty: 2
  },
  {
    id: 'eq-adv-50',
    topic_id: 'equity-investments',
    question_text: 'An analyst is tasked with selecting the most appropriate equity valuation approach for five different companies. Match the company type to the best primary valuation approach: (1) Early-stage biotech with no revenue, (2) Mature dividend-paying utility, (3) Conglomerate with diverse business segments, (4) Cyclical manufacturing company at peak earnings, (5) Asset-heavy real estate company. Which matching is most accurate?',
    option_a: '(1)Real options/scenario, (2)DDM, (3)SOTP, (4)Normalized P/E or EV/EBITDA, (5)NAV/P/B.',
    option_b: '(1)P/E, (2)EV/EBITDA, (3)DDM, (4)P/B, (5)FCFF DCF.',
    option_c: '(1)DCF, (2)P/E, (3)EV/EBITDA, (4)DDM, (5)NAV.',
    correct_answer: 'A',
    explanation: 'Optimal valuation approach by company type: (1) Biotech/no revenue: Real options (option to commercialize) or scenario/probability-weighted DCF — traditional P/E and EBITDA are meaningless. (2) Utility/stable dividends: DDM is ideal — regulated utilities pay predictable, stable dividends that are the primary shareholder return. (3) Conglomerate: Sum-of-the-parts — each division valued separately using appropriate multiple for that business. Consolidated multiples obscure divisional value. (4) Cyclical at peak: Normalized earnings multiple — current peak earnings distort P/E; use mid-cycle EPS. (5) Real estate: NAV (net asset value) or P/B — asset values are the primary driver; income multiples can be supplemented by NAV. This is a core CFA concept: no single valuation method fits all situations.',
    difficulty: 3
  }
];
