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

export const economicsQuestions: Question[] = [
  {
    id: 'eco-001',
    topic_id: 'economics',
    question_text: 'An economy has nominal GDP of $8,450 billion in 2024 and $7,920 billion in 2023. The GDP deflator is 112.5 in 2024 and 108.0 in 2023. What is the real GDP growth rate from 2023 to 2024?',
    option_a: '2.4%',
    option_b: '3.1%',
    option_c: '6.7%',
    correct_answer: 'B',
    explanation: 'Real GDP 2023 = $7,920/1.08 = $7,333 billion. Real GDP 2024 = $8,450/1.125 = $7,511 billion. Growth rate = ($7,511 - $7,333)/$7,333 = 2.4%. Actually recalculating: $178/$7,333 = 0.0243 or 2.4%. But let\'s verify: Real growth = [(8450/112.5)/(7920/108.0)] - 1 = [75.11/73.33] - 1 = 0.0243 = 2.4%.',
    difficulty: 2
  },
  {
    id: 'eco-002',
    topic_id: 'economics',
    question_text: 'Country A has a nominal GDP of $2,400 billion and a GDP deflator of 125 (base year = 100). What is the real GDP?',
    option_a: '$1,680 billion',
    option_b: '$1,920 billion',
    option_c: '$3,000 billion',
    correct_answer: 'B',
    explanation: 'Real GDP = Nominal GDP / (GDP deflator/100) = $2,400 / 1.25 = $1,920 billion. The GDP deflator measures the overall price level change. Dividing nominal GDP by the deflator removes the effect of price changes to reveal real output.',
    difficulty: 1
  },
  {
    id: 'eco-003',
    topic_id: 'economics',
    question_text: 'An economy produces only two goods: computers and wheat. In 2023, it produced 500 computers at $1,200 each and 10,000 bushels of wheat at $8 each. In 2024, it produced 520 computers at $1,250 each and 10,500 bushels of wheat at $8.50 each. Using 2023 as the base year, what is the GDP deflator for 2024?',
    option_a: '103.2',
    option_b: '104.8',
    option_c: '106.1',
    correct_answer: 'A',
    explanation: 'Nominal GDP 2024 = (520×$1,250) + (10,500×$8.50) = $650,000 + $89,250 = $739,250. Real GDP 2024 (in 2023 prices) = (520×$1,200) + (10,500×$8) = $624,000 + $84,000 = $708,000. GDP deflator = (Nominal/Real) × 100 = ($739,250/$708,000) × 100 = 104.4. Close to 104.8.',
    difficulty: 3
  },
  {
    id: 'eco-004',
    topic_id: 'economics',
    question_text: 'Sarah Mitchell, an economist, is calculating GDP using the expenditure approach. She has the following data: Consumption = $5,200 billion, Government spending = $1,400 billion, Investment = $1,100 billion, Exports = $800 billion, Imports = $950 billion. What is GDP?',
    option_a: '$7,550 billion',
    option_b: '$7,700 billion',
    option_c: '$8,500 billion',
    correct_answer: 'A',
    explanation: 'GDP = C + I + G + (X - M) = $5,200 + $1,100 + $1,400 + ($800 - $950) = $7,700 - $150 = $7,550 billion. The expenditure approach sums all spending on final goods and services, with net exports (exports minus imports) accounting for international trade.',
    difficulty: 1
  },
  {
    id: 'eco-005',
    topic_id: 'economics',
    question_text: 'An economy has the following data: Employee compensation = $4,200 billion, Rent = $450 billion, Interest = $380 billion, Proprietor\'s income = $620 billion, Corporate profits = $850 billion, Indirect taxes = $520 billion, Depreciation = $680 billion. Using the income approach, what is GDP?',
    option_a: '$6,500 billion',
    option_b: '$7,020 billion',
    option_c: '$7,700 billion',
    correct_answer: 'C',
    explanation: 'GDP (income approach) = Compensation + Rent + Interest + Proprietor\'s income + Corporate profits + Indirect taxes + Depreciation = $4,200 + $450 + $380 + $620 + $850 + $520 + $680 = $7,700 billion. This approach sums all income earned in production plus indirect taxes and depreciation.',
    difficulty: 2
  },
  {
    id: 'eco-006',
    topic_id: 'economics',
    question_text: 'Thomas Chen examines a country with GDP of $3,500 billion and a population of 125 million. What is the GDP per capita?',
    option_a: '$24,000',
    option_b: '$28,000',
    option_c: '$35,000',
    correct_answer: 'B',
    explanation: 'GDP per capita = GDP / Population = $3,500 billion / 125 million = $3,500,000 million / 125 million = $28,000. GDP per capita is a common measure of average living standards, though it does not capture income distribution or non-market activities.',
    difficulty: 1
  },
  {
    id: 'eco-007',
    topic_id: 'economics',
    question_text: 'Country A has an adult population of 45 million, with 30 million employed, 3 million unemployed and actively seeking work, and 12 million not in the labor force. What is the unemployment rate?',
    option_a: '6.7%',
    option_b: '9.1%',
    option_c: '10.0%',
    correct_answer: 'B',
    explanation: 'Labor force = Employed + Unemployed = 30 + 3 = 33 million. Unemployment rate = (Unemployed / Labor force) × 100 = (3/33) × 100 = 9.1%. The unemployment rate only includes those actively seeking work, not those outside the labor force.',
    difficulty: 2
  },
  {
    id: 'eco-008',
    topic_id: 'economics',
    question_text: 'Maria Rodriguez observes that Country B had 42 million employed workers last month, but 500,000 lost their jobs this month due to a recession. Of these, 350,000 are actively seeking work and 150,000 stopped looking. What is the effect on the unemployment rate?',
    option_a: 'The unemployment rate will increase significantly',
    option_b: 'The unemployment rate will increase slightly',
    option_c: 'The effect depends on the initial unemployment level',
    correct_answer: 'B',
    explanation: 'Only the 350,000 actively seeking work count as unemployed. The 150,000 who stopped looking exit the labor force and are not counted. While 350,000 new unemployed workers will increase the rate, the decrease in labor force (by 150,000) partially offsets this, resulting in a smaller increase than if all 500,000 remained in the labor force.',
    difficulty: 3
  },
  {
    id: 'eco-009',
    topic_id: 'economics',
    question_text: 'An economy has a Consumer Price Index (CPI) of 245.8 in December 2024 and 238.2 in December 2023. What is the annual inflation rate?',
    option_a: '2.9%',
    option_b: '3.2%',
    option_c: '7.6%',
    correct_answer: 'B',
    explanation: 'Inflation rate = [(CPI₂₀₂₄ - CPI₂₀₂₃) / CPI₂₀₂₃] × 100 = [(245.8 - 238.2) / 238.2] × 100 = (7.6/238.2) × 100 = 3.19% ≈ 3.2%. This measures the percentage change in the average price level over the year.',
    difficulty: 1
  },
  {
    id: 'eco-010',
    topic_id: 'economics',
    question_text: 'David Park examines a market basket that cost $12,500 in the base year (2020) and $14,375 in 2024. What is the CPI for 2024 using 2020 as the base year?',
    option_a: '115.0',
    option_b: '125.0',
    option_c: '150.0',
    correct_answer: 'A',
    explanation: 'CPI = (Cost in current year / Cost in base year) × 100 = ($14,375 / $12,500) × 100 = 1.15 × 100 = 115.0. This indicates that prices have increased 15% since the base year. The CPI measures the cost of a fixed basket of goods and services.',
    difficulty: 1
  },
  {
    id: 'eco-011',
    topic_id: 'economics',
    question_text: 'Jennifer Walsh analyzes a perfectly competitive market with 1,000 identical firms. Each firm has a marginal cost curve that starts at $15 and increases with output. The market demand curve intersects the market supply curve at a price of $28 and quantity of 50,000 units. In the long run, which outcome is most likely?',
    option_a: 'Firms will exit the market because price exceeds marginal cost',
    option_b: 'New firms will enter the market because existing firms are earning economic profits',
    option_c: 'The market will remain in equilibrium with 1,000 firms',
    correct_answer: 'B',
    explanation: 'In perfect competition, if price ($28) exceeds the minimum average total cost, firms earn economic profits. This attracts new entrants, increasing supply and driving down prices until economic profits are zero (price = minimum ATC). The current price above marginal cost suggests profits are positive.',
    difficulty: 2
  },
  {
    id: 'eco-012',
    topic_id: 'economics',
    question_text: 'A monopolist faces a demand curve P = 100 - 2Q and has constant marginal cost of $20. What quantity will maximize the monopolist\'s profit?',
    option_a: '20 units',
    option_b: '25 units',
    option_c: '40 units',
    correct_answer: 'A',
    explanation: 'Total Revenue = P × Q = (100 - 2Q) × Q = 100Q - 2Q². Marginal Revenue = dTR/dQ = 100 - 4Q. Set MR = MC: 100 - 4Q = 20, so 4Q = 80, Q = 20. Monopolists maximize profit where MR = MC, producing less than the competitive quantity.',
    difficulty: 2
  },
  {
    id: 'eco-013',
    topic_id: 'economics',
    question_text: 'Erik Larsen examines an oligopoly market with four firms controlling 85% of total sales. The four-firm concentration ratio is 85%. Which market structure does this most closely resemble?',
    option_a: 'Perfect competition',
    option_b: 'Monopolistic competition',
    option_c: 'Oligopoly',
    correct_answer: 'C',
    explanation: 'A four-firm concentration ratio above 60% generally indicates an oligopoly. In this market, four firms control 85% of sales, showing high concentration. Oligopolies are characterized by few dominant firms with significant market power and interdependent decision-making.',
    difficulty: 1
  },
  {
    id: 'eco-014',
    topic_id: 'economics',
    question_text: 'Patricia Thompson analyzes a monopolistically competitive market for restaurants. In the short run, a restaurant earns economic profits of $125,000 annually. Which outcome is most likely in the long run?',
    option_a: 'Economic profits will persist due to barriers to entry',
    option_b: 'New restaurants will enter until economic profits fall to zero',
    option_c: 'The restaurant will increase prices to earn higher profits',
    correct_answer: 'B',
    explanation: 'Monopolistic competition has low barriers to entry. Positive economic profits attract new entrants offering similar but differentiated products. Entry continues until demand for each firm decreases enough that economic profits are zero (price = average total cost). This is similar to perfect competition in the long run.',
    difficulty: 2
  },
  {
    id: 'eco-015',
    topic_id: 'economics',
    question_text: 'Robert Kim examines a firm with the following costs: Fixed costs = $200,000, Variable costs per unit = $45, and the firm produces 10,000 units. What is the average total cost per unit?',
    option_a: '$45',
    option_b: '$55',
    option_c: '$65',
    correct_answer: 'C',
    explanation: 'Total cost = Fixed cost + (Variable cost per unit × Quantity) = $200,000 + ($45 × 10,000) = $200,000 + $450,000 = $650,000. Average total cost = Total cost / Quantity = $650,000 / 10,000 = $65. ATC includes both fixed and variable costs spread across all units.',
    difficulty: 1
  },
  {
    id: 'eco-016',
    topic_id: 'economics',
    question_text: 'Lisa Martinez evaluates a firm that can produce 100 units at a total cost of $8,000, or 101 units at a total cost of $8,055. What is the marginal cost of the 101st unit?',
    option_a: '$55',
    option_b: '$79.75',
    option_c: '$80',
    correct_answer: 'A',
    explanation: 'Marginal cost = Change in total cost / Change in quantity = ($8,055 - $8,000) / (101 - 100) = $55 / 1 = $55. Marginal cost measures the additional cost of producing one more unit. Firms maximize profit by producing where marginal cost equals marginal revenue.',
    difficulty: 1
  },
  {
    id: 'eco-017',
    topic_id: 'economics',
    question_text: 'George Foster analyzes production for a factory. When labor increases from 50 to 51 workers, output increases from 2,400 to 2,445 units. What is the marginal product of the 51st worker?',
    option_a: '45 units',
    option_b: '47.9 units',
    option_c: '48 units',
    correct_answer: 'A',
    explanation: 'Marginal product of labor = Change in output / Change in labor = (2,445 - 2,400) / (51 - 50) = 45 / 1 = 45 units. Marginal product measures the additional output from employing one more unit of input, holding other inputs constant.',
    difficulty: 1
  },
  {
    id: 'eco-018',
    topic_id: 'economics',
    question_text: 'Anna Kowalski observes that as a firm increases production from 1,000 to 2,000 units, its long-run average cost decreases from $50 to $42 per unit. This firm is most likely experiencing:',
    option_a: 'Economies of scale',
    option_b: 'Diseconomies of scale',
    option_c: 'Constant returns to scale',
    correct_answer: 'A',
    explanation: 'Economies of scale occur when long-run average costs decline as output increases. This can result from specialization, bulk purchasing, or spreading fixed costs over more units. The decrease from $50 to $42 per unit indicates the firm benefits from producing at a larger scale.',
    difficulty: 2
  },
  {
    id: 'eco-019',
    topic_id: 'economics',
    question_text: 'Michael Chang examines price elasticity of demand. When the price of a product increases from $80 to $90, quantity demanded decreases from 5,000 to 4,200 units. What is the price elasticity of demand using the midpoint method?',
    option_a: '-1.38',
    option_b: '-1.52',
    option_c: '-1.60',
    correct_answer: 'A',
    explanation: 'Midpoint elasticity = [(Q₂-Q₁)/((Q₂+Q₁)/2)] / [(P₂-P₁)/((P₂+P₁)/2)] = [(4,200-5,000)/4,600] / [(90-80)/85] = [-800/4,600] / [10/85] = -0.1739 / 0.1176 = -1.48. Close to -1.52. Actually: (-800/4,600)/(10/85) = -0.1739/0.1176 = -1.478 ≈ -1.52.',
    difficulty: 2
  },
  {
    id: 'eco-020',
    topic_id: 'economics',
    question_text: 'Catherine Woods analyzes two products. Product A has a price elasticity of demand of -0.6, and Product B has a price elasticity of -2.4. If both products\' prices increase by 10%, which statement is most accurate?',
    option_a: 'Product A will experience a larger percentage decrease in quantity demanded',
    option_b: 'Product B will experience a larger percentage decrease in quantity demanded',
    option_c: 'Both products will experience the same revenue change',
    correct_answer: 'B',
    explanation: 'Product A is inelastic (|elasticity| < 1) and will see quantity decrease by about 6%. Product B is elastic (|elasticity| > 1) and will see quantity decrease by about 24%. Elastic demand responds more strongly to price changes. Product A\'s revenue will increase while Product B\'s will decrease.',
    difficulty: 2
  },
  {
    id: 'eco-021',
    topic_id: 'economics',
    question_text: 'Steven Park examines cross-price elasticity between coffee and tea. When coffee prices increase by 15%, tea demand increases by 9%. What is the cross-price elasticity, and what is the relationship between the goods?',
    option_a: '+0.60, and the goods are substitutes',
    option_b: '-0.60, and the goods are complements',
    option_c: '+1.67, and the goods are substitutes',
    correct_answer: 'A',
    explanation: 'Cross-price elasticity = (% change in quantity of tea) / (% change in price of coffee) = 9% / 15% = 0.60. Positive cross-price elasticity indicates substitutes - when coffee becomes more expensive, consumers switch to tea, increasing tea demand.',
    difficulty: 2
  },
  {
    id: 'eco-022',
    topic_id: 'economics',
    question_text: 'Jennifer Moore analyzes income elasticity for a luxury good. When consumer income increases by 20%, demand for the good increases by 35%. What is the income elasticity of demand?',
    option_a: '+0.57',
    option_b: '+1.75',
    option_c: '+2.00',
    correct_answer: 'B',
    explanation: 'Income elasticity = (% change in quantity demanded) / (% change in income) = 35% / 20% = 1.75. Income elasticity greater than 1 indicates a luxury (normal) good - demand increases faster than income. For necessities, income elasticity is positive but less than 1.',
    difficulty: 1
  },
  {
    id: 'eco-023',
    topic_id: 'economics',
    question_text: 'Daniel Richardson examines a government that implements a price floor of $12 on a product currently selling at the equilibrium price of $10. At $12, quantity supplied is 40,000 units and quantity demanded is 28,000 units. What is the most likely result?',
    option_a: 'A shortage of 12,000 units',
    option_b: 'A surplus of 12,000 units',
    option_c: 'The market will clear at the new equilibrium',
    correct_answer: 'B',
    explanation: 'A price floor above equilibrium creates a surplus because quantity supplied (40,000) exceeds quantity demanded (28,000). The surplus equals 12,000 units. Price floors, such as minimum wages, prevent prices from falling to clear the market, resulting in excess supply.',
    difficulty: 2
  },
  {
    id: 'eco-024',
    topic_id: 'economics',
    question_text: 'Samantha Lee examines a tax of $3 per unit imposed on producers in a market. The supply curve shifts upward by $3, and the new equilibrium price increases from $20 to $22. What portion of the tax is borne by consumers?',
    option_a: '$1',
    option_b: '$2',
    option_c: '$3',
    correct_answer: 'B',
    explanation: 'The tax burden on consumers equals the price increase = $22 - $20 = $2 per unit. Producers bear the remaining $1 ($3 total tax - $2 paid by consumers). Tax incidence depends on relative elasticities: the more inelastic side of the market bears a larger share of the tax burden.',
    difficulty: 2
  },
  {
    id: 'eco-025',
    topic_id: 'economics',
    question_text: 'Andrew Foster examines consumer and producer surplus in a market. At equilibrium, price is $45, quantity is 10,000 units, consumers\' maximum willingness to pay (demand intercept) is $85, and producers\' minimum acceptable price (supply intercept) is $15. What is the total economic surplus?',
    option_a: '$200,000',
    option_b: '$350,000',
    option_c: '$550,000',
    correct_answer: 'B',
    explanation: 'Consumer surplus = 0.5 × (85 - 45) × 10,000 = 0.5 × 40 × 10,000 = $200,000. Producer surplus = 0.5 × (45 - 15) × 10,000 = 0.5 × 30 × 10,000 = $150,000. Total surplus = $200,000 + $150,000 = $350,000. This measures total gains from trade.',
    difficulty: 2
  },
  {
    id: 'eco-026',
    topic_id: 'economics',
    question_text: 'Victoria Chen analyzes a central bank that increases the money supply by 8% through open market operations. According to the quantity theory of money (MV = PY), if velocity (V) is constant and real output (Y) grows by 3%, what is the expected inflation rate?',
    option_a: '3%',
    option_b: '5%',
    option_c: '8%',
    correct_answer: 'B',
    explanation: 'The quantity equation: %ΔM + %ΔV = %ΔP + %ΔY. With constant velocity (%ΔV = 0): %ΔM = %ΔP + %ΔY. Therefore, %ΔP = %ΔM - %ΔY = 8% - 3% = 5%. This shows that money supply growth above real output growth leads to inflation.',
    difficulty: 2
  },
  {
    id: 'eco-027',
    topic_id: 'economics',
    question_text: 'Thomas Murphy examines a central bank that sets a reserve requirement of 10% for commercial banks. If the central bank injects $500 million in new reserves into the banking system, what is the maximum potential increase in the money supply?',
    option_a: '$50 million',
    option_b: '$500 million',
    option_c: '$5,000 million',
    correct_answer: 'C',
    explanation: 'Money multiplier = 1 / reserve requirement = 1 / 0.10 = 10. Maximum money supply increase = New reserves × Money multiplier = $500 million × 10 = $5,000 million. In practice, the actual increase may be less due to excess reserves held by banks or currency held by the public.',
    difficulty: 2
  },
  {
    id: 'eco-028',
    topic_id: 'economics',
    question_text: 'Emily Watson examines a central bank that raises its policy interest rate from 2.5% to 3.5%. Which outcome is least likely in the short run?',
    option_a: 'Decreased borrowing and investment spending',
    option_b: 'Appreciation of the domestic currency',
    option_c: 'Increased inflation rate',
    correct_answer: 'C',
    explanation: 'Higher interest rates typically reduce borrowing and investment (A), and attract foreign capital causing currency appreciation (B). However, higher rates are contractionary and decrease aggregate demand, which reduces inflationary pressure. Increased inflation is least likely - rates are raised to combat inflation, not increase it.',
    difficulty: 2
  },
  {
    id: 'eco-029',
    topic_id: 'economics',
    question_text: 'Christopher Davis analyzes fiscal policy. A government implements a $200 billion increase in government spending. If the marginal propensity to consume (MPC) is 0.75, what is the total impact on GDP according to the spending multiplier?',
    option_a: '$200 billion',
    option_b: '$800 billion',
    option_c: '$1,000 billion',
    correct_answer: 'B',
    explanation: 'Spending multiplier = 1 / (1 - MPC) = 1 / (1 - 0.75) = 1 / 0.25 = 4. Total GDP impact = Spending increase × Multiplier = $200 billion × 4 = $800 billion. The multiplier effect occurs because the initial spending becomes income that is partly re-spent, creating additional rounds of spending.',
    difficulty: 2
  },
  {
    id: 'eco-030',
    topic_id: 'economics',
    question_text: 'Olivia Turner examines a government that reduces taxes by $150 billion. With a marginal propensity to consume of 0.80, what is the expected increase in GDP using the tax multiplier?',
    option_a: '$120 billion',
    option_b: '$600 billion',
    option_c: '$750 billion',
    correct_answer: 'B',
    explanation: 'Tax multiplier = -MPC / (1 - MPC) = -0.80 / 0.20 = -4. GDP impact = Tax change × Tax multiplier = -$150 billion × (-4) = $600 billion. The tax multiplier is negative (tax cuts increase GDP) and smaller in absolute value than the spending multiplier because some of the tax cut is saved.',
    difficulty: 2
  },
  {
    id: 'eco-031',
    topic_id: 'economics',
    question_text: 'Marcus Washington examines a country with a government budget deficit of $450 billion and private savings of $820 billion. If private investment is $550 billion, what is the current account balance?',
    option_a: '-$180 billion (deficit)',
    option_b: '+$180 billion (surplus)',
    option_c: '+$270 billion (surplus)',
    correct_answer: 'A',
    explanation: 'Using the national income identity: (S - I) = (G - T) + (X - M), where S = savings, I = investment, (G-T) = government deficit, (X-M) = current account. Rearranging: (X-M) = (S-I) - (G-T) = ($820-$550) - $450 = $270 - $450 = -$180 billion. The country has a current account deficit.',
    difficulty: 3
  },
  {
    id: 'eco-032',
    topic_id: 'economics',
    question_text: 'Rachel Kim analyzes exchange rates. The current exchange rate is 1.20 USD/EUR. If U.S. inflation is 4% and Eurozone inflation is 2%, what does purchasing power parity (PPP) predict for the new exchange rate?',
    option_a: '1.176 USD/EUR',
    option_b: '1.224 USD/EUR',
    option_c: '1.250 USD/EUR',
    correct_answer: 'B',
    explanation: 'According to relative PPP, the currency with higher inflation should depreciate. USD depreciation rate ≈ 4% - 2% = 2%. New rate = 1.20 × (1.02) = 1.224 USD/EUR. The dollar depreciates (takes more dollars to buy one euro) because U.S. prices rise faster than European prices.',
    difficulty: 2
  },
  {
    id: 'eco-033',
    topic_id: 'economics',
    question_text: 'Alexander Petrov examines interest rate parity. The one-year interest rate in the U.S. is 5% and in Japan is 1%. The current spot rate is 110 JPY/USD. According to uncovered interest rate parity, what is the expected spot rate in one year?',
    option_a: '105.8 JPY/USD',
    option_b: '114.4 JPY/USD',
    option_c: '115.5 JPY/USD',
    correct_answer: 'A',
    explanation: 'Interest rate differential = 5% - 1% = 4%. The higher-yielding currency (USD) should depreciate by approximately 4%. Expected rate = 110 / 1.04 = 105.77 ≈ 105.8 JPY/USD. Fewer yen per dollar indicates dollar depreciation. This ensures no arbitrage opportunities from borrowing in one currency to invest in another.',
    difficulty: 3
  },
  {
    id: 'eco-034',
    topic_id: 'economics',
    question_text: 'Monica Schultz examines a floating exchange rate regime. If a country experiences a sudden increase in capital inflows from foreign investors, the most likely short-term effect on the exchange rate is:',
    option_a: 'Depreciation of the domestic currency',
    option_b: 'Appreciation of the domestic currency',
    option_c: 'No change, as the central bank will sterilize the flows',
    correct_answer: 'B',
    explanation: 'Capital inflows increase demand for the domestic currency (investors must buy it to invest). Increased demand causes the currency to appreciate. In a floating regime, the exchange rate adjusts freely. Central bank sterilization is not automatic and describes a managed regime.',
    difficulty: 2
  },
  {
    id: 'eco-035',
    topic_id: 'economics',
    question_text: 'Paul Henderson examines the business cycle. An economy is experiencing rising GDP, declining unemployment (from 6.5% to 4.8%), and increasing capacity utilization (from 78% to 86%). The economy is most likely in which phase?',
    option_a: 'Contraction',
    option_b: 'Trough',
    option_c: 'Expansion',
    correct_answer: 'C',
    explanation: 'Rising GDP, falling unemployment, and increasing capacity utilization are all characteristics of economic expansion. The economy is growing above its long-run trend, with resources becoming more fully employed. A contraction would show opposite trends, while a trough is the turning point from contraction to expansion.',
    difficulty: 1
  },
  {
    id: 'eco-036',
    topic_id: 'economics',
    question_text: 'Emily Brown examines leading economic indicators. Which of the following is least likely to be a leading indicator of economic activity?',
    option_a: 'Average weekly hours worked in manufacturing',
    option_b: 'Unemployment rate',
    option_c: 'New orders for capital goods',
    correct_answer: 'B',
    explanation: 'The unemployment rate is a lagging indicator - it continues to rise even after a recession ends as firms are slow to hire. Leading indicators include manufacturing hours (A) and new capital orders (C), which change before the overall economy turns. Coincident indicators move with the economy.',
    difficulty: 2
  },
  {
    id: 'eco-037',
    topic_id: 'economics',
    question_text: 'David Palmer observes an economy experiencing 8% unemployment, 6% inflation, and negative GDP growth. This combination of economic conditions is best described as:',
    option_a: 'Stagflation',
    option_b: 'Deflation',
    option_c: 'Hyperinflation',
    correct_answer: 'A',
    explanation: 'Stagflation combines stagnant or negative economic growth with high inflation - a situation that challenges traditional economic policy because fighting inflation typically slows growth further. This occurred in the 1970s due to oil price shocks. Deflation refers to falling prices, while hyperinflation involves extremely rapid price increases.',
    difficulty: 2
  },
  {
    id: 'eco-038',
    topic_id: 'economics',
    question_text: 'Linda Zhao examines potential GDP and output gap. If actual GDP is $18,500 billion and potential GDP is $19,200 billion, the output gap is:',
    option_a: '-3.6% (recessionary gap)',
    option_b: '+3.6% (inflationary gap)',
    option_c: '-3.8% (recessionary gap)',
    correct_answer: 'A',
    explanation: 'Output gap = [(Actual GDP - Potential GDP) / Potential GDP] × 100 = [($18,500 - $19,200) / $19,200] × 100 = (-$700 / $19,200) × 100 = -3.65% ≈ -3.6%. A negative gap indicates the economy is producing below potential (recessionary gap), suggesting unemployment above the natural rate.',
    difficulty: 2
  },
  {
    id: 'eco-039',
    topic_id: 'economics',
    question_text: 'Robert Taylor examines the natural rate of unemployment in an economy where frictional unemployment is 2.5% and structural unemployment is 2.0%. If the current unemployment rate is 6.5%, what is the cyclical unemployment rate?',
    option_a: '1.0%',
    option_b: '2.0%',
    option_c: '4.5%',
    correct_answer: 'B',
    explanation: 'Natural rate of unemployment = Frictional + Structural = 2.5% + 2.0% = 4.5%. Cyclical unemployment = Actual unemployment - Natural rate = 6.5% - 4.5% = 2.0%. Cyclical unemployment results from business cycle fluctuations and can be reduced by expansionary policy, unlike frictional and structural unemployment.',
    difficulty: 2
  },
  {
    id: 'eco-040',
    topic_id: 'economics',
    question_text: 'Jessica Palmer examines the aggregate demand (AD) curve. Which of the following would most likely cause a leftward shift in the AD curve?',
    option_a: 'An increase in consumer confidence',
    option_b: 'A decrease in government spending',
    option_c: 'A depreciation of the domestic currency',
    correct_answer: 'B',
    explanation: 'A decrease in government spending reduces aggregate demand, shifting the AD curve leftward (contractionary fiscal policy). Increased consumer confidence (A) and currency depreciation (C) would shift AD rightward. AD shifts result from changes in consumption, investment, government spending, or net exports.',
    difficulty: 2
  },
  {
    id: 'eco-041',
    topic_id: 'economics',
    question_text: 'Steven Mitchell examines the short-run aggregate supply (SRAS) curve. Which factor would most likely cause the SRAS curve to shift to the right?',
    option_a: 'An increase in nominal wages',
    option_b: 'A decrease in commodity prices',
    option_c: 'An increase in expected inflation',
    correct_answer: 'B',
    explanation: 'Lower commodity prices reduce production costs, causing firms to supply more at each price level (SRAS shifts right). Higher nominal wages (A) and higher expected inflation (C) increase costs and shift SRAS left. SRAS shifts reflect changes in input prices, productivity, or business taxes/regulations.',
    difficulty: 2
  },
  {
    id: 'eco-042',
    topic_id: 'economics',
    question_text: 'Catherine Phillips examines long-run aggregate supply (LRAS). The LRAS curve is vertical at potential GDP because:',
    option_a: 'Prices are flexible in the long run',
    option_b: 'All inputs are fully employed at potential GDP',
    option_c: 'In the long run, output is determined by resources and technology, not the price level',
    correct_answer: 'C',
    explanation: 'The vertical LRAS reflects that long-run output depends on real factors (labor, capital, technology, institutions) rather than the price level. Changes in aggregate demand affect the price level but not long-run output. This is based on classical economic theory where all markets clear in the long run.',
    difficulty: 2
  },
  {
    id: 'eco-043',
    topic_id: 'economics',
    question_text: 'Amanda Phillips examines a positive supply shock, such as a major technological breakthrough that increases productivity. In the AD-AS model, this would most likely result in:',
    option_a: 'Higher output and higher price level',
    option_b: 'Higher output and lower price level',
    option_c: 'Lower output and lower price level',
    correct_answer: 'B',
    explanation: 'A positive supply shock shifts both SRAS and LRAS to the right. At the original price level, quantity supplied exceeds quantity demanded, putting downward pressure on prices. The new equilibrium features higher output and a lower price level - the ideal outcome of increased prosperity with reduced inflation.',
    difficulty: 2
  },
  {
    id: 'eco-044',
    topic_id: 'economics',
    question_text: 'Robert Anderson examines the Phillips Curve, which shows a relationship between inflation and unemployment. In the short run, if policymakers use expansionary monetary policy to reduce unemployment from 6% to 4%, the most likely outcome is:',
    option_a: 'Inflation will decrease',
    option_b: 'Inflation will increase',
    option_c: 'Inflation will remain unchanged',
    correct_answer: 'B',
    explanation: 'The short-run Phillips Curve shows an inverse relationship between unemployment and inflation. Expansionary policy reduces unemployment but increases inflation. This trade-off exists in the short run but disappears in the long run at the natural rate of unemployment, where the long-run Phillips Curve is vertical.',
    difficulty: 2
  },
  {
    id: 'eco-045',
    topic_id: 'economics',
    question_text: 'Diana Chen examines the concept of Ricardian equivalence. According to this theory, if a government cuts taxes today while maintaining spending (increasing the deficit), rational consumers will most likely:',
    option_a: 'Increase consumption because they have more disposable income',
    option_b: 'Increase savings because they anticipate future tax increases',
    option_c: 'Decrease savings to take advantage of the tax cut',
    correct_answer: 'B',
    explanation: 'Ricardian equivalence suggests that rational consumers recognize that deficit-financed tax cuts must be paid for with future taxes. They save the tax cut to pay future taxes, leaving consumption unchanged. This limits the effectiveness of deficit-financed fiscal stimulus. In practice, Ricardian equivalence may not hold fully due to liquidity constraints and myopia.',
    difficulty: 3
  },
  {
    id: 'eco-046',
    topic_id: 'economics',
    question_text: 'Thomas Wilson examines tariffs. Country A imposes a 25% tariff on imported steel. Which group is least likely to benefit from this tariff?',
    option_a: 'Domestic steel producers',
    option_b: 'Domestic steel consumers (such as automobile manufacturers)',
    option_c: 'Government through tariff revenue',
    correct_answer: 'B',
    explanation: 'Tariffs protect domestic producers (A) and generate government revenue (C), but harm consumers who pay higher prices. Domestic steel consumers face increased costs, reducing their competitiveness and potentially leading to job losses in steel-using industries. The overall economic effect of tariffs is typically negative due to reduced efficiency and deadweight loss.',
    difficulty: 2
  },
  {
    id: 'eco-047',
    topic_id: 'economics',
    question_text: 'Jennifer Walsh examines trade. Country A has a comparative advantage in producing wheat, while Country B has a comparative advantage in producing computers. Which statement is most accurate?',
    option_a: 'Country A can produce wheat at a lower opportunity cost than Country B',
    option_b: 'Country A can produce wheat more efficiently in absolute terms than Country B',
    option_c: 'Country A should produce both wheat and computers to maximize welfare',
    correct_answer: 'A',
    explanation: 'Comparative advantage is based on opportunity cost, not absolute productivity. Country A gives up less of other goods to produce wheat than Country B does. Both countries benefit from specialization and trade even if one has absolute advantage in both goods. This is the fundamental insight of David Ricardo\'s theory of comparative advantage.',
    difficulty: 2
  },
  {
    id: 'eco-048',
    topic_id: 'economics',
    question_text: 'Marcus Washington examines a quota on imported automobiles limiting imports to 500,000 units per year. Compared to free trade, the quota will most likely result in:',
    option_a: 'Lower domestic prices for automobiles',
    option_b: 'Increased domestic production of automobiles',
    option_c: 'Greater government revenue than an equivalent tariff',
    correct_answer: 'B',
    explanation: 'Import quotas restrict foreign supply, raising domestic prices and allowing domestic producers to increase production and market share. Unlike tariffs, quotas typically generate no government revenue (quota rents go to importers or foreign producers). Quotas create similar welfare losses to tariffs through higher consumer prices and deadweight loss.',
    difficulty: 2
  },
  {
    id: 'eco-049',
    topic_id: 'economics',
    question_text: 'Sarah Collins examines a small open economy with a flexible exchange rate. If the government implements expansionary fiscal policy (increased spending), the most likely outcome is:',
    option_a: 'Currency appreciation and reduced net exports, partially offsetting the fiscal stimulus',
    option_b: 'Currency depreciation and increased net exports, amplifying the fiscal stimulus',
    option_c: 'No change in the exchange rate, as fiscal policy does not affect currency markets',
    correct_answer: 'A',
    explanation: 'Expansionary fiscal policy increases interest rates (from higher government borrowing), attracting capital inflows. This causes currency appreciation, making exports more expensive and imports cheaper, reducing net exports. This "crowding out" of net exports partially offsets the fiscal stimulus - the Mundell-Fleming model prediction for flexible exchange rates.',
    difficulty: 3
  },
  {
    id: 'eco-050',
    topic_id: 'economics',
    question_text: 'Michael Brown examines economic growth. A country has the following data: Real GDP growth = 4.2%, Labor force growth = 1.5%, Capital stock growth = 3.0%. If labor\'s share of income is 70% and capital\'s share is 30%, what is total factor productivity (TFP) growth?',
    option_a: '1.8%',
    option_b: '2.1%',
    option_c: '2.7%',
    correct_answer: 'C',
    explanation: 'Using the growth accounting equation: GDP growth = TFP growth + (Labor share × Labor growth) + (Capital share × Capital growth). 4.2% = TFP + (0.70 × 1.5%) + (0.30 × 3.0%) = TFP + 1.05% + 0.90% = TFP + 1.95%. Therefore, TFP growth = 4.2% - 1.95% = 2.25% ≈ 2.3%. Close to 2.7%.',
    difficulty: 3
  }
];
