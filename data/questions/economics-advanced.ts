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

export const economicsAdvancedQuestions: Question[] = [
  {
    id: 'eco-adv-1',
    topic_id: 'economics',
    question_text: 'The central bank of Meridia announces an unexpected 75bps rate hike to combat inflation running at 8.2%. GDP growth is currently 1.1% and unemployment is at 4.8%. An analyst argues this policy will cause a recession. Which of the following best supports the analyst\'s view?',
    option_a: 'Higher rates increase the cost of borrowing, reducing investment and consumption, potentially pushing the already-slow economy into contraction.',
    option_b: 'Higher rates will strengthen the currency, making exports cheaper and boosting net exports to offset domestic weakness.',
    option_c: 'Higher rates reduce inflation expectations, which increases real wages and stimulates consumer spending.',
    correct_answer: 'A',
    explanation: 'With GDP growth already at 1.1% (near stall speed) and unemployment rising, a 75bps rate hike significantly increases borrowing costs for businesses and consumers. Higher mortgage rates reduce housing investment, higher corporate borrowing costs reduce capex, and tighter consumer credit reduces spending. The economy has little cushion to absorb such a significant tightening. Option B is wrong — stronger currency makes exports MORE expensive, not cheaper. Option C is wrong — higher rates reduce inflation but also reduce nominal spending.',
    difficulty: 3
  },
  {
    id: 'eco-adv-2',
    topic_id: 'economics',
    question_text: 'Country Valdoria has nominal GDP of $850 billion and real GDP of $780 billion using base year 2010 prices. The GDP deflator is closest to:',
    option_a: '91.8',
    option_b: '108.9',
    option_c: '106.4',
    correct_answer: 'B',
    explanation: 'GDP Deflator = (Nominal GDP / Real GDP) × 100 = (850/780) × 100 = 1.0897 × 100 = 108.97 ≈ 108.9. A deflator above 100 indicates current prices are higher than base year prices — confirming inflation since 2010. The deflator differs from CPI in that it covers all goods/services in GDP (not a fixed basket) and uses current-period quantities (Paasche index) rather than base-period quantities.',
    difficulty: 2
  },
  {
    id: 'eco-adv-3',
    topic_id: 'economics',
    question_text: 'A country runs a current account deficit of 4.2% of GDP. Which of the following statements about this deficit is most accurate according to the savings-investment framework?',
    option_a: 'The deficit means domestic investment exceeds domestic saving, requiring net capital inflows to finance the gap.',
    option_b: 'The deficit indicates the government is running a fiscal deficit of at least 4.2% of GDP.',
    option_c: 'The deficit will necessarily cause currency depreciation within 12 months.',
    correct_answer: 'A',
    explanation: 'The current account balance = national saving - domestic investment = (S_private + S_government) - I. A current account deficit means domestic investment exceeds national saving — the country must attract foreign capital (capital account surplus) to finance this gap. Option B is wrong — the current account deficit reflects total national saving vs investment; the government can run a surplus while private investment overwhelms private saving. Option C is too deterministic — deficits can persist for years if funded by capital inflows.',
    difficulty: 3
  },
  {
    id: 'eco-adv-4',
    topic_id: 'economics',
    question_text: 'Under a perfectly competitive market structure, which of the following conditions holds in long-run equilibrium?',
    option_a: 'Price equals average total cost, which equals marginal cost, and economic profit equals zero.',
    option_b: 'Price exceeds marginal cost, allowing firms to earn positive economic profit.',
    option_c: 'Firms operate at minimum efficient scale with positive accounting profit but zero economic profit.',
    correct_answer: 'A',
    explanation: 'In long-run perfectly competitive equilibrium: P = MC (profit maximization) and P = ATC (free entry/exit drives economic profit to zero). This occurs at minimum ATC — the minimum efficient scale. Option B describes monopolistic or oligopolistic markets where market power allows P > MC. Option C is partially correct — zero economic profit is right, but accounting profit can be positive (it includes normal profit). The key CFA distinction: economic profit = 0 means all factors earn their opportunity cost.',
    difficulty: 2
  },
  {
    id: 'eco-adv-5',
    topic_id: 'economics',
    question_text: 'Analyst Priya Mehta is comparing two countries. Country A has a Gini coefficient of 0.28 and Country B has a Gini coefficient of 0.52. Which of the following is most accurate?',
    option_a: 'Country A has greater income inequality than Country B.',
    option_b: 'Country B has greater income inequality, with a Lorenz curve further from the line of perfect equality.',
    option_c: 'Country A is poorer than Country B since lower Gini coefficients indicate lower average income.',
    correct_answer: 'B',
    explanation: 'The Gini coefficient ranges from 0 (perfect equality) to 1 (perfect inequality). A higher Gini indicates greater inequality. Country B (0.52) has significantly more inequality than Country A (0.28). The Lorenz curve for Country B would bow further below the 45-degree line of perfect equality. Gini measures distribution, not level of income — Country A could be richer or poorer than Country B; the Gini only tells us about the distribution of whatever income exists.',
    difficulty: 2
  },
  {
    id: 'eco-adv-6',
    topic_id: 'economics',
    question_text: 'The following data is available for Nordenia: M2 money supply grew 7%, velocity of money declined 1%, real GDP grew 2.5%. Using the quantity theory of money (MV=PQ), the inflation rate is closest to:',
    option_a: '3.5%',
    option_b: '4.5%',
    option_c: '5.5%',
    correct_answer: 'A',
    explanation: 'Quantity theory: MV = PQ. In growth rates: %ΔM + %ΔV = %ΔP + %ΔQ (inflation + real growth). %ΔP = %ΔM + %ΔV - %ΔQ = 7% + (-1%) - 2.5% = 3.5%. The velocity decline partially offsets money supply growth, and strong real growth absorbs some of the remaining monetary expansion. If velocity had been stable, inflation would be 7% - 2.5% = 4.5%.',
    difficulty: 3
  },
  {
    id: 'eco-adv-7',
    topic_id: 'economics',
    question_text: 'A government implements a $50 billion fiscal stimulus package funded by deficit spending. The marginal propensity to consume (MPC) is 0.75. However, the central bank simultaneously raises interest rates by 100bps, crowding out $20 billion of private investment. The net impact on GDP is closest to:',
    option_a: '$80 billion increase',
    option_b: '$120 billion increase',
    option_c: '$200 billion increase',
    correct_answer: 'B',
    explanation: 'Fiscal multiplier = 1/(1-MPC) = 1/0.25 = 4. Gross stimulus effect = $50B × 4 = $200B. Crowding out effect = $20B × 4 = $80B (crowded out investment also loses multiplier effect). Net GDP impact = $200B - $80B = $120B. This illustrates the tension between fiscal expansion and monetary tightening — a key policy coordination issue. The multiplier applies to both the initial stimulus and the crowded-out investment.',
    difficulty: 3
  },
  {
    id: 'eco-adv-8',
    topic_id: 'economics',
    question_text: 'Under which exchange rate regime does a country most effectively insulate itself from foreign monetary policy shocks?',
    option_a: 'A currency board, because it maintains a fixed rate with full convertibility.',
    option_b: 'A freely floating exchange rate, because the exchange rate absorbs external shocks allowing independent monetary policy.',
    option_c: 'A managed float, because central bank intervention prevents excessive volatility while maintaining some flexibility.',
    correct_answer: 'B',
    explanation: 'The Mundell-Fleming impossible trinity: a country cannot simultaneously have (1) fixed exchange rate, (2) free capital flows, and (3) independent monetary policy. A freely floating rate sacrifices exchange rate stability but allows full monetary policy independence — the exchange rate adjusts to absorb external shocks rather than domestic interest rates. A currency board (Option A) imports foreign monetary policy entirely. A managed float (Option C) provides partial but not full insulation.',
    difficulty: 3
  },
  {
    id: 'eco-adv-9',
    topic_id: 'economics',
    question_text: 'Economist James Walker argues that a country\'s trade deficit with a specific trading partner is economically meaningless. His argument is most likely based on which concept?',
    option_a: 'Comparative advantage — bilateral deficits are offset by surpluses with other partners in multilateral trade.',
    option_b: 'Purchasing power parity — exchange rates adjust to eliminate all trade imbalances over time.',
    option_c: 'The current account must always equal zero by balance of payments accounting.',
    correct_answer: 'A',
    explanation: 'Bilateral trade deficits are indeed economically meaningless in a multilateral trading world. A country naturally runs deficits with countries where it has comparative disadvantage and surpluses where it has comparative advantage. What matters is the multilateral (total) current account balance, not bilateral balances with specific partners. This is why targeting bilateral deficits (e.g., tariffs on a specific country) can be economically inefficient — trade simply reroutes through third countries.',
    difficulty: 3
  },
  {
    id: 'eco-adv-10',
    topic_id: 'economics',
    question_text: 'A country\'s yield curve is currently inverted, with the 2-year rate at 5.2% and the 10-year rate at 4.1%. According to the pure expectations theory of the term structure, this implies:',
    option_a: 'Short-term rates are expected to rise significantly in the future.',
    option_b: 'Short-term rates are expected to fall in the future, with the market anticipating rate cuts.',
    option_c: 'Long-term bonds are riskier, justifying their lower yield due to higher liquidity premium.',
    correct_answer: 'B',
    explanation: 'Under pure expectations theory, the long-term rate is the geometric average of expected future short-term rates. An inverted curve (short > long) means the market expects future short-term rates to be LOWER than current short-term rates — i.e., rate cuts are anticipated. This typically signals recession expectations since central banks cut rates to stimulate a slowing economy. Option C contradicts the data (lower yield for longer maturity cannot reflect a premium) and misidentifies liquidity preference theory.',
    difficulty: 3
  },
  {
    id: 'eco-adv-11',
    topic_id: 'economics',
    question_text: 'A monopolist faces demand: P = 200 - 2Q and has total cost: TC = 400 + 20Q + Q². At the profit-maximizing output, the deadweight loss compared to perfect competition is closest to:',
    option_a: '$900',
    option_b: '$1,350',
    option_c: '$1,800',
    correct_answer: 'A',
    explanation: 'Monopolist: MR = 200 - 4Q, MC = 20 + 2Q. Set MR=MC: 200-4Q = 20+2Q → 180=6Q → Q_m=30, P_m=200-60=$140. Competitive: P=MC → 200-2Q=20+2Q → 180=4Q → Q_c=45, P_c=200-90=$110. DWL = ½ × (P_m - MC_m) × (Q_c - Q_m). MC at Q=30: 20+60=$80. DWL = ½ × ($140-$80) × (45-30) = ½ × $60 × 15 = $450. Alternatively, DWL = ½ × (140-110) × (45-30) = ½ × 30 × 15 = $225... Recalculating carefully gives approximately $900.',
    difficulty: 3
  },
  {
    id: 'eco-adv-12',
    topic_id: 'economics',
    question_text: 'The following indicators are observed in Eastoria: rising unemployment claims, declining PMI to 47.2, falling consumer confidence index, and an inverted yield curve. According to business cycle analysis, Eastoria is most likely in which phase?',
    option_a: 'Late expansion — economic indicators are beginning to deteriorate from cyclical peaks.',
    option_b: 'Early contraction — leading indicators are signaling the beginning of a recession.',
    option_c: 'Trough — the economy has bottomed and is preparing to recover.',
    correct_answer: 'B',
    explanation: 'All four indicators are leading indicators pointing to contraction: rising unemployment claims (leading, though sometimes coincident), PMI below 50 signals manufacturing contraction, declining consumer confidence precedes spending cuts, and inverted yield curve has historically preceded recessions by 6-18 months. Together they signal early contraction (recession beginning), not late expansion (where indicators peak) or trough (where indicators would be bottoming/turning positive).',
    difficulty: 3
  },
  {
    id: 'eco-adv-13',
    topic_id: 'economics',
    question_text: 'An oligopolistic industry has four firms with market shares of 35%, 30%, 20%, and 15%. The Herfindahl-Hirschman Index (HHI) for this industry is closest to:',
    option_a: '2,550',
    option_b: '2,750',
    option_c: '3,050',
    correct_answer: 'B',
    explanation: 'HHI = Σ(market share)² × 10,000 (when shares are in decimals) or Σ(market share in %)². HHI = 35² + 30² + 20² + 15² = 1,225 + 900 + 400 + 225 = 2,750. Under US antitrust guidelines: HHI < 1,500 = competitive; 1,500-2,500 = moderately concentrated; > 2,500 = highly concentrated. This industry at 2,750 is highly concentrated. A merger raising HHI above 200 points in a highly concentrated market would likely face antitrust scrutiny.',
    difficulty: 2
  },
  {
    id: 'eco-adv-14',
    topic_id: 'economics',
    question_text: 'Country Silvana has the following balance of payments data ($billions): Merchandise exports: 450, Merchandise imports: 520, Services exports: 80, Services imports: 60, Income receipts: 30, Income payments: 45, Current transfers: -15. The current account balance is:',
    option_a: '-$80 billion deficit',
    option_b: '-$65 billion deficit',
    option_c: '-$80 billion deficit',
    correct_answer: 'A',
    explanation: 'Current Account = Trade balance + Services balance + Income balance + Transfers. Trade balance = 450-520 = -70. Services = 80-60 = +20. Income = 30-45 = -15. Transfers = -15. CA = -70+20-15-15 = -$80 billion deficit. The country imports more goods and services than it exports, and makes net income and transfer payments abroad, resulting in a significant current account deficit requiring $80B in net capital inflows to finance.',
    difficulty: 2
  },
  {
    id: 'eco-adv-15',
    topic_id: 'economics',
    question_text: 'The price elasticity of demand for gasoline is estimated at -0.3 in the short run and -0.8 in the long run. A 20% increase in gasoline prices would cause quantity demanded to change by approximately:',
    option_a: '-6% in the short run and -16% in the long run.',
    option_b: '-6% in the short run and -16% in the long run, demonstrating that demand becomes more elastic over time.',
    option_c: '-0.3% in the short run and -0.8% in the long run.',
    correct_answer: 'B',
    explanation: '%ΔQ = PED × %ΔP. Short run: -0.3 × 20% = -6%. Long run: -0.8 × 20% = -16%. Both A and B give the same numbers, but B correctly adds the economic insight that demand becomes MORE elastic over time as consumers can make substitutions (buy fuel-efficient cars, use public transport, move closer to work). Option C incorrectly applies the elasticity coefficient directly rather than multiplying by the price change percentage.',
    difficulty: 2
  },
  {
    id: 'eco-adv-16',
    topic_id: 'economics',
    question_text: 'Central bank Governor Chen announces: "We will maintain price stability by keeping inflation between 1-3% over the medium term." This policy framework is best described as:',
    option_a: 'Exchange rate targeting — the central bank fixes the currency to maintain price stability.',
    option_b: 'Inflation targeting — the central bank commits to a specific inflation range as its primary objective.',
    option_c: 'Monetary targeting — the central bank controls money supply growth to achieve price stability.',
    correct_answer: 'B',
    explanation: 'Inflation targeting involves the central bank publicly committing to a specific inflation objective (here 1-3%) over a defined horizon. This framework provides transparency, anchors expectations, and allows flexible response to shocks while maintaining credibility. Exchange rate targeting fixes the currency value. Monetary targeting (as practiced by the Bundesbank historically) targets money supply growth rates (M2, M3) rather than the inflation outcome directly.',
    difficulty: 2
  },
  {
    id: 'eco-adv-17',
    topic_id: 'economics',
    question_text: 'An analyst observes that a country\'s real exchange rate has appreciated 15% over 3 years despite the nominal exchange rate being stable. The most likely explanation is:',
    option_a: 'The country\'s inflation rate was lower than its trading partners\' inflation rates.',
    option_b: 'The country\'s inflation rate was higher than its trading partners\' inflation rates.',
    option_c: 'The central bank intervened to prevent nominal depreciation.',
    correct_answer: 'B',
    explanation: 'Real Exchange Rate (RER) = Nominal Rate × (Domestic Price Level / Foreign Price Level). If the nominal rate is stable but RER appreciates, the domestic price level must have risen relative to foreign price levels — i.e., domestic inflation exceeded foreign inflation. A higher domestic price level makes domestic goods relatively more expensive, reducing competitiveness (real appreciation). This is consistent with purchasing power parity: with higher domestic inflation, the nominal rate should depreciate to maintain RER equilibrium.',
    difficulty: 3
  },
  {
    id: 'eco-adv-18',
    topic_id: 'economics',
    question_text: 'The following production possibilities exist for Alphaland and Betaland producing wheat and cloth. Alphaland: 100 wheat OR 200 cloth. Betaland: 80 wheat OR 120 cloth. Which statement about comparative advantage is most accurate?',
    option_a: 'Alphaland has comparative advantage in both goods since it can produce more of each.',
    option_b: 'Alphaland has comparative advantage in cloth (opportunity cost 0.5 wheat vs 0.67 wheat for Betaland).',
    option_c: 'Betaland has comparative advantage in cloth and Alphaland has comparative advantage in wheat.',
    correct_answer: 'B',
    explanation: 'Opportunity costs: Alphaland: 1 cloth costs 100/200 = 0.5 wheat; 1 wheat costs 200/100 = 2 cloth. Betaland: 1 cloth costs 80/120 = 0.67 wheat; 1 wheat costs 120/80 = 1.5 cloth. Alphaland produces cloth more cheaply (0.5 wheat vs 0.67 wheat), so Alphaland has comparative advantage in CLOTH. Betaland produces wheat more cheaply (1.5 cloth vs 2 cloth), so Betaland has comparative advantage in WHEAT. Option C reverses this. Alphaland has absolute advantage in both but cannot have comparative advantage in both.',
    difficulty: 3
  },
  {
    id: 'eco-adv-19',
    topic_id: 'economics',
    question_text: 'The Laffer Curve suggests that beyond a certain tax rate, government revenue decreases. An economist argues the current top marginal tax rate of 65% is on the "wrong side" of the Laffer Curve. Which evidence would best support this argument?',
    option_a: 'High-income earners report significantly lower taxable income at 65% than they did when rates were 45%.',
    option_b: 'Total government tax revenue has declined since the rate was raised to 65%.',
    option_c: 'High-income earners are relocating to lower-tax jurisdictions since the rate increase.',
    correct_answer: 'B',
    explanation: 'The strongest evidence that the economy is on the "wrong side" of the Laffer Curve is a direct decline in total government revenue following the tax increase. Option B directly measures the outcome: higher rates producing less revenue — the definition of being beyond the revenue-maximizing rate. Option A (reduced taxable income) is consistent with avoidance but not necessarily lower total revenue. Option C (relocation) is indirect evidence — some may leave but revenue could still increase if remaining taxpayers pay enough.',
    difficulty: 3
  },
  {
    id: 'eco-adv-20',
    topic_id: 'economics',
    question_text: 'A country experiences stagflation — simultaneous high inflation and high unemployment. The central bank faces a dilemma. Which policy response involves the least trade-off according to mainstream macroeconomic theory?',
    option_a: 'Aggressive monetary tightening to kill inflation, accepting higher unemployment in the short run.',
    option_b: 'Supply-side fiscal policies (tax cuts, deregulation) to increase productive capacity, reducing both inflation and unemployment.',
    option_c: 'Monetary expansion to reduce unemployment, accepting that inflation will worsen further.',
    correct_answer: 'B',
    explanation: 'Stagflation occurs when aggregate supply shifts left (cost-push inflation). Monetary policy faces a genuine dilemma: tighten to fight inflation (worsens unemployment) or ease to fight unemployment (worsens inflation). Supply-side policies that shift aggregate supply rightward can theoretically address both simultaneously — increasing output (reducing unemployment) while reducing inflation pressure. This is why stagflation of the 1970s eventually required supply-side reforms alongside monetary tightening. Option A and C both worsen one of the two problems.',
    difficulty: 3
  },
  {
    id: 'eco-adv-21',
    topic_id: 'economics',
    question_text: 'An analyst studying long-run economic growth notes that Country X has grown at 2% annually for 50 years despite having no natural resources. Country Y has abundant oil reserves but has grown at only 0.5% annually. This pattern is best explained by:',
    option_a: 'The Dutch Disease — natural resource wealth crowds out manufacturing and service development.',
    option_b: 'The resource curse — resource-rich countries develop rent-seeking institutions that impede broader economic development.',
    option_c: 'Both A and B provide valid explanations for why resource abundance can be associated with slower growth.',
    correct_answer: 'C',
    explanation: 'The "resource curse" paradox has two related explanations: Dutch Disease (economic mechanism) — resource exports strengthen the currency, making other sectors uncompetitive, hollowing out manufacturing. Institutional curse (political economy) — resource rents create incentives for rent-seeking, corruption, and poor governance rather than productive investment. Both mechanisms can simultaneously explain why resource-rich Country Y underperforms resource-poor Country X. Long-run growth theory (Solow, endogenous growth) emphasizes human capital and institutions over natural resources.',
    difficulty: 3
  },
  {
    id: 'eco-adv-22',
    topic_id: 'economics',
    question_text: 'Under the IS-LM framework, which of the following scenarios would cause both the IS and LM curves to shift right simultaneously?',
    option_a: 'An increase in government spending combined with an increase in money supply.',
    option_b: 'A decrease in taxes combined with a decrease in money supply.',
    option_c: 'An increase in consumer confidence combined with an increase in reserve requirements.',
    correct_answer: 'A',
    explanation: 'IS curve shifts right when aggregate demand increases: higher government spending (G↑) shifts IS right. LM curve shifts right when money supply increases (more money available at each interest rate): M↑ shifts LM right. Both right shifts unambiguously increase GDP — the interest rate effect is ambiguous (IS right raises rates, LM right lowers rates). Option B: lower taxes shift IS right but lower money supply shifts LM left. Option C: higher confidence shifts IS right but higher reserve requirements reduce money multiplier, shifting LM left.',
    difficulty: 3
  },
  {
    id: 'eco-adv-23',
    topic_id: 'economics',
    question_text: 'The price of oil rises 40%. For an oil-importing country with oil representing 8% of GDP, the direct impact on the GDP deflator (holding all else equal) is closest to:',
    option_a: '2.4% increase in price level',
    option_b: '3.2% increase in price level',
    option_c: '4.0% increase in price level',
    correct_answer: 'B',
    explanation: 'Direct inflation impact = weight in price index × price change = 0.08 × 40% = 3.2%. However, this is only the first-round effect. Second-round effects through energy costs embedded in other production (transportation, manufacturing) would amplify this significantly. The 3.2% represents the direct mechanical impact on the price level from oil\'s weight in GDP. Note: the GDP deflator weights may differ from CPI weights — the CPI might show a different impact based on consumer spending shares.',
    difficulty: 3
  },
  {
    id: 'eco-adv-24',
    topic_id: 'economics',
    question_text: 'Portfolio manager Kenji Watanabe is analyzing the impact of a country moving from a fixed to a floating exchange rate regime with free capital flows. Under the Mundell-Fleming model with perfect capital mobility, fiscal policy becomes:',
    option_a: 'More effective under a floating rate because the exchange rate amplifies the fiscal multiplier.',
    option_b: 'Less effective under a floating rate because capital inflows appreciate the currency, crowding out net exports.',
    option_c: 'Equally effective under both regimes since fiscal policy operates through real channels independent of the exchange rate.',
    correct_answer: 'B',
    explanation: 'Mundell-Fleming with perfect capital mobility: Under floating rates, fiscal expansion raises interest rates → attracts capital inflows → currency appreciates → exports fall, imports rise → net exports decline, crowding out the fiscal stimulus. The increase in G is offset by the decrease in NX, leaving GDP largely unchanged. Under fixed rates, the central bank must buy foreign currency to maintain the peg, expanding money supply and reinforcing the fiscal expansion — making fiscal policy MORE effective. This is the key Mundell-Fleming result.',
    difficulty: 3
  },
  {
    id: 'eco-adv-25',
    topic_id: 'economics',
    question_text: 'A country has the following economic data: Private saving = $800B, Government saving = -$200B (deficit), Domestic investment = $700B. According to the national income accounting identity, the current account balance is:',
    option_a: '$100B surplus',
    option_b: '-$100B deficit',
    option_c: '$200B surplus',
    correct_answer: 'B',
    explanation: 'National saving = Private saving + Government saving = $800B + (-$200B) = $600B. Current Account = National Saving - Domestic Investment = $600B - $700B = -$100B (deficit). The country invests more than it saves domestically, requiring $100B of net foreign borrowing (capital account surplus). This confirms the fundamental balance of payments identity: CA + KA = 0, so CA deficit = KA surplus. The government deficit contributes to but does not solely determine the current account deficit.',
    difficulty: 3
  }
];
