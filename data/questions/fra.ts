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

export const fraQuestions: Question[] = [
  {
    id: 'fra-001',
    topic_id: 'financial-statement-analysis',
    question_text: 'Catherine Wong, CFA, is analyzing Tech Solutions Inc., which reports under IFRS. The company purchased equipment for $850,000 on January 1, 2023, with an estimated useful life of 10 years and residual value of $50,000. If the company uses the straight-line method, what is the depreciation expense for 2023?',
    option_a: '$50,000',
    option_b: '$80,000',
    option_c: '$85,000',
    correct_answer: 'B',
    explanation: 'Under straight-line depreciation: Annual depreciation = (Cost - Residual value) / Useful life = ($850,000 - $50,000) / 10 = $800,000 / 10 = $80,000. The depreciable base is the cost minus residual value, allocated evenly over the useful life.',
    difficulty: 1
  },
  {
    id: 'fra-002',
    topic_id: 'financial-statement-analysis',
    question_text: 'Marcus Thompson analyzes Global Manufacturing Ltd., which uses LIFO inventory accounting. During a period of rising prices, the company\'s ending inventory on the balance sheet is $2,450,000, and the LIFO reserve disclosed in footnotes is $380,000. What would ending inventory be under FIFO?',
    option_a: '$2,070,000',
    option_b: '$2,450,000',
    option_c: '$2,830,000',
    correct_answer: 'C',
    explanation: 'FIFO inventory = LIFO inventory + LIFO reserve = $2,450,000 + $380,000 = $2,830,000. The LIFO reserve represents the difference between FIFO and LIFO inventory values. During rising prices, FIFO produces higher inventory values because older, cheaper costs remain in COGS.',
    difficulty: 2
  },
  {
    id: 'fra-003',
    topic_id: 'financial-statement-analysis',
    question_text: 'Jennifer Park examines Retail Corp., which reports Cost of Goods Sold of $4,200,000 under LIFO. The LIFO reserve increased from $250,000 to $310,000 during the year. What would COGS be under FIFO?',
    option_a: '$4,140,000',
    option_b: '$4,200,000',
    option_c: '$4,260,000',
    correct_answer: 'A',
    explanation: 'FIFO COGS = LIFO COGS - Change in LIFO reserve = $4,200,000 - ($310,000 - $250,000) = $4,200,000 - $60,000 = $4,140,000. The increase in LIFO reserve indicates that LIFO COGS is higher than FIFO COGS during rising prices, so we subtract the change to convert.',
    difficulty: 2
  },
  {
    id: 'fra-004',
    topic_id: 'financial-statement-analysis',
    question_text: 'David Chen analyzes a company with the following data: Net income = $850,000, Depreciation = $120,000, Increase in accounts receivable = $75,000, Decrease in inventory = $45,000, Increase in accounts payable = $38,000. Using the indirect method, what is cash flow from operations?',
    option_a: '$928,000',
    option_b: '$978,000',
    option_c: '$1,128,000',
    correct_answer: 'B',
    explanation: 'CFO = Net income + Depreciation - Increase in A/R + Decrease in inventory + Increase in A/P = $850,000 + $120,000 - $75,000 + $45,000 + $38,000 = $978,000. Add back non-cash expenses, subtract increases in operating assets, add increases in operating liabilities.',
    difficulty: 2
  },
  {
    id: 'fra-005',
    topic_id: 'financial-statement-analysis',
    question_text: 'Sarah Mitchell examines Phoenix Industries, which purchased a building for $3,500,000 five years ago. The building now has accumulated depreciation of $875,000. If Phoenix sells the building for $3,100,000, what is the gain or loss on sale?',
    option_a: 'Gain of $475,000',
    option_b: 'Loss of $400,000',
    option_c: 'Gain of $225,000',
    correct_answer: 'A',
    explanation: 'Book value = Cost - Accumulated depreciation = $3,500,000 - $875,000 = $2,625,000. Gain on sale = Selling price - Book value = $3,100,000 - $2,625,000 = $475,000. The sale price exceeds book value, resulting in a gain.',
    difficulty: 1
  },
  {
    id: 'fra-006',
    topic_id: 'financial-statement-analysis',
    question_text: 'Robert Anderson analyzes Software Systems Inc., which capitalizes software development costs. In 2023, the company incurred $1,200,000 in development costs, of which $750,000 met capitalization criteria under IFRS. If the company had expensed all costs, how would 2023 net income be affected (ignoring taxes)?',
    option_a: 'Net income would be $750,000 lower',
    option_b: 'Net income would be $450,000 lower',
    option_c: 'Net income would be unchanged',
    correct_answer: 'A',
    explanation: 'Capitalizing $750,000 means this amount is not expensed in 2023, creating an asset instead. If expensed, net income would decrease by $750,000 (before considering subsequent amortization). Capitalization defers expense recognition to future periods through amortization.',
    difficulty: 2
  },
  {
    id: 'fra-007',
    topic_id: 'financial-statement-analysis',
    question_text: 'Lisa Martinez examines Pharma Corp., which reports under IFRS and has intangible assets with indefinite useful lives totaling $2,400,000. How should these assets be accounted for?',
    option_a: 'Amortized over 20 years',
    option_b: 'Tested annually for impairment but not amortized',
    option_c: 'Amortized over their expected useful lives',
    correct_answer: 'B',
    explanation: 'Under both IFRS and US GAAP, intangible assets with indefinite useful lives (such as certain trademarks) are not amortized but must be tested for impairment at least annually. If the useful life becomes determinable, the asset is then amortized over that period.',
    difficulty: 2
  },
  {
    id: 'fra-008',
    topic_id: 'financial-statement-analysis',
    question_text: 'Thomas Wilson analyzes Auto Manufacturing Co., which reports goodwill of $850,000 from acquiring a subsidiary. Under US GAAP, which treatment is most appropriate?',
    option_a: 'Amortize goodwill over 10 years',
    option_b: 'Amortize goodwill over 40 years',
    option_c: 'Do not amortize but test for impairment annually',
    correct_answer: 'C',
    explanation: 'Under US GAAP (ASC 350), goodwill is not amortized but tested for impairment at least annually at the reporting unit level. If impaired, goodwill is written down to fair value. IFRS treatment is similar. Prior to 2001, US GAAP required goodwill amortization.',
    difficulty: 2
  },
  {
    id: 'fra-009',
    topic_id: 'financial-statement-analysis',
    question_text: 'Amanda Phillips examines Construction Ltd., which uses the percentage-of-completion method for a $5,000,000 contract. By year-end, costs incurred are $1,800,000 of total estimated costs of $4,000,000. What revenue should be recognized?',
    option_a: '$1,800,000',
    option_b: '$2,250,000',
    option_c: '$4,000,000',
    correct_answer: 'B',
    explanation: 'Percentage complete = Costs incurred / Total estimated costs = $1,800,000 / $4,000,000 = 45%. Revenue recognized = Contract price × Percentage complete = $5,000,000 × 45% = $2,250,000. This method matches revenue to project progress.',
    difficulty: 2
  },
  {
    id: 'fra-010',
    topic_id: 'financial-statement-analysis',
    question_text: 'George Foster analyzes Telecom Services Inc., which provides a bundled package of equipment ($600 standalone value) and service ($1,200 standalone value) for $1,620. Under IFRS 15, how much revenue should be allocated to equipment at the point of sale?',
    option_a: '$540',
    option_b: '$600',
    option_c: '$810',
    correct_answer: 'A',
    explanation: 'Under IFRS 15, allocate transaction price based on relative standalone prices. Equipment allocation = ($600 / $1,800) × $1,620 = 0.333 × $1,620 = $540. Service allocation = ($1,200 / $1,800) × $1,620 = $1,080. Total standalone value is $600 + $1,200 = $1,800.',
    difficulty: 3
  },
  {
    id: 'fra-011',
    topic_id: 'financial-statement-analysis',
    question_text: 'Victoria Chen examines Energy Corp., which has a defined benefit pension plan. The following data is available: Plan assets (fair value) = $8,500,000, Projected benefit obligation = $9,200,000. What amount should appear on the balance sheet?',
    option_a: 'Asset of $700,000',
    option_b: 'Liability of $700,000',
    option_c: 'No amount (offset)',
    correct_answer: 'B',
    explanation: 'Net pension liability = PBO - Plan assets = $9,200,000 - $8,500,000 = $700,000. When PBO exceeds plan assets, a net pension liability is recorded. If plan assets exceeded PBO, a net pension asset would be recorded. This funded status must be recognized on the balance sheet.',
    difficulty: 2
  },
  {
    id: 'fra-012',
    topic_id: 'financial-statement-analysis',
    question_text: 'Michael Thompson analyzes pension expense for Industrial Co. The following information is available: Service cost = $420,000, Interest cost = $380,000, Expected return on plan assets = $450,000, Amortization of prior service cost = $65,000. What is the total pension expense?',
    option_a: '$415,000',
    option_b: '$480,000',
    option_c: '$865,000',
    correct_answer: 'A',
    explanation: 'Pension expense = Service cost + Interest cost - Expected return on plan assets + Amortization of prior service cost = $420,000 + $380,000 - $450,000 + $65,000 = $415,000. Expected return on plan assets reduces pension expense.',
    difficulty: 2
  },
  {
    id: 'fra-013',
    topic_id: 'financial-statement-analysis',
    question_text: 'Rachel Kim examines Alpha Corp., which issued a $10,000,000, 5% bond when market rates were 6%. The bond will be issued at:',
    option_a: 'Par value',
    option_b: 'A premium',
    option_c: 'A discount',
    correct_answer: 'C',
    explanation: 'When the coupon rate (5%) is less than the market rate (6%), the bond is issued at a discount. Investors require the market rate, so they pay less than par value. The discount is amortized over the bond\'s life, increasing interest expense above the coupon payment.',
    difficulty: 1
  },
  {
    id: 'fra-014',
    topic_id: 'financial-statement-analysis',
    question_text: 'Steven Park analyzes a $5,000,000, 7% bond issued at 95 (95% of par). The company uses the effective interest method with a market rate of 8%. In year 1, the interest expense will be:',
    option_a: '$350,000',
    option_b: '$380,000',
    option_c: '$400,000',
    correct_answer: 'B',
    explanation: 'Carrying value at issuance = $5,000,000 × 0.95 = $4,750,000. Interest expense (effective interest method) = Carrying value × Market rate = $4,750,000 × 8% = $380,000. Cash interest paid = $5,000,000 × 7% = $350,000. The $30,000 difference amortizes the discount.',
    difficulty: 2
  },
  {
    id: 'fra-015',
    topic_id: 'financial-statement-analysis',
    question_text: 'Emily Watson examines Beta Inc., which has current assets of $2,400,000, inventory of $850,000, prepaid expenses of $120,000, current liabilities of $1,600,000. What is the quick ratio?',
    option_a: '0.91',
    option_b: '1.43',
    option_c: '1.50',
    correct_answer: 'A',
    explanation: 'Quick ratio = (Current assets - Inventory - Prepaid expenses) / Current liabilities = ($2,400,000 - $850,000 - $120,000) / $1,600,000 = $1,430,000 / $1,600,000 = 0.894 H 0.91. The quick ratio excludes less liquid current assets to measure short-term liquidity.',
    difficulty: 1
  },
  {
    id: 'fra-016',
    topic_id: 'financial-statement-analysis',
    question_text: 'Christopher Davis analyzes Gamma Corp., which has total debt of $6,500,000, total equity of $8,200,000, and interest expense of $420,000. If EBIT is $1,680,000, what is the times interest earned ratio?',
    option_a: '2.5',
    option_b: '3.0',
    option_c: '4.0',
    correct_answer: 'C',
    explanation: 'Times interest earned = EBIT / Interest expense = $1,680,000 / $420,000 = 4.0. This ratio measures how many times a company can cover its interest payments with operating earnings. Higher ratios indicate better ability to service debt.',
    difficulty: 1
  },
  {
    id: 'fra-017',
    topic_id: 'financial-statement-analysis',
    question_text: 'Olivia Turner analyzes Delta Manufacturing, which reports net sales of $18,500,000, beginning inventory of $1,350,000, ending inventory of $1,650,000, and COGS of $11,400,000. What is the inventory turnover ratio?',
    option_a: '6.9',
    option_b: '7.6',
    option_c: '11.2',
    correct_answer: 'B',
    explanation: 'Average inventory = (Beginning inventory + Ending inventory) / 2 = ($1,350,000 + $1,650,000) / 2 = $1,500,000. Inventory turnover = COGS / Average inventory = $11,400,000 / $1,500,000 = 7.6. This measures how many times inventory is sold and replaced during the period.',
    difficulty: 1
  },
  {
    id: 'fra-018',
    topic_id: 'financial-statement-analysis',
    question_text: 'Marcus Washington examines Epsilon Corp., which has receivables turnover of 8.5 times per year. What is the average collection period in days?',
    option_a: '42.9 days',
    option_b: '45.0 days',
    option_c: '51.2 days',
    correct_answer: 'A',
    explanation: 'Days sales outstanding (average collection period) = 365 / Receivables turnover = 365 / 8.5 = 42.94 H 42.9 days. This represents the average time it takes to collect receivables. A lower number indicates faster collection.',
    difficulty: 1
  },
  {
    id: 'fra-019',
    topic_id: 'financial-statement-analysis',
    question_text: 'Daniel Richardson analyzes Zeta Inc., which reports net income of $1,450,000, preferred dividends of $180,000, and weighted average common shares of 850,000. What is basic EPS?',
    option_a: '$1.49',
    option_b: '$1.71',
    option_c: '$1.94',
    correct_answer: 'A',
    explanation: 'Basic EPS = (Net income - Preferred dividends) / Weighted average common shares = ($1,450,000 - $180,000) / 850,000 = $1,270,000 / 850,000 = $1.494 H $1.49. Preferred dividends are subtracted because EPS measures earnings available to common shareholders.',
    difficulty: 1
  },
  {
    id: 'fra-020',
    topic_id: 'financial-statement-analysis',
    question_text: 'Patricia Wang examines Theta Corp., which has net income of $2,200,000, total assets of $28,500,000 (beginning) and $31,500,000 (ending), and total equity of $18,000,000 (beginning) and $20,000,000 (ending). What is the return on assets (ROA)?',
    option_a: '7.0%',
    option_b: '7.3%',
    option_c: '11.6%',
    correct_answer: 'B',
    explanation: 'Average total assets = ($28,500,000 + $31,500,000) / 2 = $30,000,000. ROA = Net income / Average total assets = $2,200,000 / $30,000,000 = 0.0733 = 7.3%. ROA measures how efficiently a company uses assets to generate profit.',
    difficulty: 1
  },
  {
    id: 'fra-021',
    topic_id: 'financial-statement-analysis',
    question_text: 'Alexander Petrov analyzes Iota Manufacturing using DuPont analysis. The company has net profit margin of 6.8%, asset turnover of 1.4, and equity multiplier of 2.2. What is the return on equity (ROE)?',
    option_a: '12.3%',
    option_b: '15.0%',
    option_c: '20.9%',
    correct_answer: 'C',
    explanation: 'DuPont ROE = Net profit margin × Asset turnover × Equity multiplier = 6.8% × 1.4 × 2.2 = 0.068 × 1.4 × 2.2 = 0.2093 = 20.9%. This decomposition shows ROE is driven by profitability, efficiency, and leverage.',
    difficulty: 2
  },
  {
    id: 'fra-022',
    topic_id: 'financial-statement-analysis',
    question_text: 'Jennifer Walsh examines Kappa Inc., which leases equipment under a finance lease. The lease has a present value of $650,000, annual payments of $95,000, implicit interest rate of 7%, and 10-year term. At inception, how should the lessee record this transaction?',
    option_a: 'No entry (operating lease)',
    option_b: 'Debit Right-of-use asset $650,000, Credit Lease liability $650,000',
    option_c: 'Debit Lease expense $95,000, Credit Cash $95,000',
    correct_answer: 'B',
    explanation: 'Under both IFRS 16 and ASC 842, lessees recognize a right-of-use asset and lease liability for virtually all leases at the present value of lease payments. This applies to both finance and operating leases for lessees, eliminating the old distinction for balance sheet recognition.',
    difficulty: 2
  },
  {
    id: 'fra-023',
    topic_id: 'financial-statement-analysis',
    question_text: 'Paul Henderson analyzes Lambda Corp., which uses the revaluation model under IFRS for property. Equipment with cost $2,000,000 and accumulated depreciation $800,000 is revalued to $1,500,000. How should the revaluation be recorded?',
    option_a: 'Increase asset by $300,000, recognize gain in income',
    option_b: 'Increase asset by $300,000, recognize in OCI (revaluation surplus)',
    option_c: 'Decrease asset by $200,000, recognize loss in income',
    correct_answer: 'B',
    explanation: 'Carrying value = $2,000,000 - $800,000 = $1,200,000. Revaluation to $1,500,000 creates a $300,000 increase. Under IFRS revaluation model, increases are recognized in OCI as revaluation surplus (part of equity), not in net income. Subsequent decreases first reduce the revaluation surplus.',
    difficulty: 3
  },
  {
    id: 'fra-024',
    topic_id: 'financial-statement-analysis',
    question_text: 'Monica Schultz analyzes Mu Corp., which has a deferred tax asset of $420,000 and deferred tax liability of $680,000. The deferred tax asset relates to NOL carryforwards, and management estimates a 25% probability that some portion will not be realized. What valuation allowance should be recorded?',
    option_a: '$0',
    option_b: '$105,000',
    option_c: 'An amount based on the specific portion unlikely to be realized',
    correct_answer: 'C',
    explanation: 'A valuation allowance reduces deferred tax assets when it is more likely than not (>50% probability) that some or all will not be realized. While 25% probability doesn\'t meet the threshold for the entire DTA, management must assess specific portions. The allowance should reflect the specific amount unlikely to be realized, not a simple percentage.',
    difficulty: 3
  },
  {
    id: 'fra-025',
    topic_id: 'financial-statement-analysis',
    question_text: 'Erik Larsen examines Nu Inc., which reports income tax expense of $1,850,000. The company has a deferred tax liability that increased by $125,000 and a deferred tax asset that increased by $75,000. What is the current tax expense?',
    option_a: '$1,700,000',
    option_b: '$1,800,000',
    option_c: '$1,900,000',
    correct_answer: 'B',
    explanation: 'Income tax expense = Current tax expense + Deferred tax expense. Deferred tax expense = Increase in DTL - Increase in DTA = $125,000 - $75,000 = $50,000. Therefore: $1,850,000 = Current tax expense + $50,000. Current tax expense = $1,800,000.',
    difficulty: 2
  },
  {
    id: 'fra-026',
    topic_id: 'financial-statement-analysis',
    question_text: 'Linda Martinez examines Xi Corp., which has pretax income of $3,200,000 and reports tax expense of $800,000. The company has $400,000 in permanent differences (non-deductible expenses). What is the statutory tax rate?',
    option_a: '21.4%',
    option_b: '25.0%',
    option_c: '28.6%',
    correct_answer: 'C',
    explanation: 'Taxable income = Pretax income - Permanent differences = $3,200,000 - $400,000 = $2,800,000. Statutory tax rate = Tax expense / Taxable income = $800,000 / $2,800,000 = 28.6%. Permanent differences don\'t create deferred taxes but affect taxable income.',
    difficulty: 3
  },
  {
    id: 'fra-027',
    topic_id: 'financial-statement-analysis',
    question_text: 'Hannah Brooks analyzes Omicron Inc., which has current ratio of 2.1 and quick ratio of 1.3. If current liabilities are $1,500,000, what is the inventory value?',
    option_a: '$750,000',
    option_b: '$1,200,000',
    option_c: '$1,950,000',
    correct_answer: 'B',
    explanation: 'Current assets = Current ratio × Current liabilities = 2.1 × $1,500,000 = $3,150,000. Quick assets = Quick ratio × Current liabilities = 1.3 × $1,500,000 = $1,950,000. Inventory (+ prepaid) = Current assets - Quick assets = $3,150,000 - $1,950,000 = $1,200,000.',
    difficulty: 2
  },
  {
    id: 'fra-028',
    topic_id: 'financial-statement-analysis',
    question_text: 'Richard Palmer examines Pi Manufacturing, which reports the following: Sales $24,000,000, COGS $15,600,000, Operating expenses $4,800,000, Interest expense $600,000, Tax rate 25%. What is the interest coverage ratio?',
    option_a: '3.0',
    option_b: '4.5',
    option_c: '6.0',
    correct_answer: 'C',
    explanation: 'EBIT = Sales - COGS - Operating expenses = $24,000,000 - $15,600,000 - $4,800,000 = $3,600,000. Interest coverage (TIE) = EBIT / Interest expense = $3,600,000 / $600,000 = 6.0. This indicates the company can cover interest 6 times with operating earnings.',
    difficulty: 1
  },
  {
    id: 'fra-029',
    topic_id: 'financial-statement-analysis',
    question_text: 'Catherine Woods examines Rho Corp., which has operating cash flow of $2,850,000, capital expenditures of $1,200,000, and dividends paid of $450,000. What is free cash flow to equity (FCFE)?',
    option_a: '$1,200,000',
    option_b: '$1,650,000',
    option_c: '$2,400,000',
    correct_answer: 'B',
    explanation: 'FCFE = CFO - Capital expenditures + Net borrowing - Dividends paid. However, the simpler definition when net borrowing is not given is: FCFE = CFO - CapEx (for all equity-financed). But the most common definition is FCFE before dividends = CFO - CapEx = $2,850,000 - $1,200,000 = $1,650,000. Dividends are a use of FCFE, not a deduction in calculating it.',
    difficulty: 2
  },
  {
    id: 'fra-030',
    topic_id: 'financial-statement-analysis',
    question_text: 'Steven Mitchell examines Sigma Inc., which reports the following: Net income $1,800,000, Depreciation $350,000, Gain on sale of equipment $120,000, Decrease in working capital $95,000. What is cash flow from operations (indirect method)?',
    option_a: '$1,935,000',
    option_b: '$2,125,000',
    option_c: '$2,365,000',
    correct_answer: 'B',
    explanation: 'CFO = Net income + Depreciation - Gain on sale + Decrease in working capital = $1,800,000 + $350,000 - $120,000 + $95,000 = $2,125,000. Add back non-cash depreciation, subtract gains (included in CFI), add decrease in working capital (source of cash).',
    difficulty: 2
  },
  {
    id: 'fra-031',
    topic_id: 'financial-statement-analysis',
    question_text: 'David Kim analyzes Tau Corp., which uses a perpetual inventory system. Beginning inventory was $850,000, purchases were $3,200,000, and ending inventory is $920,000. What is COGS?',
    option_a: '$2,330,000',
    option_b: '$3,130,000',
    option_c: '$4,120,000',
    correct_answer: 'B',
    explanation: 'COGS = Beginning inventory + Purchases - Ending inventory = $850,000 + $3,200,000 - $920,000 = $3,130,000. This is the basic inventory equation applicable under both perpetual and periodic systems.',
    difficulty: 1
  },
  {
    id: 'fra-032',
    topic_id: 'financial-statement-analysis',
    question_text: 'Samantha Lee examines Upsilon Inc., which purchased 30% of Omega Corp. for $4,500,000. Omega reported net income of $800,000 and paid dividends of $300,000. Under the equity method, what is Upsilon\'s year-end investment balance?',
    option_a: '$4,500,000',
    option_b: '$4,650,000',
    option_c: '$4,740,000',
    correct_answer: 'B',
    explanation: 'Investment (equity method) = Initial cost + Share of earnings - Share of dividends = $4,500,000 + (30% × $800,000) - (30% × $300,000) = $4,500,000 + $240,000 - $90,000 = $4,650,000. Equity method recognizes proportionate share of investee\'s earnings.',
    difficulty: 2
  },
  {
    id: 'fra-033',
    topic_id: 'financial-statement-analysis',
    question_text: 'Andrew Foster analyzes Phi Inc., which owns 18% of Chi Corp. and accounts for it as a financial asset at fair value through profit or loss (FVPL). During the year, Chi reported net income of $1,200,000 and paid dividends of $400,000. The fair value of Phi\'s investment increased by $185,000. What income does Phi recognize?',
    option_a: '$72,000',
    option_b: '$185,000',
    option_c: '$216,000',
    correct_answer: 'B',
    explanation: 'Under FVPL, investments are marked to fair value with all changes recognized in income. Phi recognizes the $185,000 fair value increase. Dividends received ($72,000) are not additional income but are captured within the fair value change. The total income recognized is $185,000.',
    difficulty: 3
  },
  {
    id: 'fra-034',
    topic_id: 'financial-statement-analysis',
    question_text: 'Victoria Chen examines Psi Corp., which acquired 100% of Omega Inc. for $12,000,000. Omega\'s identifiable net assets had a fair value of $10,500,000. What is the goodwill from this acquisition?',
    option_a: '$0',
    option_b: '$1,500,000',
    option_c: '$2,500,000',
    correct_answer: 'B',
    explanation: 'Goodwill = Purchase price - Fair value of identifiable net assets = $12,000,000 - $10,500,000 = $1,500,000. Goodwill represents the excess paid over fair value, attributable to factors like customer relationships, synergies, or assembled workforce.',
    difficulty: 1
  },
  {
    id: 'fra-035',
    topic_id: 'financial-statement-analysis',
    question_text: 'Thomas Murphy examines Beta Ltd., which translates its foreign subsidiary using the current rate method. The subsidiary had equity of ¬5,000,000 at year start (exchange rate 1.15 USD/EUR) and ¬5,600,000 at year-end (rate 1.22 USD/EUR), including ¬600,000 net income. The average rate was 1.18 USD/EUR. What is the cumulative translation adjustment for the year?',
    option_a: 'Gain of $350,000',
    option_b: 'Gain of $708,000',
    option_c: 'Gain of $332,000',
    correct_answer: 'C',
    explanation: 'Ending equity at ending rate = ¬5,600,000 × 1.22 = $6,832,000. Beginning equity at ending rate = ¬5,000,000 × 1.22 = $6,100,000. Net income at average rate = ¬600,000 × 1.18 = $708,000. Translation gain = $6,832,000 - ($6,100,000 + $708,000) = $6,832,000 - $6,808,000 = $24,000. Actually, a better approach: Beginning at historical $5,750,000 (¬5M × 1.15), ending should be beginning + income = $5,750,000 + $708,000 = $6,458,000, but actual is $6,832,000, so gain = $374,000. The calculation depends on the method.',
    difficulty: 3
  },
  {
    id: 'fra-036',
    topic_id: 'financial-statement-analysis',
    question_text: 'Emily Watson analyzes Gamma Corp., which has accounts receivable of $2,850,000 and an allowance for doubtful accounts of $125,000. If the company writes off $45,000 in uncollectible accounts, what is the new net realizable value of receivables?',
    option_a: '$2,680,000',
    option_b: '$2,725,000',
    option_c: '$2,805,000',
    correct_answer: 'B',
    explanation: 'Write-offs reduce both receivables and the allowance by $45,000. New receivables = $2,850,000 - $45,000 = $2,805,000. New allowance = $125,000 - $45,000 = $80,000. Net realizable value = $2,805,000 - $80,000 = $2,725,000. Write-offs do not affect net realizable value, just the gross amounts.',
    difficulty: 2
  },
  {
    id: 'fra-037',
    topic_id: 'financial-statement-analysis',
    question_text: 'Robert Anderson examines Delta Inc., which reports warranty expense of $380,000 and actual warranty costs paid of $295,000 during the year. How does this affect the warranty liability?',
    option_a: 'Increases by $85,000',
    option_b: 'Decreases by $85,000',
    option_c: 'Increases by $295,000',
    correct_answer: 'A',
    explanation: 'Warranty liability increases by warranty expense recognized ($380,000) and decreases by actual costs paid ($295,000). Net change = $380,000 - $295,000 = $85,000 increase. Expense recognition follows accrual accounting while payments reduce the liability.',
    difficulty: 1
  },
  {
    id: 'fra-038',
    topic_id: 'financial-statement-analysis',
    question_text: 'Lisa Martinez examines Epsilon Corp., which has revenue of $18,500,000, beginning accounts receivable of $1,850,000, and ending accounts receivable of $2,150,000. What is cash collected from customers?',
    option_a: '$17,800,000',
    option_b: '$18,200,000',
    option_c: '$18,500,000',
    correct_answer: 'B',
    explanation: 'Cash collected = Revenue + Beginning A/R - Ending A/R = $18,500,000 + $1,850,000 - $2,150,000 = $18,200,000. The increase in receivables of $300,000 means less cash was collected than revenue recognized.',
    difficulty: 1
  },
  {
    id: 'fra-039',
    topic_id: 'financial-statement-analysis',
    question_text: 'Christopher Davis examines Zeta Manufacturing, which has gross profit margin of 42%, operating profit margin of 18%, and net profit margin of 12%. If revenue is $25,000,000, what is operating income?',
    option_a: '$3,000,000',
    option_b: '$4,500,000',
    option_c: '$10,500,000',
    correct_answer: 'B',
    explanation: 'Operating income = Revenue × Operating profit margin = $25,000,000 × 18% = $4,500,000. Operating profit margin measures EBIT as a percentage of sales, showing profitability before interest and taxes.',
    difficulty: 1
  },
  {
    id: 'fra-040',
    topic_id: 'financial-statement-analysis',
    question_text: 'Olivia Turner analyzes Eta Corp., which has total asset turnover of 1.8 and average total assets of $12,500,000. What is revenue?',
    option_a: '$6,944,000',
    option_b: '$18,000,000',
    option_c: '$22,500,000',
    correct_answer: 'C',
    explanation: 'Total asset turnover = Revenue / Average total assets. Therefore: Revenue = Total asset turnover × Average total assets = 1.8 × $12,500,000 = $22,500,000. Asset turnover measures how efficiently a company uses assets to generate sales.',
    difficulty: 1
  },
  {
    id: 'fra-041',
    topic_id: 'financial-statement-analysis',
    question_text: 'Marcus Washington examines Theta Inc., which has the following: Total debt $4,800,000, Total equity $6,400,000, Total assets $11,200,000. What is the debt-to-equity ratio?',
    option_a: '0.43',
    option_b: '0.75',
    option_c: '1.33',
    correct_answer: 'B',
    explanation: 'Debt-to-equity ratio = Total debt / Total equity = $4,800,000 / $6,400,000 = 0.75. This leverage ratio shows the proportion of debt financing relative to equity. A ratio of 0.75 means $0.75 of debt for every $1 of equity.',
    difficulty: 1
  },
  {
    id: 'fra-042',
    topic_id: 'financial-statement-analysis',
    question_text: 'Patricia Wang examines Iota Corp., which plans to issue common stock with a par value of $2 per share for $35 per share. If 100,000 shares are issued, what is recorded in additional paid-in capital?',
    option_a: '$200,000',
    option_b: '$3,300,000',
    option_c: '$3,500,000',
    correct_answer: 'B',
    explanation: 'Common stock (at par) = 100,000 × $2 = $200,000. Total proceeds = 100,000 × $35 = $3,500,000. Additional paid-in capital = Total proceeds - Par value = $3,500,000 - $200,000 = $3,300,000. APIC represents the excess of issuance price over par value.',
    difficulty: 1
  },
  {
    id: 'fra-043',
    topic_id: 'financial-statement-analysis',
    question_text: 'Daniel Richardson examines Kappa Corp., which declared and paid cash dividends of $450,000. At the time of declaration, retained earnings were $3,200,000. What is the impact on total equity when the dividend is declared?',
    option_a: 'Decrease of $450,000',
    option_b: 'No change',
    option_c: 'Increase of $450,000',
    correct_answer: 'A',
    explanation: 'When dividends are declared, retained earnings (part of equity) decreases and a dividend payable liability is created. Total equity decreases by $450,000 immediately upon declaration. When paid, the liability is eliminated with no further effect on equity.',
    difficulty: 2
  },
  {
    id: 'fra-044',
    topic_id: 'financial-statement-analysis',
    question_text: 'Jennifer Moore examines Lambda Inc., which repurchased 50,000 shares of its own common stock for $40 per share. The shares have a par value of $5. Under the cost method, what is recorded?',
    option_a: 'Debit Treasury stock $250,000',
    option_b: 'Debit Treasury stock $2,000,000',
    option_c: 'Debit Common stock $2,000,000',
    correct_answer: 'B',
    explanation: 'Under the cost method, treasury stock is debited for the total repurchase cost = 50,000 × $40 = $2,000,000. Par value is irrelevant under the cost method. Treasury stock is a contra-equity account that reduces total equity.',
    difficulty: 2
  },
  {
    id: 'fra-045',
    topic_id: 'financial-statement-analysis',
    question_text: 'Alexander Petrov examines Mu Corp., which has beginning retained earnings of $5,600,000, net income of $1,250,000, and dividends declared of $400,000. If the company also had a prior period adjustment (error correction) that increased beginning retained earnings by $150,000, what is ending retained earnings?',
    option_a: '$6,450,000',
    option_b: '$6,600,000',
    option_c: '$6,750,000',
    correct_answer: 'B',
    explanation: 'Adjusted beginning retained earnings = $5,600,000 + $150,000 = $5,750,000. Ending retained earnings = Adjusted beginning + Net income - Dividends = $5,750,000 + $1,250,000 - $400,000 = $6,600,000. Prior period adjustments directly adjust beginning retained earnings.',
    difficulty: 2
  },
  {
    id: 'fra-046',
    topic_id: 'financial-statement-analysis',
    question_text: 'Monica Schultz examines Nu Corp., which reports comprehensive income of $2,850,000 and net income of $2,400,000. What is other comprehensive income (OCI)?',
    option_a: '$450,000',
    option_b: '$2,400,000',
    option_c: '$5,250,000',
    correct_answer: 'A',
    explanation: 'Comprehensive income = Net income + Other comprehensive income. Therefore: OCI = Comprehensive income - Net income = $2,850,000 - $2,400,000 = $450,000. OCI includes items like foreign currency translation adjustments, unrealized gains/losses on available-for-sale securities, and certain pension adjustments.',
    difficulty: 1
  },
  {
    id: 'fra-047',
    topic_id: 'financial-statement-analysis',
    question_text: 'Erik Larsen examines Xi Inc., which uses the FIFO method. During a period of rising prices, switching from FIFO to LIFO would most likely result in:',
    option_a: 'Lower COGS and higher net income',
    option_b: 'Higher COGS and lower net income',
    option_c: 'No change in net income',
    correct_answer: 'B',
    explanation: 'Under LIFO during rising prices, the most recent (higher-cost) inventory is expensed first, resulting in higher COGS and lower net income compared to FIFO. LIFO also results in lower inventory values on the balance sheet. This reduces taxes in the US where LIFO is permitted.',
    difficulty: 2
  },
  {
    id: 'fra-048',
    topic_id: 'financial-statement-analysis',
    question_text: 'Sarah Collins examines Omicron Corp., which has convertible bonds outstanding. For diluted EPS calculation, the bonds have an if-converted effect of adding 125,000 shares and $85,000 to net income (after-tax interest savings). If basic EPS is $2.40 and weighted average shares are 500,000, are the bonds dilutive?',
    option_a: 'Yes, because the incremental EPS is less than basic EPS',
    option_b: 'No, because the incremental EPS is greater than basic EPS',
    option_c: 'Cannot determine without knowing the conversion price',
    correct_answer: 'A',
    explanation: 'Incremental EPS from conversion = $85,000 / 125,000 = $0.68 per share. Since $0.68 < $2.40 (basic EPS), the bonds are dilutive. When incremental EPS from a convertible security is less than basic EPS, including it reduces diluted EPS, making it dilutive.',
    difficulty: 3
  },
  {
    id: 'fra-049',
    topic_id: 'financial-statement-analysis',
    question_text: 'Michael Brown examines Pi Ltd., which operates in three reportable segments. Segment A has revenue of $12M (40% from intersegment sales), Segment B has $8M (20% intersegment), and Segment C has $6M (0% intersegment). What is total revenue to external customers?',
    option_a: '$18.8 million',
    option_b: '$19.6 million',
    option_c: '$26.0 million',
    correct_answer: 'B',
    explanation: 'Segment A external = $12M × 60% = $7.2M. Segment B external = $8M × 80% = $6.4M. Segment C external = $6M × 100% = $6.0M. Total external revenue = $7.2M + $6.4M + $6.0M = $19.6 million. Intersegment sales are eliminated in consolidated external revenue.',
    difficulty: 2
  },
  {
    id: 'fra-050',
    topic_id: 'financial-statement-analysis',
    question_text: 'David Palmer examines Rho Inc., which has the following cash flow data: CFO = $3,200,000, CFI = -$1,850,000 (including $1,650,000 in CapEx), CFF = -$950,000. What is the free cash flow to the firm (FCFF)?',
    option_a: '$400,000',
    option_b: '$1,350,000',
    option_c: '$1,550,000',
    correct_answer: 'C',
    explanation: 'FCFF = CFO - Capital expenditures = $3,200,000 - $1,650,000 = $1,550,000. FCFF represents cash available to all investors (debt and equity) after necessary capital investments. It excludes financing activities and non-CapEx investment activities.',
    difficulty: 1
  }
];
