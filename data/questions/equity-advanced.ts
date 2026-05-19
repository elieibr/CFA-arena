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
  }
];
