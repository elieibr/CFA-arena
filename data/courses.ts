export const courses = [
  {
    "id": "ethical-standards",
    "name": "Ethical and Professional Standards",
    "code": "ETH",
    "summary": "Ethics is the largest and most heavily weighted topic at CFA Level 1 (15-20%). It is built on the CFA Institute Code of Ethics (six principles) and the Standards of Professional Conduct, organized in seven standards: I Professionalism, II Integrity of Capital Markets, III Duties to Clients, IV Duties to Employers, V Investment Analysis, Recommendations and Actions, VI Conflicts of Interest, and VII Responsibilities as a CFA Institute Member or Candidate. Each standard contains sub-sections that members and candidates must follow, supported by guidance and application examples. Standard I covers knowledge of the law, independence and objectivity, misrepresentation, and misconduct. Standard II addresses material nonpublic information (and the Mosaic Theory) and market manipulation. Standard III covers loyalty, prudence and care, fair dealing, suitability, performance presentation, and preservation of confidentiality. The Global Investment Performance Standards (GIPS) are voluntary, ethical standards for presenting investment performance to ensure fair representation and full disclosure; compliance is on a firm-wide basis. Candidates should master an ethical decision-making framework: identify the relevant facts and stakeholders, consider applicable standards and alternatives, decide and act, then reflect on the outcome. When the law and the Code and Standards differ, members must follow the stricter rule. Ethics questions are scenario-based, testing application rather than memorization, so the candidate must recognize violations, required disclosures, and appropriate conduct in realistic situations involving clients, employers, and capital markets.",
    "formulas": [
      {
        "name": "Ethical Decision-Making Framework",
        "formula": "Identify facts and stakeholders -> Consider standards and alternatives -> Decide and Act -> Reflect on outcome",
        "explanation": "A repeatable process for resolving ethical dilemmas under the Code and Standards."
      },
      {
        "name": "Structure of the Standards of Professional Conduct",
        "formula": "I Professionalism + II Integrity of Capital Markets + III Duties to Clients + IV Duties to Employers + V Investment Analysis/Recommendations/Actions + VI Conflicts of Interest + VII Responsibilities as a Member/Candidate",
        "explanation": "The seven standards that every member and candidate must follow."
      },
      {
        "name": "Stricter Rule Principle",
        "formula": "Applicable conduct = the more strict of (Local Law) and (Code and Standards)",
        "explanation": "When law and the Code and Standards conflict, follow whichever imposes the higher duty."
      },
      {
        "name": "GIPS Compliance Basis",
        "formula": "GIPS compliance = firm-wide (all-or-nothing), not single composite or product",
        "explanation": "A firm either complies fully with GIPS across all assets or cannot claim compliance."
      }
    ],
    "definitions": [
      {
        "term": "Code of Ethics",
        "definition": "The set of six fundamental ethical principles that CFA Institute members and candidates pledge to uphold toward the public, clients, employers, and the profession."
      },
      {
        "term": "Standards of Professional Conduct",
        "definition": "Seven enforceable standards that translate the Code of Ethics into specific required conduct for members and candidates."
      },
      {
        "term": "Material Nonpublic Information",
        "definition": "Information that would affect a security's price or that a reasonable investor would want before trading, and that has not been disseminated to the market."
      },
      {
        "term": "Mosaic Theory",
        "definition": "The practice of reaching an investment conclusion by combining public information with nonmaterial nonpublic information, which is permissible under the Standards."
      },
      {
        "term": "Fiduciary Duty",
        "definition": "The obligation to act with loyalty, prudence, and care in the best interest of clients, placing their interests above the member's own."
      },
      {
        "term": "Fair Dealing",
        "definition": "The requirement to treat all clients fairly and impartially when disseminating investment recommendations or taking investment action."
      },
      {
        "term": "Front Running",
        "definition": "Trading personally or for the firm ahead of known client orders to benefit from the expected price impact, a prohibited practice."
      },
      {
        "term": "Soft Dollars",
        "definition": "Client brokerage commissions used to purchase research and services that must benefit the client and be used to support the investment decision-making process."
      },
      {
        "term": "GIPS Standards",
        "definition": "Voluntary, globally recognized ethical standards for calculating and presenting investment performance based on fair representation and full disclosure."
      },
      {
        "term": "Independence and Objectivity",
        "definition": "The duty to use reasonable care and judgment to maintain independence in professional activities and to avoid any conflict that could compromise objectivity."
      }
    ]
  },
  {
    "id": "quantitative-methods",
    "name": "Quantitative Methods",
    "code": "QM",
    "summary": "Quantitative Methods provides the statistical and time-value toolkit used across the curriculum. Time value of money links present and future cash flows through compounding and discounting, and supports the valuation of single sums, annuities, and perpetuities, as well as net present value and internal rate of return. Rates of return are described using holding-period, arithmetic mean, geometric mean, money-weighted (IRR), and time-weighted returns, plus annualized and continuously compounded measures. Statistical concepts cover measures of central tendency, dispersion (variance, standard deviation, mean absolute deviation), coefficient of variation, skewness, and kurtosis, applied to asset returns. Probability concepts include conditional and joint probability, expected value, covariance and correlation, Bayes' formula, and counting rules (permutations and combinations). Common distributions are the uniform, binomial, normal, lognormal, and Student's t-distribution; the normal distribution underlies confidence intervals and the standard normal (z) transformation. Sampling and estimation introduce the central limit theorem, the standard error of the sample mean, point and interval estimates, and resampling methods such as the bootstrap. Hypothesis testing follows a structured procedure (state hypotheses, choose a test statistic, set significance, decide), covering tests of means, variances, and correlations, plus parametric and non-parametric tests. Simple linear regression explains a dependent variable with one independent variable, producing slope and intercept estimates, the coefficient of determination, and tests of significance. The topic closes with an introduction to big data and fintech techniques used in modern investment analysis.",
    "formulas": [
      {
        "name": "Future Value of a Single Sum",
        "formula": "FV = PV x (1 + r)^N",
        "explanation": "Grows a present amount forward at rate r over N compounding periods."
      },
      {
        "name": "Present Value of a Single Sum",
        "formula": "PV = FV / (1 + r)^N",
        "explanation": "Discounts a future amount back to today at rate r over N periods."
      },
      {
        "name": "Effective Annual Rate",
        "formula": "EAR = (1 + Periodic rate)^m - 1, where m = compounding periods per year",
        "explanation": "Converts a stated rate into the true annual rate accounting for compounding frequency."
      },
      {
        "name": "Continuously Compounded Return",
        "formula": "r(continuous) = ln(1 + HPR)",
        "explanation": "Expresses a holding-period return as a continuously compounded rate."
      },
      {
        "name": "Holding Period Return",
        "formula": "HPR = (P1 - P0 + Income) / P0",
        "explanation": "Total return from price change plus income over the holding period."
      },
      {
        "name": "Geometric Mean Return",
        "formula": "RG = [(1 + R1)(1 + R2)...(1 + Rn)]^(1/n) - 1",
        "explanation": "The compound rate of growth over multiple periods."
      },
      {
        "name": "Coefficient of Variation",
        "formula": "CV = Standard deviation / Mean",
        "explanation": "Measures risk per unit of return, allowing comparison across data sets."
      },
      {
        "name": "Correlation Coefficient",
        "formula": "Corr(X,Y) = Cov(X,Y) / (StdDev(X) x StdDev(Y))",
        "explanation": "Standardized measure of the linear relationship between two variables, between -1 and +1."
      },
      {
        "name": "Standard Error of the Sample Mean",
        "formula": "Standard error = s / sqrt(n)",
        "explanation": "Estimates the variability of the sample mean as an estimator of the population mean."
      },
      {
        "name": "t-Statistic for a Single Mean",
        "formula": "t = (Sample mean - Hypothesized mean) / (s / sqrt(n))",
        "explanation": "Test statistic used to evaluate a hypothesis about a population mean."
      },
      {
        "name": "Bayes' Formula",
        "formula": "P(A | B) = [P(B | A) / P(B)] x P(A)",
        "explanation": "Updates a prior probability given new conditioning information."
      },
      {
        "name": "Combination Formula",
        "formula": "nCr = n! / [(n - r)! x r!]",
        "explanation": "Number of ways to choose r items from n when order does not matter."
      }
    ],
    "definitions": [
      {
        "term": "Time Value of Money",
        "definition": "The principle that a unit of currency today is worth more than the same unit in the future because of its earning potential."
      },
      {
        "term": "Net Present Value (NPV)",
        "definition": "The present value of expected future cash inflows minus the present value of cash outflows of an investment."
      },
      {
        "term": "Money-Weighted Return",
        "definition": "The internal rate of return on a portfolio that accounts for the timing and amount of all cash flows."
      },
      {
        "term": "Time-Weighted Return",
        "definition": "A measure of compound growth that removes the effect of cash inflows and outflows, allowing comparison of manager performance."
      },
      {
        "term": "Central Limit Theorem",
        "definition": "The result that the sampling distribution of the sample mean approaches a normal distribution as sample size grows, regardless of population shape."
      },
      {
        "term": "Standard Deviation",
        "definition": "The positive square root of the variance, measuring dispersion of values around the mean in the original units."
      },
      {
        "term": "Covariance",
        "definition": "A measure of how two random variables move together; positive when they move in the same direction."
      },
      {
        "term": "Confidence Interval",
        "definition": "A range constructed around a point estimate that is expected to contain the true population parameter with a stated probability."
      },
      {
        "term": "p-Value",
        "definition": "The smallest level of significance at which the null hypothesis can be rejected; the probability of a result at least as extreme as observed."
      },
      {
        "term": "Coefficient of Determination (R-squared)",
        "definition": "The proportion of the variation in the dependent variable explained by the independent variable in a regression."
      }
    ]
  },
  {
    "id": "economics",
    "name": "Economics",
    "code": "EC",
    "summary": "Economics covers microeconomics, macroeconomics, and international economics. Microeconomics examines demand and supply analysis for consumers and firms, including the determinants of demand and supply, market equilibrium, consumer surplus, producer surplus, and the effects of price controls and taxes. Elasticities measure responsiveness: own-price, income, and cross-price elasticity of demand. The theory of the firm distinguishes total, average, and marginal revenue and cost, economies and diseconomies of scale, and profit maximization where marginal revenue equals marginal cost. Market structures range from perfect competition through monopolistic competition and oligopoly to monopoly, each with different pricing power, concentration, and long-run outcomes. Macroeconomics studies aggregate output and income measured by GDP under the expenditure and income approaches, aggregate demand and supply, the business cycle, unemployment, and inflation (including the CPI and the distinction between cost-push and demand-pull inflation). Monetary policy works through the central bank, money supply, interest rates, and the money multiplier, while fiscal policy uses government spending and taxation; both have limitations and lags. International trade theory addresses comparative and absolute advantage, gains from trade, trade restrictions (tariffs, quotas, subsidies), and the balance of payments. Currency exchange rates are analyzed through spot and forward quotes, cross rates, bid-ask spreads, and parity conditions such as covered and uncovered interest rate parity and purchasing power parity. Exchange rate regimes and the effects of capital flows and the current account complete the topic.",
    "formulas": [
      {
        "name": "Own-Price Elasticity of Demand",
        "formula": "(% change in quantity demanded) / (% change in price)",
        "explanation": "Measures how strongly quantity demanded responds to a price change."
      },
      {
        "name": "Income Elasticity of Demand",
        "formula": "(% change in quantity demanded) / (% change in income)",
        "explanation": "Positive for normal goods and negative for inferior goods."
      },
      {
        "name": "Cross-Price Elasticity of Demand",
        "formula": "(% change in quantity demanded of A) / (% change in price of B)",
        "explanation": "Positive for substitutes and negative for complements."
      },
      {
        "name": "GDP (Expenditure Approach)",
        "formula": "GDP = C + I + G + (X - M)",
        "explanation": "Total spending: consumption plus investment plus government plus net exports."
      },
      {
        "name": "Fisher Relation",
        "formula": "Nominal interest rate ≈ Real interest rate + Expected inflation",
        "explanation": "Links nominal rates to real returns and expected inflation."
      },
      {
        "name": "Money Multiplier",
        "formula": "Money multiplier = 1 / Reserve requirement",
        "explanation": "Maximum expansion of the money supply from a given level of reserves."
      },
      {
        "name": "Equation of Exchange",
        "formula": "Money supply x Velocity = Price level x Real output",
        "explanation": "The quantity theory identity linking money and nominal GDP."
      },
      {
        "name": "Covered Interest Rate Parity",
        "formula": "Forward / Spot = (1 + r_price) / (1 + r_base)",
        "explanation": "No-arbitrage condition relating forward rates to interest rate differentials."
      },
      {
        "name": "Forward Premium or Discount",
        "formula": "(Forward rate - Spot rate) / Spot rate",
        "explanation": "The percentage by which the forward rate exceeds or lies below the spot rate."
      },
      {
        "name": "Profit-Maximizing Output Rule",
        "formula": "Marginal revenue = Marginal cost",
        "explanation": "The output level that maximizes a firm's profit in any market structure."
      }
    ],
    "definitions": [
      {
        "term": "Price Elasticity of Demand",
        "definition": "The percentage change in quantity demanded divided by the percentage change in price, measuring demand sensitivity to price."
      },
      {
        "term": "Marginal Revenue",
        "definition": "The additional revenue generated from selling one more unit of output."
      },
      {
        "term": "Perfect Competition",
        "definition": "A market structure with many sellers of identical products, no barriers to entry, and firms that are price takers."
      },
      {
        "term": "Monopoly",
        "definition": "A market structure with a single seller of a product with no close substitutes and high barriers to entry."
      },
      {
        "term": "Gross Domestic Product (GDP)",
        "definition": "The total market value of all final goods and services produced within an economy in a given period."
      },
      {
        "term": "Business Cycle",
        "definition": "Recurring fluctuations in economic activity consisting of expansion, peak, contraction, and trough phases."
      },
      {
        "term": "Fiscal Policy",
        "definition": "Government use of spending and taxation to influence aggregate demand and overall economic activity."
      },
      {
        "term": "Monetary Policy",
        "definition": "Central bank actions on the money supply and interest rates to achieve price stability and economic objectives."
      },
      {
        "term": "Comparative Advantage",
        "definition": "The ability of a country to produce a good at a lower opportunity cost than another country, motivating trade."
      },
      {
        "term": "Purchasing Power Parity",
        "definition": "The theory that exchange rates adjust so identical goods cost the same across countries once expressed in a common currency."
      }
    ]
  },
  {
    "id": "financial-statement-analysis",
    "name": "Financial Statement Analysis",
    "code": "FSA",
    "summary": "Financial Statement Analysis teaches how to read, adjust, and interpret financial reports prepared under IFRS and US GAAP. The three primary statements are the income statement (revenue recognition, expense recognition, and earnings per share), the balance sheet (assets, liabilities, and equity measured at cost or fair value), and the cash flow statement (operating, investing, and financing activities under the direct and indirect methods). Analysts reconcile accrual accounting with cash flows and assess the quality and sustainability of earnings. Inventory accounting compares FIFO, LIFO, and weighted-average cost methods and their effects on cost of goods sold, gross profit, and inventory values, including LIFO reserve adjustments. Long-lived assets cover capitalization versus expensing, depreciation and amortization methods, impairment, and revaluation. Income taxes introduce deferred tax assets and liabilities arising from temporary differences. Non-current liabilities include bonds (issued at par, premium, or discount, with effective interest amortization) and leases. Ratio analysis is central: activity, liquidity, solvency, profitability, and valuation ratios, organized through DuPont decomposition of return on equity. Financial reporting quality spans the spectrum from high-quality decision-useful reporting to earnings management and fraud, with warning signs and incentives. Applications include credit analysis, equity screening, forecasting, and adjusting statements for comparability across firms and accounting standards. Mastery requires understanding how each transaction flows through the statements and how choices in estimates and policies affect reported results.",
    "formulas": [
      {
        "name": "Current Ratio",
        "formula": "Current assets / Current liabilities",
        "explanation": "Measures short-term ability to meet obligations with current assets."
      },
      {
        "name": "Quick Ratio",
        "formula": "(Cash + Short-term investments + Receivables) / Current liabilities",
        "explanation": "A stricter liquidity measure that excludes inventory."
      },
      {
        "name": "Inventory Turnover",
        "formula": "Cost of goods sold / Average inventory",
        "explanation": "How many times inventory is sold and replaced over a period."
      },
      {
        "name": "Days of Inventory on Hand",
        "formula": "365 / Inventory turnover",
        "explanation": "Average number of days inventory is held before sale."
      },
      {
        "name": "Receivables Turnover",
        "formula": "Revenue / Average receivables",
        "explanation": "How efficiently a firm collects on credit sales."
      },
      {
        "name": "Total Asset Turnover",
        "formula": "Revenue / Average total assets",
        "explanation": "Revenue generated per unit of assets, a measure of efficiency."
      },
      {
        "name": "Net Profit Margin",
        "formula": "Net income / Revenue",
        "explanation": "Portion of each sales unit retained as profit after all expenses."
      },
      {
        "name": "Return on Assets",
        "formula": "ROA = Net income / Average total assets",
        "explanation": "Profit generated per unit of total assets."
      },
      {
        "name": "Return on Equity",
        "formula": "ROE = Net income / Average shareholders' equity",
        "explanation": "Profit generated per unit of owners' equity."
      },
      {
        "name": "DuPont (Three-Part)",
        "formula": "ROE = Net profit margin x Total asset turnover x Financial leverage",
        "explanation": "Decomposes ROE into profitability, efficiency, and leverage drivers."
      },
      {
        "name": "Financial Leverage Ratio",
        "formula": "Average total assets / Average shareholders' equity",
        "explanation": "Indicates how much assets are funded by equity versus debt."
      },
      {
        "name": "Basic Earnings Per Share",
        "formula": "(Net income - Preferred dividends) / Weighted average ordinary shares",
        "explanation": "Earnings attributable to each common share outstanding."
      }
    ],
    "definitions": [
      {
        "term": "Accrual Accounting",
        "definition": "Recognizing revenue when earned and expenses when incurred, regardless of when cash is exchanged."
      },
      {
        "term": "Balance Sheet",
        "definition": "A statement of a company's assets, liabilities, and owners' equity at a specific point in time."
      },
      {
        "term": "Cash Flow from Operations",
        "definition": "Cash generated by the principal revenue-producing activities of the business."
      },
      {
        "term": "FIFO",
        "definition": "First-in, first-out inventory method that assigns the cost of the oldest units to cost of goods sold first."
      },
      {
        "term": "LIFO Reserve",
        "definition": "The difference between inventory valued under FIFO and under LIFO, disclosed by firms using LIFO."
      },
      {
        "term": "Deferred Tax Liability",
        "definition": "Future income taxes payable arising from temporary differences between accounting and tax reporting."
      },
      {
        "term": "Impairment",
        "definition": "A reduction in the carrying amount of an asset when its recoverable amount falls below book value."
      },
      {
        "term": "Effective Interest Method",
        "definition": "Amortizing bond premium or discount by applying the market yield at issuance to the carrying amount each period."
      },
      {
        "term": "Earnings Management",
        "definition": "Deliberate use of accounting choices and estimates to influence reported earnings toward a target."
      },
      {
        "term": "Common-Size Analysis",
        "definition": "Expressing financial statement items as percentages of a base figure such as revenue or total assets for comparison."
      }
    ]
  },
  {
    "id": "corporate-issuers",
    "name": "Corporate Issuers",
    "code": "CI",
    "summary": "Corporate Issuers examines firms from the perspective of the issuer of securities, covering organizational forms, governance, business models, and the financing and investment decisions that create value. Corporate structures range from sole proprietorships and partnerships to limited companies, with attention to ownership, limited liability, and the separation of ownership and control. Corporate governance and stakeholder management address the roles of shareholders, the board, and other stakeholders, the principal-agent problem, and mechanisms that align incentives and manage conflicts. Business models describe how firms create, deliver, and capture value. Capital investment, or capital budgeting, evaluates projects using net present value and internal rate of return, with NPV preferred for its consistency with shareholder wealth maximization; analysts incorporate incremental after-tax cash flows and ignore sunk costs. The cost of capital combines the after-tax cost of debt, the cost of preferred equity, and the cost of common equity (often via the capital asset pricing model) into a weighted average cost of capital used to discount projects. Capital structure theory considers the trade-off between the tax benefit of debt and the costs of financial distress, the Modigliani-Miller propositions, and the effect of leverage on risk and return. Measures of leverage include the degree of operating, financial, and total leverage. Working capital and liquidity management address the cash conversion cycle, short-term funding, and sources of liquidity. Capital allocation links these decisions to long-run value creation for the firm and its providers of capital.",
    "formulas": [
      {
        "name": "Net Present Value",
        "formula": "NPV = Σ [CF_t / (1 + r)^t] - Initial investment",
        "explanation": "The value added by a project after discounting all cash flows."
      },
      {
        "name": "Internal Rate of Return",
        "formula": "IRR is the discount rate r at which NPV = 0",
        "explanation": "The project's expected compound annual return; accept if IRR exceeds the required rate."
      },
      {
        "name": "Weighted Average Cost of Capital",
        "formula": "WACC = (w_d × r_d × (1 - t)) + (w_p × r_p) + (w_e × r_e)",
        "explanation": "The blended after-tax required return on all sources of financing."
      },
      {
        "name": "After-Tax Cost of Debt",
        "formula": "r_d × (1 - Tax rate)",
        "explanation": "The cost of debt reduced by the tax deductibility of interest."
      },
      {
        "name": "Cost of Preferred Stock",
        "formula": "Preferred dividend / Price of preferred share",
        "explanation": "The required return implied by a fixed preferred dividend and its price."
      },
      {
        "name": "Cost of Equity (CAPM)",
        "formula": "r_e = R_f + β × (R_m - R_f)",
        "explanation": "Required return on equity based on systematic risk."
      },
      {
        "name": "Degree of Operating Leverage",
        "formula": "DOL = Q(P - V) / [Q(P - V) - FC]",
        "explanation": "Sensitivity of operating income to a change in unit sales."
      },
      {
        "name": "Degree of Financial Leverage",
        "formula": "DFL = EBIT / (EBIT - Interest)",
        "explanation": "Sensitivity of net income to a change in operating income."
      },
      {
        "name": "Degree of Total Leverage",
        "formula": "DTL = DOL × DFL",
        "explanation": "Combined sensitivity of net income to a change in unit sales."
      },
      {
        "name": "Breakeven Quantity",
        "formula": "FC / (P - V)",
        "explanation": "Sales volume at which total revenue equals total cost."
      },
      {
        "name": "Cash Conversion Cycle",
        "formula": "Days of inventory + Days of receivables - Days of payables",
        "explanation": "Time to convert investment in inventory and receivables back into cash."
      }
    ],
    "definitions": [
      {
        "term": "Capital Budgeting",
        "definition": "The process of evaluating and selecting long-term investment projects that maximize shareholder value."
      },
      {
        "term": "Weighted Average Cost of Capital",
        "definition": "The average rate a firm expects to pay to finance its assets, weighted by the market value of each capital source."
      },
      {
        "term": "Capital Structure",
        "definition": "The mix of debt and equity a company uses to finance its operations and growth."
      },
      {
        "term": "Agency Problem",
        "definition": "Conflicts of interest that arise when managers (agents) act in their own interest rather than that of owners (principals)."
      },
      {
        "term": "Sunk Cost",
        "definition": "A cost already incurred that cannot be recovered and should be excluded from investment decisions."
      },
      {
        "term": "Opportunity Cost",
        "definition": "The value of the next best alternative forgone when a resource is committed to a particular use."
      },
      {
        "term": "Operating Leverage",
        "definition": "The use of fixed operating costs, which magnifies the effect of sales changes on operating income."
      },
      {
        "term": "Modigliani-Miller Proposition",
        "definition": "The theory that, under perfect markets, firm value is independent of capital structure absent taxes and distress costs."
      },
      {
        "term": "Working Capital",
        "definition": "Current assets minus current liabilities, representing the funds available for day-to-day operations."
      },
      {
        "term": "Corporate Governance",
        "definition": "The system of internal controls and procedures by which a company is directed and its stakeholder conflicts are managed."
      }
    ]
  },
  {
    "id": "equity-investments",
    "name": "Equity Investments",
    "code": "EQ",
    "summary": "Equity Investments covers how stock markets are organized and how equity securities are analyzed and valued. Market organization and structure describe the functions of the financial system, types of assets and intermediaries, long and short positions, leveraged positions and margin, and order types. Security market indexes are constructed using price, equal, or market-capitalization weighting, each with rebalancing and reconstitution implications, and serve as benchmarks and the basis for index funds. Market efficiency examines the weak, semi-strong, and strong forms of the efficient market hypothesis, market anomalies, and behavioral finance implications for active management. The overview of equity securities distinguishes common and preferred shares, voting and ownership rights, and public versus private equity, along with the role of equity in financing and the relationship between cost of equity and required return. Company and industry analysis applies frameworks such as Porter's five forces, industry life cycles, and competitive positioning to understand business prospects. Equity valuation uses three families of models: present value models, most notably the dividend discount model and free cash flow models; multiplier (relative value) models such as price-to-earnings, price-to-book, and enterprise value multiples; and asset-based valuation. The constant-growth (Gordon) model and multistage models capture different growth patterns, while justified multiples link price to fundamentals like growth and required return. Analysts select models based on data availability, the firm's characteristics, and the purpose of the valuation.",
    "formulas": [
      {
        "name": "Gordon Growth Model",
        "formula": "Value = D_1 / (r - g)",
        "explanation": "Values a stock as next year's dividend divided by the required return minus constant growth."
      },
      {
        "name": "Next Period Dividend",
        "formula": "D_1 = D_0 × (1 + g)",
        "explanation": "Projects the upcoming dividend from the current dividend and the growth rate."
      },
      {
        "name": "Sustainable Growth Rate",
        "formula": "g = Retention ratio × ROE = b × ROE",
        "explanation": "Growth a firm can sustain from reinvested earnings without changing leverage."
      },
      {
        "name": "Justified Leading P/E",
        "formula": "(1 - b) / (r - g)",
        "explanation": "Forward price-to-earnings consistent with fundamentals and the dividend model."
      },
      {
        "name": "Justified Trailing P/E",
        "formula": "[(1 - b)(1 + g)] / (r - g)",
        "explanation": "Historical price-to-earnings consistent with payout, growth, and required return."
      },
      {
        "name": "Preferred Stock Value",
        "formula": "Annual dividend / Required rate of return",
        "explanation": "Values a perpetual fixed dividend at the required return."
      },
      {
        "name": "Terminal Value in Multistage DDM",
        "formula": "V_n = D_(n+1) / (r - g)",
        "explanation": "Capitalizes the stable-growth dividend stream at the end of the high-growth phase."
      },
      {
        "name": "Enterprise Value",
        "formula": "EV = Market value of equity + Debt - Cash",
        "explanation": "The total value of the firm's operating assets to all capital providers."
      },
      {
        "name": "PEG Ratio",
        "formula": "(P/E ratio) / Earnings growth rate (%)",
        "explanation": "Relates valuation to growth; lower values may indicate better value."
      },
      {
        "name": "Expected Holding Period Return",
        "formula": "(D_1 + P_1 - P_0) / P_0",
        "explanation": "One-period return from dividends plus price appreciation."
      }
    ],
    "definitions": [
      {
        "term": "Dividend Discount Model",
        "definition": "A valuation method that estimates a stock's value as the present value of its expected future dividends."
      },
      {
        "term": "Efficient Market Hypothesis",
        "definition": "The proposition that security prices fully reflect available information, making consistent outperformance difficult."
      },
      {
        "term": "Price-to-Earnings Ratio",
        "definition": "A valuation multiple equal to the share price divided by earnings per share."
      },
      {
        "term": "Free Cash Flow to Equity",
        "definition": "Cash available to common shareholders after operating expenses, investment, and net debt repayment."
      },
      {
        "term": "Market Capitalization",
        "definition": "The total market value of a company's outstanding shares, equal to share price times shares outstanding."
      },
      {
        "term": "Preferred Stock",
        "definition": "Equity that typically pays a fixed dividend and ranks ahead of common stock in dividends and liquidation."
      },
      {
        "term": "Book Value of Equity",
        "definition": "The accounting value of shareholders' equity, equal to total assets minus total liabilities."
      },
      {
        "term": "Index Weighting",
        "definition": "The method used to determine each security's contribution to an index, such as price, equal, or market-cap weighting."
      },
      {
        "term": "Short Position",
        "definition": "A position created by selling a borrowed security, profiting if the price falls."
      },
      {
        "term": "Required Rate of Return",
        "definition": "The minimum return an investor demands for holding a security given its risk."
      }
    ]
  },
  {
    "id": "fixed-income",
    "name": "Fixed Income",
    "code": "FI",
    "summary": "Fixed Income covers the features, markets, valuation, and risks of debt securities. Instrument features include the issuer, maturity, par value, coupon rate and frequency, currency, and embedded options such as calls, puts, and conversions, along with covenants and seniority. Issuance, trading, and funding describe primary and secondary markets, money market instruments, and how corporations, sovereigns, and financial institutions raise short- and long-term debt, including repurchase agreements. Bond valuation discounts promised cash flows at appropriate rates; prices move inversely to yields, and a bond trades at a premium, par, or discount depending on the relationship between its coupon and market yield. Yield measures include the yield to maturity, current yield, and yields on money market instruments, and the term structure is described by spot rates, forward rates, and par rates, with yield curve shapes reflecting expectations and risk premia. Interest rate risk is measured by duration (Macaulay, modified, and effective) and convexity, which together approximate the percentage price change for a given yield change; money duration and the price value of a basis point express risk in currency terms. Credit analysis evaluates default probability and loss given default, credit ratings, credit spreads, and the drivers of spread changes. Securitization transforms pools of assets such as mortgages and receivables into asset-backed and mortgage-backed securities with tranching that redistributes credit and prepayment risk among investors.",
    "formulas": [
      {
        "name": "Bond Price",
        "formula": "Price = Σ [Coupon / (1 + r)^t] + [Face value / (1 + r)^N]",
        "explanation": "Present value of all coupons plus the redemption of par at maturity."
      },
      {
        "name": "Current Yield",
        "formula": "Annual coupon payment / Bond price",
        "explanation": "Annual coupon income relative to the bond's market price."
      },
      {
        "name": "Approximate Modified Duration",
        "formula": "(PV_down - PV_up) / (2 × Δy × PV_0)",
        "explanation": "Estimates price sensitivity to small parallel changes in yield."
      },
      {
        "name": "Modified vs Macaulay Duration",
        "formula": "Modified duration = Macaulay duration / (1 + yield per period)",
        "explanation": "Converts Macaulay duration into a measure of price sensitivity to yield."
      },
      {
        "name": "Money Duration",
        "formula": "Annual modified duration × Full price",
        "explanation": "Expresses interest rate risk in currency units rather than percent."
      },
      {
        "name": "Price Value of a Basis Point",
        "formula": "PVBP = Money duration × 0.0001",
        "explanation": "The change in a bond's value for a one-basis-point change in yield."
      },
      {
        "name": "Approximate Convexity",
        "formula": "(PV_down + PV_up - 2×PV_0) / (Δy² × PV_0)",
        "explanation": "Captures the curvature of the price-yield relationship."
      },
      {
        "name": "Percentage Price Change",
        "formula": "ΔP/P ≈ -ModDur × Δy + 0.5 × Convexity × (Δy)²",
        "explanation": "Combines duration and convexity to estimate the total price impact of a yield change."
      },
      {
        "name": "Effective Duration",
        "formula": "(PV_down - PV_up) / (2 × Δcurve × PV_0)",
        "explanation": "Duration measure used for bonds with embedded options, based on benchmark yield shifts."
      },
      {
        "name": "Forward Rate Relationship",
        "formula": "(1 + z_A)^A × (1 + f)^B = (1 + z_(A+B))^(A+B)",
        "explanation": "Links spot rates to the implied forward rate between two future dates."
      }
    ],
    "definitions": [
      {
        "term": "Yield to Maturity",
        "definition": "The single discount rate that equates a bond's price to the present value of its cash flows, assuming it is held to maturity."
      },
      {
        "term": "Coupon Rate",
        "definition": "The annual interest rate, stated as a percentage of par, that determines a bond's periodic coupon payments."
      },
      {
        "term": "Macaulay Duration",
        "definition": "The weighted-average time to receipt of a bond's cash flows, measured in years."
      },
      {
        "term": "Convexity",
        "definition": "A measure of the curvature in the relationship between bond prices and yields that improves duration-based estimates."
      },
      {
        "term": "Credit Spread",
        "definition": "The additional yield over a benchmark (such as government) rate that compensates investors for credit risk."
      },
      {
        "term": "Spot Rate",
        "definition": "The yield on a zero-coupon bond for a specific maturity, used to discount a single future cash flow."
      },
      {
        "term": "Forward Rate",
        "definition": "An interest rate agreed today for borrowing or lending over a future period implied by current spot rates."
      },
      {
        "term": "Embedded Option",
        "definition": "A provision such as a call, put, or conversion feature built into a bond that affects its cash flows and value."
      },
      {
        "term": "Securitization",
        "definition": "The process of pooling financial assets and issuing tradable securities backed by their cash flows."
      },
      {
        "term": "Recovery Rate",
        "definition": "The percentage of a bond's value that investors expect to recover in the event of default."
      }
    ]
  },
  {
    "id": "derivatives",
    "name": "Derivatives",
    "code": "DV",
    "summary": "Derivatives are instruments whose value derives from an underlying asset, rate, or index. The topic distinguishes forward commitments, which obligate both parties, from contingent claims, which grant a right. Forward commitments include forwards (customized, over-the-counter), futures (standardized, exchange-traded, marked to market daily through a clearinghouse), and swaps (a series of exchanges of cash flows equivalent to a portfolio of forwards). Contingent claims are options: a call gives the right to buy and a put the right to sell at a strike price, with European options exercisable only at expiration and American options exercisable any time. Derivative markets serve risk transfer, price discovery, and cost or operational efficiency, though they carry counterparty and leverage risks. Pricing and valuation rest on arbitrage and replication: the no-arbitrage forward price equals the cost of carrying the underlying to delivery, adjusting for income and carrying costs. The value of a forward changes as the spot price and time evolve. Option pricing recognizes intrinsic value and time value, factors affecting option value (underlying price, strike, time, volatility, risk-free rate, and cash flows on the underlying), and the one-period and two-period binomial models using risk-neutral probabilities. Put-call parity links the prices of European calls, puts, the underlying, and a risk-free bond, while put-call-forward parity uses the forward price. Understanding payoffs, boundary conditions, and the replication of positions allows analysts to value derivatives and to construct hedges and synthetic positions.",
    "formulas": [
      {
        "name": "Forward Price (No Carry Costs)",
        "formula": "F_0 = S_0 × (1 + r)^T",
        "explanation": "No-arbitrage forward price when the underlying has no income or costs."
      },
      {
        "name": "Forward Price with Income and Costs",
        "formula": "F_0 = [S_0 - PV(income) + PV(costs)] × (1 + r)^T",
        "explanation": "Adjusts the carry for benefits received and costs paid on the underlying."
      },
      {
        "name": "Value of a Long Forward",
        "formula": "V_t = S_t - [F_0 / (1 + r)^(T - t)]",
        "explanation": "Mark-to-market value of an existing forward before expiration."
      },
      {
        "name": "Put-Call Parity",
        "formula": "C + K/(1 + r)^T = P + S",
        "explanation": "No-arbitrage relationship among a European call, put, bond, and the underlying."
      },
      {
        "name": "Put-Call-Forward Parity",
        "formula": "C + K/(1 + r)^T = P + F/(1 + r)^T",
        "explanation": "Put-call parity expressed using the forward price instead of the spot."
      },
      {
        "name": "Call Intrinsic Value at Expiration",
        "formula": "Max(0, S - K)",
        "explanation": "A call has value only when the underlying exceeds the strike."
      },
      {
        "name": "Put Intrinsic Value at Expiration",
        "formula": "Max(0, K - S)",
        "explanation": "A put has value only when the strike exceeds the underlying."
      },
      {
        "name": "Risk-Neutral Probability (Binomial)",
        "formula": "π = [(1 + r) - d] / (u - d)",
        "explanation": "The probability used to value options by discounting at the risk-free rate."
      },
      {
        "name": "One-Period Binomial Call Value",
        "formula": "C = [π × C_u + (1 - π) × C_d] / (1 + r)",
        "explanation": "Present value of expected option payoffs under risk-neutral probabilities."
      }
    ],
    "definitions": [
      {
        "term": "Forward Contract",
        "definition": "A customized over-the-counter agreement to buy or sell an asset at a set price on a future date."
      },
      {
        "term": "Futures Contract",
        "definition": "A standardized, exchange-traded forward contract that is marked to market daily through a clearinghouse."
      },
      {
        "term": "Swap",
        "definition": "An agreement to exchange a series of cash flows over time, economically similar to a portfolio of forward contracts."
      },
      {
        "term": "Call Option",
        "definition": "A contract giving the holder the right, but not the obligation, to buy an underlying asset at the strike price."
      },
      {
        "term": "Put Option",
        "definition": "A contract giving the holder the right, but not the obligation, to sell an underlying asset at the strike price."
      },
      {
        "term": "Intrinsic Value",
        "definition": "The value an option would have if exercised immediately, equal to its in-the-money amount or zero."
      },
      {
        "term": "Time Value",
        "definition": "The portion of an option's premium above intrinsic value reflecting the potential for favorable price moves before expiration."
      },
      {
        "term": "Arbitrage",
        "definition": "A risk-free profit obtained from simultaneous transactions exploiting a pricing discrepancy with no net investment."
      },
      {
        "term": "Replication",
        "definition": "Constructing a portfolio of assets that reproduces the payoff of a derivative to determine its no-arbitrage price."
      },
      {
        "term": "Mark to Market",
        "definition": "The daily settlement of gains and losses on a futures position to current market prices."
      }
    ]
  },
  {
    "id": "alternative-investments",
    "name": "Alternative Investments",
    "code": "AI",
    "summary": "Alternative Investments are asset classes outside traditional long-only stocks, bonds, and cash, valued for diversification, return potential, and lower correlation with public markets. The main categories are private capital (private equity and private debt), real estate, infrastructure, natural resources including commodities and timberland, and hedge funds. Private equity strategies include leveraged buyouts, venture capital, and growth equity, typically accessed through closed-end funds with capital commitments, drawdowns, and a fund life of several years. Hedge funds pursue strategies such as equity long-short, event-driven, relative value, and macro, often using leverage, short selling, and derivatives. Real estate spans direct ownership and indirect vehicles such as REITs, with returns from income and appreciation. Commodities provide inflation sensitivity, with futures returns decomposed into spot, roll, and collateral components. Methods of investing include direct investment, co-investment, and fund investment, each with different control, fees, and liquidity. Fee structures commonly feature a management fee on committed or invested capital plus a performance or incentive fee on profits, often subject to a hurdle rate and a high-water mark that protects investors from paying twice for the same gains. Because many alternatives are illiquid, infrequently priced, and use appraisal-based valuations, reported returns can understate true volatility and correlation. Investors must conduct thorough due diligence on managers, valuation practices, leverage, and lock-up and redemption terms before committing capital to these less transparent and less regulated markets.",
    "formulas": [
      {
        "name": "Management Fee",
        "formula": "Management fee rate × AUM (or committed capital)",
        "explanation": "Recurring fee charged by the manager regardless of performance."
      },
      {
        "name": "Incentive (Performance) Fee",
        "formula": "Incentive rate × Profit above hurdle and high-water mark",
        "explanation": "Fee paid to the manager on profits exceeding required thresholds."
      },
      {
        "name": "Two and Twenty Structure",
        "formula": "2% management fee + 20% of profits",
        "explanation": "A common hedge fund and private equity fee arrangement."
      },
      {
        "name": "Net Investor Return",
        "formula": "Gross return - Management fee - Incentive fee",
        "explanation": "The return earned by the investor after all manager fees."
      },
      {
        "name": "Commodity Futures Total Return",
        "formula": "Price return + Roll return + Collateral return",
        "explanation": "Decomposes the return on a fully collateralized commodity futures position."
      }
    ],
    "definitions": [
      {
        "term": "Private Equity",
        "definition": "Investment in the equity of companies that are not publicly traded, including buyouts and venture capital."
      },
      {
        "term": "Hedge Fund",
        "definition": "A privately pooled investment vehicle that uses flexible strategies, leverage, and derivatives to pursue absolute returns."
      },
      {
        "term": "Leveraged Buyout",
        "definition": "The acquisition of a company using a significant amount of borrowed funds secured by the target's assets and cash flows."
      },
      {
        "term": "Venture Capital",
        "definition": "Private equity financing provided to early-stage, high-growth companies in exchange for an ownership stake."
      },
      {
        "term": "High-Water Mark",
        "definition": "The highest value a fund has previously reached, above which incentive fees are charged to avoid paying twice for the same gains."
      },
      {
        "term": "Hurdle Rate",
        "definition": "The minimum return a fund must earn before the manager is entitled to an incentive fee."
      },
      {
        "term": "Carried Interest",
        "definition": "The share of a private fund's profits paid to the general partner as a performance incentive."
      },
      {
        "term": "Real Estate Investment Trust",
        "definition": "A company that owns or finances income-producing real estate and trades like a publicly listed security."
      },
      {
        "term": "Lock-Up Period",
        "definition": "A time during which investors are restricted from redeeming their capital from a fund."
      },
      {
        "term": "Roll Return",
        "definition": "The return from rolling expiring commodity futures into new contracts, positive in backwardation and negative in contango."
      }
    ]
  },
  {
    "id": "portfolio-management",
    "name": "Portfolio Management",
    "code": "PM",
    "summary": "Portfolio Management treats investments as a whole rather than in isolation, emphasizing diversification, risk-return trade-offs, and a disciplined process. The portfolio approach shows that combining assets with less than perfect correlation reduces risk without proportionally reducing expected return, so investors are compensated only for systematic (non-diversifiable) risk. The portfolio management process moves from planning, where the investment policy statement specifies objectives (return and risk) and constraints (liquidity, time horizon, taxes, legal, and unique circumstances), to execution (asset allocation and security selection) and feedback (monitoring and rebalancing). Risk and return are measured using expected return, variance and standard deviation, covariance and correlation, and the efficient frontier of optimal risky portfolios. Adding a risk-free asset produces the capital allocation line and, for the market portfolio, the capital market line. The capital asset pricing model and the security market line price individual assets according to beta, the measure of systematic risk, and define the market risk premium. Performance is evaluated with risk-adjusted measures such as the Sharpe ratio, Treynor ratio, Jensen's alpha, and the M-squared measure. The topic also introduces a risk management framework, including risk governance, identification, measurement, and tolerance, and behavioral finance, which examines cognitive errors and emotional biases that cause investors to deviate from rationality. Finally, it surveys technology and fintech in investment management, such as big data, machine learning, and robo-advisers, that are reshaping analysis and the delivery of advice.",
    "formulas": [
      {
        "name": "Expected Portfolio Return",
        "formula": "E(R_p) = Σ [w_i × E(R_i)]",
        "explanation": "The weighted average of the expected returns of the portfolio's assets."
      },
      {
        "name": "Two-Asset Portfolio Variance",
        "formula": "σ²_p = w₁²σ₁² + w₂²σ₂² + 2w₁w₂ρ₁₂σ₁σ₂",
        "explanation": "Combines individual variances and the covariance between the two assets."
      },
      {
        "name": "Portfolio Standard Deviation",
        "formula": "σ_p = √(Portfolio variance)",
        "explanation": "Total portfolio risk expressed in the same units as returns."
      },
      {
        "name": "Capital Asset Pricing Model",
        "formula": "E(R) = R_f + β × [E(R_m) - R_f]",
        "explanation": "Prices an asset's required return based on its systematic risk."
      },
      {
        "name": "Beta",
        "formula": "β = Cov(R_i, R_m) / Var(R_m) = ρ_(i,m) × (σ_i / σ_m)",
        "explanation": "Sensitivity of an asset's return to movements in the market."
      },
      {
        "name": "Sharpe Ratio",
        "formula": "(R_p - R_f) / σ_p",
        "explanation": "Excess return per unit of total risk."
      },
      {
        "name": "Treynor Ratio",
        "formula": "(R_p - R_f) / β_p",
        "explanation": "Excess return per unit of systematic risk."
      },
      {
        "name": "Jensen's Alpha",
        "formula": "α = R_p - [R_f + β_p × (R_m - R_f)]",
        "explanation": "Return earned above what CAPM predicts, measuring manager skill."
      },
      {
        "name": "M-Squared Measure",
        "formula": "M² = (R_p - R_f) × (σ_m / σ_p) - (R_m - R_f)",
        "explanation": "Risk-adjusted performance expressed as return relative to the market."
      },
      {
        "name": "Capital Market Line",
        "formula": "E(R_p) = R_f + [(E(R_m) - R_f) / σ_m] × σ_p",
        "explanation": "The risk-return line for efficient portfolios combining the market and the risk-free asset."
      }
    ],
    "definitions": [
      {
        "term": "Investment Policy Statement",
        "definition": "A written document that defines a client's objectives and constraints to guide portfolio decisions."
      },
      {
        "term": "Systematic Risk",
        "definition": "Market-wide risk that cannot be eliminated through diversification and for which investors are compensated."
      },
      {
        "term": "Efficient Frontier",
        "definition": "The set of portfolios offering the highest expected return for each level of risk."
      },
      {
        "term": "Beta",
        "definition": "A measure of an asset's systematic risk relative to the overall market, where the market has a beta of one."
      },
      {
        "term": "Capital Asset Pricing Model",
        "definition": "A model that relates an asset's required return to the risk-free rate and its systematic risk via beta."
      },
      {
        "term": "Sharpe Ratio",
        "definition": "A measure of risk-adjusted return equal to excess return over the risk-free rate divided by total risk."
      },
      {
        "term": "Diversification",
        "definition": "Combining assets whose returns are less than perfectly correlated to reduce overall portfolio risk."
      },
      {
        "term": "Risk Tolerance",
        "definition": "The level of risk an investor is both willing and able to take in pursuit of return objectives."
      },
      {
        "term": "Behavioral Bias",
        "definition": "A systematic cognitive error or emotional influence that leads investors to make non-rational decisions."
      },
      {
        "term": "Rebalancing",
        "definition": "Adjusting portfolio weights back toward target allocations as market movements cause them to drift."
      }
    ]
  }
]
