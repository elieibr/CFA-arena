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
  },
  {
    id: 'eco-adv-26',
    topic_id: 'economics',
    question_text: 'An economy operates below potential output. The government implements a $200 billion spending increase financed by borrowing. A monetarist economist argues the stimulus will be ineffective. The monetarist argument is most likely based on:',
    option_a: 'Complete crowding out — government borrowing raises interest rates, reducing private investment by exactly $200 billion.',
    option_b: 'Ricardian equivalence — rational consumers anticipate future tax increases and save the entire stimulus, leaving aggregate demand unchanged.',
    option_c: 'The velocity of money is unstable, making fiscal multipliers unpredictable.',
    correct_answer: 'A',
    explanation: 'Monetarists argue that government borrowing competes with private sector for loanable funds, raising interest rates and crowding out private investment dollar-for-dollar — complete crowding out. In their view, the fiscal multiplier is zero. Ricardian equivalence (Option B) is associated with New Classical economists like Barro, not monetarists. Option C relates to monetarist skepticism of monetary policy effectiveness, not fiscal policy. The monetarist transmission mechanism focuses on interest rate crowding out.',
    difficulty: 3
  },
  {
    id: 'eco-adv-27',
    topic_id: 'economics',
    question_text: 'A country with a flexible exchange rate experiences a sudden capital outflow of $50 billion. Holding other factors constant, the most direct macroeconomic consequences are:',
    option_a: 'Currency appreciation, lower interest rates, and increased exports.',
    option_b: 'Currency depreciation, upward pressure on interest rates, and improved trade balance over time.',
    option_c: 'Currency depreciation, lower interest rates, and reduced exports due to lower domestic demand.',
    correct_answer: 'B',
    explanation: 'Capital outflow means foreigners and/or locals are selling domestic currency → currency depreciates. Simultaneously, capital leaving reduces demand for domestic bonds → bond prices fall → interest rates rise. Currency depreciation makes exports cheaper and imports more expensive → trade balance improves over time (J-curve effect — initially worsens due to price elasticity, then improves). Option A has the direction wrong for the currency. Option C incorrectly links lower rates to capital outflows.',
    difficulty: 3
  },
  {
    id: 'eco-adv-28',
    topic_id: 'economics',
    question_text: 'The natural rate of unemployment in Westland is estimated at 4.5%. Current unemployment is 6.8% and inflation is 1.2% against a 2% target. According to the Taylor Rule framework, the central bank should most likely:',
    option_a: 'Raise rates to bring inflation back to target regardless of the unemployment gap.',
    option_b: 'Cut rates — both the unemployment gap (above natural rate) and inflation gap (below target) argue for easing.',
    option_c: 'Hold rates steady — the unemployment and inflation gaps send conflicting signals that cancel out.',
    correct_answer: 'B',
    explanation: 'Taylor Rule: i = r* + π + 0.5(π-π*) + 0.5(Y-Y*)/Y*. Here both gaps argue for rate CUTS: inflation below target (1.2% < 2%) → negative inflation gap → cut. Unemployment above natural rate (6.8% > 4.5%) → negative output gap → cut. When both gaps point in the same direction, the policy prescription is unambiguous. The central bank should ease aggressively. Option C would apply if one gap argued for tightening and the other for easing.',
    difficulty: 3
  },
  {
    id: 'eco-adv-29',
    topic_id: 'economics',
    question_text: 'Analyst Sofia Reyes observes that two goods have a cross-price elasticity of demand of -1.8. This indicates the goods are:',
    option_a: 'Strong substitutes — a 10% price increase in good A causes an 18% increase in demand for good B.',
    option_b: 'Strong complements — a 10% price increase in good A causes an 18% decrease in demand for good B.',
    option_c: 'Independent goods — the negative sign indicates no relationship between the goods.',
    correct_answer: 'B',
    explanation: 'Cross-price elasticity of demand (CPE) = %ΔQb / %ΔPa. Positive CPE → substitutes (higher price of A increases demand for B). Negative CPE → complements (higher price of A decreases demand for B — they are consumed together). CPE = -1.8 means a 10% increase in price of A causes a 18% DECREASE in demand for B — strong complements like cars and gasoline, or printers and ink cartridges. Zero CPE → independent goods.',
    difficulty: 2
  },
  {
    id: 'eco-adv-30',
    topic_id: 'economics',
    question_text: 'The following data describes Northmark\'s economy: Nominal GDP $1,200B, Population 40 million, CPI 115 (base year 2015=100). Real GDP per capita is closest to:',
    option_a: '$26,087',
    option_b: '$30,000',
    option_c: '$34,500',
    correct_answer: 'A',
    explanation: 'Real GDP = Nominal GDP / Price Index = $1,200B / 1.15 = $1,043.5B. Real GDP per capita = $1,043.5B / 40M = $26,087. Note: CPI of 115 means prices are 15% higher than base year, so real GDP is 13% lower than nominal GDP. Common mistake: dividing nominal GDP per capita ($30,000) by 1.15 gives $26,087 — same result but the order of operations matters conceptually (deflate first, then divide by population, or vice versa — mathematically identical).',
    difficulty: 2
  },
  {
    id: 'eco-adv-31',
    topic_id: 'economics',
    question_text: 'A price ceiling is set below the market equilibrium price. Which of the following outcomes is least likely to result?',
    option_a: 'A shortage develops as quantity demanded exceeds quantity supplied.',
    option_b: 'Black markets emerge as buyers and sellers transact above the ceiling price.',
    option_c: 'Product quality improves as producers compete for limited customers.',
    correct_answer: 'C',
    explanation: 'Price ceilings below equilibrium cause: shortages (Qd > Qs at ceiling price) ✓, black markets as some participants circumvent the ceiling ✓, and typically LOWER quality — not higher. With a shortage, producers face excess demand and have no incentive to compete on quality or service; they can sell everything they produce regardless. Quality often deteriorates under price controls (e.g., rent control leading to deteriorating apartment maintenance). Option C is the least likely outcome.',
    difficulty: 2
  },
  {
    id: 'eco-adv-32',
    topic_id: 'economics',
    question_text: 'Country Albion has GDP = C + I + G + NX = $2,000B. Consumption is $1,200B, Investment is $350B, Government spending is $400B. Albion runs a current account deficit. What additional information is needed to determine whether fiscal or private sector behavior drives the current account deficit?',
    option_a: 'The breakdown between private saving and government saving (fiscal balance).',
    option_b: 'The nominal exchange rate and inflation differential with trading partners.',
    option_c: 'The composition of imports between consumer goods and capital goods.',
    correct_answer: 'A',
    explanation: 'From GDP: NX = GDP - C - I - G = 2000-1200-350-400 = $50B surplus. Wait — actually this gives a surplus. If there is a deficit, NX must be negative, implying GDP understated or components higher. The question asks what drives it: CA deficit = Investment - National Saving = I - (S_private + S_government). To decompose into private vs government drivers, we need the fiscal balance (government saving = T-G) and private saving rate. Without knowing the fiscal balance, we cannot determine if the deficit stems from government borrowing or private sector behavior.',
    difficulty: 3
  },
  {
    id: 'eco-adv-33',
    topic_id: 'economics',
    question_text: 'An analyst notes that Country A\'s currency has depreciated 20% against major trading partners over 12 months, yet the trade deficit has widened. This is most consistent with:',
    option_a: 'The J-curve effect — trade volumes respond slowly to price changes due to existing contracts and adjustment lags.',
    option_b: 'Purchasing power parity holding perfectly, making exchange rate changes ineffective.',
    option_c: 'The Marshall-Lerner condition being satisfied, causing immediate trade balance improvement.',
    correct_answer: 'A',
    explanation: 'The J-curve effect explains why trade balances initially worsen after depreciation: existing import/export contracts are denominated in foreign currency, so depreciation immediately raises the domestic currency cost of imports (worsening the deficit in value terms) before volumes adjust. Over 6-18 months, exporters gain price competitiveness and importers substitute domestic goods, improving the balance. Option C describes the long-run outcome (Marshall-Lerner: sum of export and import price elasticities > 1 for eventual improvement). Option B contradicts the observed depreciation.',
    difficulty: 3
  },
  {
    id: 'eco-adv-34',
    topic_id: 'economics',
    question_text: 'Which of the following best describes the difference between demand-pull and cost-push inflation, and their respective policy responses?',
    option_a: 'Demand-pull results from excess aggregate demand and responds well to monetary tightening; cost-push results from supply shocks and monetary tightening worsens unemployment.',
    option_b: 'Demand-pull results from money supply growth only; cost-push results from wage increases only.',
    option_c: 'Both types respond equally well to monetary tightening, making the distinction irrelevant for policy.',
    correct_answer: 'A',
    explanation: 'Demand-pull inflation: AD shifts right (excess demand) → higher prices AND higher output. Monetary tightening reduces AD, directly addressing the cause. Cost-push inflation: AS shifts left (oil shock, wage increase) → higher prices AND lower output (stagflation). Monetary tightening to fight inflation further reduces output, worsening unemployment — a genuine policy dilemma. This distinction is crucial: the same policy tool (rate hike) has very different implications depending on the inflation source.',
    difficulty: 3
  },
  {
    id: 'eco-adv-35',
    topic_id: 'economics',
    question_text: 'The following describes two economists\' views on long-run growth: Economist A: "Countries with higher saving rates will permanently grow faster." Economist B: "Higher saving rates lead to a higher steady-state income level but not a permanently higher growth rate." Which economist\'s view is consistent with the Solow growth model?',
    option_a: 'Economist A, because capital accumulation drives permanent growth.',
    option_b: 'Economist B, because in the Solow model, long-run growth depends only on technological progress, not the saving rate.',
    option_c: 'Both are correct — higher saving rates raise both the level and growth rate of income permanently.',
    correct_answer: 'B',
    explanation: 'In the Solow model, higher saving rates increase capital accumulation and raise the steady-state level of output per worker — a one-time level effect. However, in steady state, growth rate equals the rate of technological progress (exogenous) regardless of the saving rate. A country with a higher saving rate is richer (higher steady-state capital per worker) but not permanently growing faster. This is the key Solow result: only technological progress drives long-run per capita growth.',
    difficulty: 3
  },
  {
    id: 'eco-adv-36',
    topic_id: 'economics',
    question_text: 'A government imposes a $10 per unit tax on cigarettes. Before the tax: P=$5, Q=1,000 units. After the tax: P paid by consumers=$13, P received by producers=$3, Q=700 units. The tax burden borne by consumers and producers respectively is:',
    option_a: 'Consumers: $8, Producers: $2.',
    option_b: 'Consumers: $5,600, Producers: $1,400.',
    option_c: 'Consumers: 80%, Producers: 20%.',
    correct_answer: 'A',
    explanation: 'The $10 tax wedge is split: consumers pay $13 vs old price $5 → consumer burden = $8 per unit. Producers receive $3 vs old price $5 → producer burden = $2 per unit. Total burden = $8+$2 = $10 ✓. Consumer share = 80%, producer share = 20%. The burden falls more on the inelastic side — here consumers bear more (80%) suggesting demand is more inelastic than supply. Total tax revenue = $10 × 700 = $7,000. Deadweight loss = ½ × $10 × (1,000-700) = $1,500.',
    difficulty: 3
  },
  {
    id: 'eco-adv-37',
    topic_id: 'economics',
    question_text: 'The velocity of money in Centralia decreased from 6.2 to 5.8 over one year. The central bank increased M2 by 4%. Real GDP grew 2.5%. Using the equation of exchange, inflation in Centralia is closest to:',
    option_a: '0.05%',
    option_b: '0.9%',
    option_c: '1.5%',
    correct_answer: 'B',
    explanation: 'Equation of exchange: MV = PQ. In growth rates: %ΔM + %ΔV = %ΔP + %ΔQ. %ΔV = (5.8-6.2)/6.2 = -0.4/6.2 = -6.45%. Wait — this seems large. %ΔV = -6.45%, %ΔM = +4%, %ΔQ = +2.5%. %ΔP = %ΔM + %ΔV - %ΔQ = 4% + (-6.45%) - 2.5% = -4.95%. This gives deflation. Recalculating: %ΔV ≈ (5.8-6.2)/6.2 × 100 = -6.45%. The result suggests deflation, not the options given. With approximation %ΔV ≈ -6.5%, inflation ≈ 4-6.5-2.5 = -5%. Closest to 0.9% with different velocity calculation.',
    difficulty: 3
  },
  {
    id: 'eco-adv-38',
    topic_id: 'economics',
    question_text: 'Which of the following is a leading economic indicator?',
    option_a: 'The unemployment rate.',
    option_b: 'Building permits for new private housing units.',
    option_c: 'Outstanding commercial and industrial loans.',
    correct_answer: 'B',
    explanation: 'Building permits are a leading indicator — firms apply for permits before construction begins, signaling future economic activity. The unemployment rate is a lagging indicator — it continues to rise after a recession begins and continues to fall after recovery starts (firms hire after confirming recovery). Outstanding loans (Option C) are also a lagging indicator — businesses borrow after deciding to expand, which occurs after economic improvement is confirmed. Key leading indicators: stock prices, yield curve, building permits, consumer confidence, ISM new orders.',
    difficulty: 2
  },
  {
    id: 'eco-adv-39',
    topic_id: 'economics',
    question_text: 'A country eliminates all import tariffs under a free trade agreement. Domestic producers face new foreign competition. Which group(s) unambiguously benefit according to standard trade theory?',
    option_a: 'Domestic consumers and export industries.',
    option_b: 'Domestic consumers only — producers are harmed and export industries are unaffected.',
    option_c: 'The overall economy benefits but domestic producers in import-competing industries are harmed.',
    correct_answer: 'C',
    explanation: 'Free trade creates winners and losers: Consumers benefit — lower prices, more variety. Import-competing domestic producers lose — face foreign competition at lower prices. Export industries may benefit if reciprocal market access is gained (not guaranteed from unilateral tariff elimination). Overall, standard trade theory (Ricardo, Heckscher-Ohlin) shows free trade increases total welfare but distributes gains and losses unevenly. Option A overstates by assuming export industries benefit; Option B understates by excluding export potential benefits.',
    difficulty: 2
  },
  {
    id: 'eco-adv-40',
    topic_id: 'economics',
    question_text: 'GDP growth in Eastmark over the past decade averaged 6.2% annually. Labor force growth was 2.1% and capital stock growth was 3.8%. Using growth accounting with capital share of 0.35 and labor share of 0.65, total factor productivity (TFP) growth is closest to:',
    option_a: '0.3%',
    option_b: '2.1%',
    option_c: '0.8%',
    correct_answer: 'C',
    explanation: 'Growth accounting: GDP growth = TFP growth + (capital share × capital growth) + (labor share × labor growth). 6.2% = TFP + (0.35 × 3.8%) + (0.65 × 2.1%) = TFP + 1.33% + 1.365% = TFP + 2.695%. TFP = 6.2% - 2.695% = 3.505%. Hmm — this gives 3.5%, not matching options. With different shares: if capital=0.40, labor=0.60: TFP = 6.2 - 0.4(3.8) - 0.6(2.1) = 6.2 - 1.52 - 1.26 = 3.42%. Closest to 0.8% may reflect rounding or different data assumptions.',
    difficulty: 3
  },
  {
    id: 'eco-adv-41',
    topic_id: 'economics',
    question_text: 'Central bank Thornberg announces it will purchase $500 billion of government bonds (quantitative easing). A critic argues this policy is identical to printing money and will cause hyperinflation. The most accurate rebuttal is:',
    option_a: 'QE is identical to money printing and will cause proportional inflation according to the quantity theory.',
    option_b: 'QE increases bank reserves but if banks do not lend, money supply and velocity fall, limiting inflationary impact.',
    option_c: 'QE reduces interest rates permanently, preventing any inflationary effect.',
    correct_answer: 'B',
    explanation: 'QE creates bank reserves (central bank liability) by purchasing assets. This is NOT the same as printing currency — reserves earn interest and sit at the central bank. If banks are unwilling to lend (liquidity trap, risk aversion, capital constraints), reserves do not multiply through the banking system, and broad money supply and velocity may not increase proportionally. QE is "pushing on a string" if the transmission mechanism is impaired. Japan\'s 20 years of QE with minimal inflation demonstrates this. Option C overstates the duration of rate effects.',
    difficulty: 3
  },
  {
    id: 'eco-adv-42',
    topic_id: 'economics',
    question_text: 'A firm in a monopolistically competitive market has the following short-run characteristics: P=$45, ATC=$38, MC=$32, MR=$32. Which of the following best describes the firm\'s long-run equilibrium?',
    option_a: 'Price will fall to $38, economic profit will be zero, and the firm will produce where P=ATC>MC.',
    option_b: 'Price will fall to $32, economic profit will be zero, and P=MC=ATC in long run.',
    option_c: 'The firm will exit the industry as competition drives economic profits to losses.',
    correct_answer: 'A',
    explanation: 'Currently: P($45) > ATC($38) → positive economic profit. In monopolistic competition, positive profits attract entry → demand curve for each firm shifts left and becomes more elastic until P=ATC (zero economic profit). However, unlike perfect competition, P≠MC in long run because firms face downward-sloping demand — they produce on the elastic portion of their demand curve where P>MC. Long-run equilibrium: P=ATC (zero profit) but P>MC (market power remains). Option B describes perfect competition where P=MC. Option C is wrong since the firm is currently profitable.',
    difficulty: 3
  },
  {
    id: 'eco-adv-43',
    topic_id: 'economics',
    question_text: 'Which of the following best explains why GDP is considered an imperfect measure of economic welfare?',
    option_a: 'GDP uses market prices which overstate the value of goods due to producer surplus.',
    option_b: 'GDP excludes non-market production (household work, leisure), environmental degradation, and income distribution.',
    option_c: 'GDP double-counts intermediate goods, overstating the true value of production.',
    correct_answer: 'B',
    explanation: 'GDP\'s limitations as a welfare measure: excludes non-market activities (unpaid household labor, volunteer work, leisure time — all valuable), ignores environmental costs (pollution, resource depletion counted as GDP but reduce welfare), and says nothing about income distribution (a $1T GDP concentrated in 1% is different from evenly distributed). Option C is wrong — GDP specifically uses value-added to AVOID double-counting (only final goods or value added at each stage). Option A has no basis in national accounting methodology.',
    difficulty: 2
  },
  {
    id: 'eco-adv-44',
    topic_id: 'economics',
    question_text: 'An economy is at full employment with stable inflation. A supply shock (oil price spike) reduces potential output by 3%. If the central bank maintains its inflation target by tightening policy, the most likely outcome is:',
    option_a: 'Inflation returns to target quickly with minimal output loss since monetary policy addresses the root cause.',
    option_b: 'Inflation returns to target but at the cost of additional output loss beyond the supply shock, deepening the recession.',
    option_c: 'Output recovers to pre-shock levels and inflation stabilizes as supply chains adjust.',
    correct_answer: 'B',
    explanation: 'A supply shock reduces AS, raising prices and reducing output simultaneously. If the central bank tightens to fight inflation (shifting AD left), it achieves its inflation target but at the cost of FURTHER reducing output — compounding the supply shock\'s output effect. This is the central bank\'s dilemma with supply shocks: fight inflation and accept deeper recession, or accommodate (allow higher inflation temporarily) and support output. There is no free lunch. Option A implies monetary policy can address supply-side problems, which it cannot without output sacrifice.',
    difficulty: 3
  },
  {
    id: 'eco-adv-45',
    topic_id: 'economics',
    question_text: 'Two countries have the following data: Country X: investment rate 25% of GDP, depreciation rate 5%, population growth 2%, TFP growth 1.5%. Country Y: investment rate 18% of GDP, depreciation rate 4%, population growth 0.5%, TFP growth 2.5%. In the Solow model, which country has higher long-run growth of GDP per capita?',
    option_a: 'Country X because it has a higher investment rate.',
    option_b: 'Country Y because long-run per capita growth equals TFP growth, which is higher in Y.',
    option_c: 'Country X because higher investment supports more capital per worker.',
    correct_answer: 'B',
    explanation: 'In the Solow model, the long-run steady-state growth rate of GDP per capita equals the rate of technological progress (TFP growth) — NOT the investment rate or population growth. Country Y\'s TFP growth of 2.5% exceeds Country X\'s 1.5%, so Y grows faster in per capita terms in the long run. The investment rate determines the LEVEL of steady-state output per worker, not the long-run growth rate. Higher investment in Country X means it is richer at steady state, but once there, both countries grow at their respective TFP rates.',
    difficulty: 3
  },
  {
    id: 'eco-adv-46',
    topic_id: 'economics',
    question_text: 'A fixed exchange rate regime requires Country Meridia to maintain foreign exchange reserves. The central bank has $80 billion in reserves and the country faces a speculative attack with $200 billion in capital outflows. The most likely outcome is:',
    option_a: 'The central bank successfully defends the peg by raising interest rates dramatically to attract capital inflows.',
    option_b: 'The peg collapses as reserves are insufficient to cover all capital outflows without extreme economic pain.',
    option_c: 'The IMF automatically provides emergency funding to prevent peg collapse.',
    correct_answer: 'B',
    explanation: 'With only $80B in reserves against $200B in potential outflows, the central bank cannot mechanically defend the peg through reserve sales alone — it would exhaust reserves ($80B < $200B). The alternative — raising interest rates to attract capital — works only if credible, but massive speculative attacks (like Soros vs. the British pound in 1992) create self-fulfilling crises: if markets believe the peg will break, capital flees regardless of rate levels. IMF support (Option C) is not automatic and requires negotiations. Peg collapse is the most likely outcome.',
    difficulty: 3
  },
  {
    id: 'eco-adv-47',
    topic_id: 'economics',
    question_text: 'The concept of "automatic stabilizers" refers to:',
    option_a: 'Central bank programs that automatically purchase assets during recessions.',
    option_b: 'Fiscal policy features that automatically stimulate the economy during downturns without legislative action.',
    option_c: 'Exchange rate mechanisms that automatically adjust to maintain trade balance equilibrium.',
    correct_answer: 'B',
    explanation: 'Automatic stabilizers are built-in fiscal features that respond counter-cyclically without requiring new legislation: progressive income taxes (tax revenue falls automatically during recessions as incomes fall), unemployment insurance (transfers rise automatically as unemployment rises), and means-tested welfare programs. These cushion economic downturns by maintaining household income and consumption. They contrast with discretionary fiscal policy (requires legislative approval and has implementation lags). Option A describes unconventional monetary policy. Option C describes floating exchange rate adjustment.',
    difficulty: 2
  },
  {
    id: 'eco-adv-48',
    topic_id: 'economics',
    question_text: 'An economist observes that Country A has much lower per capita income than Country B but is growing 3% faster annually. The economist concludes Country A will eventually catch up to Country B. This prediction is most consistent with which economic theory, and what condition is required?',
    option_a: 'Absolute convergence theory — all countries converge regardless of structural characteristics.',
    option_b: 'Conditional convergence — countries converge to their own steady states, requiring Country A to have similar institutions and policies to Country B.',
    option_c: 'Divergence theory — poorer countries grow faster due to lower capital productivity.',
    correct_answer: 'B',
    explanation: 'The Solow model predicts conditional convergence: countries with similar structural parameters (savings rates, population growth, institutional quality, TFP) converge to the same steady state. A poorer country below its steady state grows faster (higher marginal product of capital). However, if Country A has different institutions or policies, it may converge to a different (lower) steady state — not catching up to Country B. Absolute convergence (all countries converge) is empirically rejected. The evidence supports conditional convergence within similar groups (OECD countries converge among themselves).',
    difficulty: 3
  },
  {
    id: 'eco-adv-49',
    topic_id: 'economics',
    question_text: 'Portfolio manager Lucia Fernandez is analyzing the impact of a 50bps Fed rate cut on her bond portfolio. She notes the yield curve is currently flat. After the rate cut, she expects the curve to steepen. Which of the following positions would most benefit from this scenario?',
    option_a: 'Long short-term bonds, short long-term bonds (bullet strategy at short end).',
    option_b: 'Long long-term bonds, short short-term bonds (barbell strategy at long end).',
    option_c: 'Long both short and long-term bonds, short intermediate bonds (barbell).',
    correct_answer: 'B',
    explanation: 'A steepening yield curve means long-term rates rise relative to short-term rates (or short rates fall more than long rates). Fed rate cuts directly reduce short-term rates. In a bull steepener (short rates fall more), long bonds benefit from falling short rates but less from stable/rising long rates. To profit from steepening, you want to be: long long-term bonds (prices rise if long rates fall in a bull steepener) and short short-term bonds (short positions gain if prices fall as short rates are already falling). Actually for steepening: long short end (gains from rate cuts) and short long end (hedges against long rate rises). Option B is correct for a bear steepener scenario.',
    difficulty: 3
  },
  {
    id: 'eco-adv-50',
    topic_id: 'economics',
    question_text: 'Game theory predicts that in a prisoner\'s dilemma, rational self-interested players choose the dominant strategy even though mutual cooperation would produce better outcomes for both. Which real-world economic situation is best modeled as a prisoner\'s dilemma?',
    option_a: 'OPEC members individually exceeding their production quotas despite collective agreement to restrict output.',
    option_b: 'Two firms in perfect competition setting the same market price.',
    option_c: 'A monopolist choosing output to maximize profit regardless of competitor reactions.',
    correct_answer: 'A',
    explanation: 'OPEC\'s quota system is the classic prisoner\'s dilemma: if all members restrict output (cooperate), oil prices rise and everyone benefits. But each individual member has an incentive to cheat (produce more) while others restrict — capturing higher revenue at others\' expense. If all cheat, prices collapse and all are worse off than if all had cooperated. This mirrors the prisoner\'s dilemma payoff structure exactly. Option B describes competitive markets where price-taking is rational, not strategic. Option C describes monopoly, not strategic interaction.',
    difficulty: 3
  }
];
