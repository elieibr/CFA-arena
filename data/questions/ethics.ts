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

export const ethicsQuestions: Question[] = [
  {
    id: 'eth-001',
    topic_id: 'ethical-standards',
    question_text: 'Sarah Mitchell, CFA, works as a portfolio manager at Greenfield Investments. She discovers that her firm\'s compliance procedures do not adequately prevent the use of material nonpublic information. Mitchell reports this deficiency to her supervisor, who takes no action. According to the CFA Institute Standards of Professional Conduct, which of the following actions is least appropriate for Mitchell?',
    option_a: 'Continue working at the firm while documenting her concerns in writing',
    option_b: 'Dissociate from the firm by resigning her position',
    option_c: 'Report the violation directly to CFA Institute before exhausting internal remedies',
    correct_answer: 'C',
    explanation: 'Under Standard I(A) Knowledge of the Law, members must first attempt to resolve violations through internal channels before reporting externally. Mitchell should dissociate from the activity or firm if internal remedies fail, but reporting directly to CFA Institute without exhausting internal options is premature.',
    difficulty: 2
  },
  {
    id: 'eth-002',
    topic_id: 'ethical-standards',
    question_text: 'David Chen, CFA, is an equity analyst covering pharmaceutical companies. He receives an invitation from BioTech Corp to attend an industry conference in Hawaii, with all expenses paid including airfare, accommodation, and meals totaling approximately $4,500. Which action would least likely violate Standard I(B) Independence and Objectivity?',
    option_a: 'Accepting the invitation as long as he discloses it to his employer',
    option_b: 'Declining the invitation and offering to pay his own expenses to attend',
    option_c: 'Accepting only if BioTech Corp is not currently under his research coverage',
    correct_answer: 'B',
    explanation: 'Standard I(B) requires members to maintain independence and objectivity. Accepting substantial gifts creates a conflict of interest regardless of disclosure or coverage status. Paying his own expenses ensures independence and allows him to attend the legitimate business event.',
    difficulty: 2
  },
  {
    id: 'eth-003',
    topic_id: 'ethical-standards',
    question_text: 'Rebecca Thompson manages a $250 million equity fund and discovers that one of her holdings, DataSoft Inc., will announce disappointing earnings next week. She learned this information during a private meeting with DataSoft\'s CFO. Before the public announcement, Thompson sells all of the fund\'s DataSoft shares, saving her clients approximately $1.8 million in losses. Has Thompson most likely violated the Standards?',
    option_a: 'No, because she acted in the best interests of her clients by avoiding losses',
    option_b: 'Yes, she violated Standard II(A) Material Nonpublic Information',
    option_c: 'No, because fund managers have a fiduciary duty to protect client assets',
    correct_answer: 'B',
    explanation: 'Standard II(A) prohibits trading on material nonpublic information regardless of the intent to benefit clients. The earnings information was material, nonpublic, and obtained in breach of duty. Acting in clients\' best interests does not justify using inside information.',
    difficulty: 1
  },
  {
    id: 'eth-004',
    topic_id: 'ethical-standards',
    question_text: 'Jonathan Park, CFA, is leaving his employer Westfield Capital to start his own advisory firm. Prior to his departure, he contacts 45 of his former clients to inform them of his new business. He provides only factual information about his new firm\'s services without disparaging Westfield Capital. Which Standard has Park most likely violated?',
    option_a: 'Standard III(B) Fair Dealing',
    option_b: 'Standard IV(A) Loyalty to Employer',
    option_c: 'Standard IV(C) Responsibilities of Supervisors',
    correct_answer: 'B',
    explanation: 'Standard IV(A) requires loyalty to employers and prohibits soliciting clients before leaving employment. While Park may contact clients after resignation, soliciting them while still employed violates his duty of loyalty to Westfield Capital, even if the information provided is factual.',
    difficulty: 2
  },
  {
    id: 'eth-005',
    topic_id: 'ethical-standards',
    question_text: 'Maria Gonzalez, CFA, publishes a research report recommending the purchase of TechGlobal shares with a target price of $85. The report states that Gonzalez\'s analysis is based on "comprehensive due diligence and proprietary models." In reality, she based her recommendation primarily on a third-party research report from an independent firm, with only minor adjustments. Which Standard did Gonzalez most likely violate?',
    option_a: 'Standard I(C) Misrepresentation',
    option_b: 'Standard V(A) Diligence and Reasonable Basis',
    option_c: 'Standard V(C) Record Retention',
    correct_answer: 'A',
    explanation: 'Standard I(C) prohibits misrepresentation of qualifications, services, or performance. By claiming "comprehensive due diligence and proprietary models" when she primarily relied on third-party research, Gonzalez misrepresented her work. She should have properly attributed the source material.',
    difficulty: 2
  },
  {
    id: 'eth-006',
    topic_id: 'ethical-standards',
    question_text: 'Erik Larsen receives an email from his supervisor instructing all analysts to increase their price targets by 10% on companies where the firm has investment banking relationships. The email states this will help the firm win additional underwriting business. Larsen complies with the instruction and raises his price targets accordingly. Which of the following statements is least accurate regarding this situation?',
    option_a: 'Larsen violated Standard I(B) Independence and Objectivity by allowing investment banking to influence his research',
    option_b: 'The supervisor violated Standard III(A) Loyalty, Prudence, and Care by prioritizing firm interests over research integrity',
    option_c: 'Larsen fulfilled his duty under Standard IV(A) Loyalty by following his supervisor\'s instructions',
    correct_answer: 'C',
    explanation: 'Standard IV(A) Loyalty does not require blind obedience to instructions that violate the Standards. Members must refuse to participate in illegal or unethical activities. Larsen should have rejected the instruction and reported the violation, as loyalty to ethical standards supersedes loyalty to employer directives.',
    difficulty: 2
  },
  {
    id: 'eth-007',
    topic_id: 'ethical-standards',
    question_text: 'Lisa Williams, CFA, manages retirement accounts for 200 individual clients. She receives an allocation of 5,000 shares in a hot IPO expected to increase 30% on the first day. Williams allocates all 5,000 shares to her five largest clients (by account value) and none to her smaller clients. Has Williams most likely violated the Standards?',
    option_a: 'No, because allocating based on account size is a reasonable and objective method',
    option_b: 'Yes, she violated Standard III(B) Fair Dealing by not giving all clients an opportunity to participate',
    option_c: 'No, because the allocation method was predetermined and consistently applied',
    correct_answer: 'B',
    explanation: 'Standard III(B) requires fair dealing with all clients. While account size may be one factor in allocations, using it as the sole criterion for a valuable IPO opportunity is unfair to smaller clients. Williams should have used a more equitable allocation method such as pro-rata distribution or rotation.',
    difficulty: 2
  },
  {
    id: 'eth-008',
    topic_id: 'ethical-standards',
    question_text: 'Thomas Anderson, CFA, serves on the board of directors for MicroSystems Inc., for which he receives $75,000 annually in director fees. Anderson also works as an analyst at Sterling Research, where he covers the technology sector including MicroSystems. Which action would be most appropriate for Anderson?',
    option_a: 'Continue covering MicroSystems but disclose his board membership in all research reports',
    option_b: 'Resign from the MicroSystems board to eliminate the conflict of interest',
    option_c: 'Remove MicroSystems from his coverage universe and have another analyst cover the company',
    correct_answer: 'C',
    explanation: 'Standard VI(A) Disclosure of Conflicts requires disclosure of conflicts, but disclosure alone is insufficient when the conflict is so significant that it impairs objectivity. Serving on the board creates such a material conflict that Anderson cannot objectively analyze the company. Removing it from his coverage is the most appropriate solution.',
    difficulty: 2
  },
  {
    id: 'eth-009',
    topic_id: 'ethical-standards',
    question_text: 'Jennifer Martinez works for Global Asset Management and is pursuing her CFA charter. She passes Level II and immediately updates her business card to read "Jennifer Martinez, CFA Level II." She also updates her email signature to include "CFA Candidate, Level II Passed." Which of these actions is least likely a violation of Standard VII(B) Reference to CFA Institute?',
    option_a: 'The business card reference to "CFA Level II"',
    option_b: 'The email signature reference to "CFA Candidate, Level II Passed"',
    option_c: 'Both are violations of the Standard',
    correct_answer: 'B',
    explanation: 'Standard VII(B) prohibits references that exaggerate or misrepresent CFA designation or candidacy. "CFA Level II" incorrectly implies a partial designation that does not exist. However, stating "CFA Candidate, Level II Passed" is acceptable as it accurately describes her status as a candidate who has completed Level II.',
    difficulty: 2
  },
  {
    id: 'eth-010',
    topic_id: 'ethical-standards',
    question_text: 'Robert Kim, CFA, manages a hedge fund that takes a large short position (worth $12 million) in RetailCorp shares. Two days later, Kim publishes a scathing research report highlighting accounting irregularities at RetailCorp, causing the stock to decline 18%. Kim\'s fund profits $2.1 million from the short position. Which of the following is most accurate?',
    option_a: 'Kim violated Standard II(B) Market Manipulation by timing his report to profit from price movement',
    option_b: 'Kim violated Standard VI(A) Disclosure of Conflicts by not disclosing his short position in the report',
    option_c: 'Kim did not violate the Standards if the research report was factually accurate and well-researched',
    correct_answer: 'B',
    explanation: 'Standard VI(A) requires disclosure of matters that could impair independence or objectivity. Kim\'s substantial short position creates a material conflict that must be disclosed. Even if the research is accurate, the failure to disclose the conflict violates the Standards. Disclosure allows readers to assess potential bias.',
    difficulty: 3
  },
  {
    id: 'eth-011',
    topic_id: 'ethical-standards',
    question_text: 'Samantha Brooks, CFA, discovers that her colleague James Wilson has been backdating trades to benefit certain clients at the expense of others. Brooks reports this to the compliance department, which conducts an investigation but takes no action against Wilson. Three months later, Brooks observes Wilson continuing the same practice. What is Brooks\' most appropriate course of action?',
    option_a: 'Dissociate from Wilson by requesting to work in a different department',
    option_b: 'Report the violation directly to regulatory authorities',
    option_c: 'Document the ongoing violations and escalate to senior management or the firm\'s legal counsel',
    correct_answer: 'C',
    explanation: 'Standard I(A) Knowledge of the Law requires members to attempt to stop violations through appropriate channels. After the initial compliance report failed, Brooks should escalate within the firm to higher authorities. Dissociation and external reporting are later options if internal remedies are exhausted.',
    difficulty: 3
  },
  {
    id: 'eth-012',
    topic_id: 'ethical-standards',
    question_text: 'Michael Chang, CFA, is a portfolio manager who frequently trades based on technical analysis patterns. He implements a trading strategy for his clients but does not maintain detailed records of the technical signals or the rationale for each trade. After three years, the strategy has generated returns of 8.2% annually versus the benchmark return of 7.1%. Has Chang most likely violated the Standards?',
    option_a: 'No, because his strategy outperformed the benchmark',
    option_b: 'Yes, he violated Standard V(C) Record Retention',
    option_c: 'No, because technical analysis does not require detailed documentation',
    correct_answer: 'B',
    explanation: 'Standard V(C) requires members to maintain records supporting their investment analysis, recommendations, and actions. Regardless of performance or methodology, Chang must document the basis for his trading decisions. This allows for reconstruction of the rationale and demonstrates compliance with fiduciary duties.',
    difficulty: 2
  },
  {
    id: 'eth-013',
    topic_id: 'ethical-standards',
    question_text: 'Patricia O\'Brien manages a $400 million pension fund and discovers she made a calculation error that caused the fund to be overweighted in European equities by 3.5% (approximately $14 million) for the past six months. The European position gained 12% during this period, contributing to strong overall performance. Which action is most consistent with the Standards?',
    option_a: 'Correct the error immediately and disclose it to the pension fund trustees',
    option_b: 'Maintain the current allocation since it generated positive returns',
    option_c: 'Gradually reduce the European exposure over time without disclosure to avoid concern',
    correct_answer: 'A',
    explanation: 'Standard III(A) Loyalty, Prudence, and Care and Standard III(D) Performance Presentation require honesty and transparency with clients. O\'Brien must correct the error immediately and disclose it, regardless of whether it generated positive returns. The positive outcome does not justify maintaining an unauthorized deviation from the investment policy.',
    difficulty: 2
  },
  {
    id: 'eth-014',
    topic_id: 'ethical-standards',
    question_text: 'George Foster, CFA, is an investment advisor who includes the following statement in his marketing materials: "Our equity strategy has generated average annual returns of 14.2% over the past five years, significantly outperforming the S&P 500\'s return of 11.8%." Foster\'s calculation includes only accounts that remained with the firm for the full five-year period and excludes 22 accounts that were closed or transferred. Has Foster violated the Standards?',
    option_a: 'No, because comparing only active accounts provides a more accurate picture of current capabilities',
    option_b: 'Yes, he violated Standard III(D) Performance Presentation by excluding terminated accounts',
    option_c: 'No, because the comparison to the S&P 500 benchmark is clearly disclosed',
    correct_answer: 'B',
    explanation: 'Standard III(D) requires fair, accurate, and complete performance presentation. Excluding terminated accounts creates survivorship bias and misrepresents actual performance. Foster must include all accounts that were part of the composite during the measurement period, not just those that survived the full period.',
    difficulty: 2
  },
  {
    id: 'eth-015',
    topic_id: 'ethical-standards',
    question_text: 'Daniel Wright, CFA, receives a request from his client to vote proxy shares in favor of a merger that Wright believes is not in the client\'s best economic interest. The client explicitly instructs Wright to vote for the merger for personal reasons unrelated to investment returns. Wright should most likely:',
    option_a: 'Vote against the merger based on his professional judgment of the client\'s economic interest',
    option_b: 'Follow the client\'s explicit instruction and vote in favor of the merger',
    option_c: 'Abstain from voting to avoid the conflict between client instruction and professional judgment',
    correct_answer: 'B',
    explanation: 'Standard III(A) Loyalty, Prudence, and Care requires acting in clients\' best interests, but when a client gives explicit instructions, members should generally follow them. The client has the right to make decisions for personal reasons. Wright should document the instruction and may advise the client of his concerns, but should ultimately follow the explicit directive.',
    difficulty: 3
  },
  {
    id: 'eth-016',
    topic_id: 'ethical-standards',
    question_text: 'Amanda Peterson, CFA, works for Horizon Capital and is preparing to leave to join a competing firm. During her final two weeks, she copies proprietary client lists, investment models, and internal research reports to a personal USB drive, intending to use these materials at her new employer. Peterson believes this is acceptable because she personally developed many of the models. Which Standard did Peterson most likely violate?',
    option_a: 'Standard III(E) Preservation of Confidentiality',
    option_b: 'Standard IV(A) Loyalty to Employer',
    option_c: 'Both Standard III(E) and Standard IV(A)',
    correct_answer: 'C',
    explanation: 'Peterson violated both standards. Standard III(E) prohibits using confidential client information without consent, and Standard IV(A) prohibits taking employer property. Even though she developed the models, they belong to Horizon Capital. Client lists and proprietary research are confidential and cannot be taken when leaving employment.',
    difficulty: 2
  },
  {
    id: 'eth-017',
    topic_id: 'ethical-standards',
    question_text: 'Kevin Johnson, CFA, manages separate accounts for three siblings: Alice ($2 million), Barbara ($5 million), and Charles ($800,000). He identifies an attractive private placement opportunity with limited availability and allocates shares as follows: Alice 30%, Barbara 50%, Charles 20%. Six months later, the investment has appreciated 45%. Johnson\'s allocation method is most likely:',
    option_a: 'Appropriate under Standard III(B) Fair Dealing as it reflects pro-rata allocation by account size',
    option_b: 'A violation of Standard III(B) because all clients should receive equal allocations',
    option_c: 'Appropriate as long as the allocation methodology was disclosed to clients in advance',
    correct_answer: 'A',
    explanation: 'Standard III(B) Fair Dealing requires fair treatment but not necessarily equal treatment. Pro-rata allocation based on account size is a reasonable and objective method. Johnson allocated proportionally to account values (Alice: 25.6%, Barbara: 64.1%, Charles: 10.3% of total AUM), though his exact percentages differ slightly.',
    difficulty: 2
  },
  {
    id: 'eth-018',
    topic_id: 'ethical-standards',
    question_text: 'Elizabeth Turner, CFA, is asked by her supervisor to assign a "Buy" rating to MegaBank shares because the firm is competing to underwrite MegaBank\'s upcoming debt offering worth $500 million in fees. Turner\'s independent analysis supports a "Hold" rating. Turner publishes the "Buy" rating as instructed. Which of the following statements is least accurate?',
    option_a: 'Turner violated Standard I(B) Independence and Objectivity',
    option_b: 'Turner\'s supervisor violated Standard IV(C) Responsibilities of Supervisors',
    option_c: 'Turner satisfied her obligations under Standard IV(A) Loyalty by following her supervisor\'s instructions',
    correct_answer: 'C',
    explanation: 'Standard IV(A) Loyalty does not require compliance with instructions that violate the Standards. Turner should have refused to publish the misleading rating. Both Turner and her supervisor violated the Standards - Turner violated I(B) Independence and Objectivity, and the supervisor violated IV(C) by instructing subordinates to violate ethical standards.',
    difficulty: 2
  },
  {
    id: 'eth-019',
    topic_id: 'ethical-standards',
    question_text: 'Richard Patel, CFA, manages a mutual fund and regularly appears on financial television programs to discuss market trends. During an interview, he recommends TechStart Inc. shares without disclosing that his fund holds a $18 million position (representing 6% of the fund\'s assets) and that he personally owns 10,000 shares. The stock increases 8% following his appearance. Which Standard did Patel most likely violate?',
    option_a: 'Standard II(B) Market Manipulation',
    option_b: 'Standard VI(A) Disclosure of Conflicts',
    option_c: 'Standard VI(B) Priority of Transactions',
    correct_answer: 'B',
    explanation: 'Standard VI(A) requires disclosure of conflicts of interest that could impair independence or objectivity. Patel\'s substantial fund and personal holdings create a material conflict that must be disclosed when making public recommendations. While the recommendation may be legitimate, viewers need to know about his positions to evaluate potential bias.',
    difficulty: 2
  },
  {
    id: 'eth-020',
    topic_id: 'ethical-standards',
    question_text: 'Sophia Lindberg discovers that her employer\'s soft dollar arrangements direct client trades to brokers that provide research services to the firm, even though these brokers charge commissions 15-20 basis points higher than discount brokers. The research benefits all of the firm\'s portfolio managers. Which of the following is most accurate regarding this practice?',
    option_a: 'It violates Standard III(A) Loyalty, Prudence, and Care because higher commissions harm clients',
    option_b: 'It is acceptable under Standard III(A) if the research provides value that benefits clients',
    option_c: 'It violates Standard VI(A) Disclosure of Conflicts unless clients specifically approve the arrangement',
    correct_answer: 'B',
    explanation: 'Standard III(A) permits soft dollar arrangements if the research provides value that benefits clients and the commissions are reasonable. The slight premium in commissions can be justified if the research improves investment decisions. However, the firm should disclose the arrangements to clients and ensure they are not excessive.',
    difficulty: 3
  },
  {
    id: 'eth-021',
    topic_id: 'ethical-standards',
    question_text: 'Marcus Williams, CFA, serves as both a portfolio manager for institutional clients and as a trustee for his elderly mother\'s trust, valued at $1.2 million. When an attractive bond offering becomes available with limited allocation, Williams allocates 60% to his institutional clients and 40% to his mother\'s trust, which represents a larger proportion than the trust\'s share of total assets under management. Has Williams most likely violated the Standards?',
    option_a: 'No, because he has a fiduciary duty to his mother that takes precedence',
    option_b: 'Yes, he violated Standard VI(B) Priority of Transactions by favoring a personal account',
    option_c: 'No, because the institutional clients still received the majority of the allocation',
    correct_answer: 'B',
    explanation: 'Standard VI(B) requires that client transactions take priority over personal transactions. His mother\'s trust is considered a personal account for this purpose. Williams must not give preferential treatment to personal accounts, even those for family members. The allocation should have been proportional to assets under management, with institutional clients having priority.',
    difficulty: 3
  },
  {
    id: 'eth-022',
    topic_id: 'ethical-standards',
    question_text: 'Nicole Foster, CFA, is a sell-side analyst covering the retail sector. She receives a phone call from the CEO of ShopMart Inc., who shares preliminary quarterly sales figures showing a significant decline from analyst expectations. The CEO asks Foster to delay publishing her report until after the official earnings announcement in one week. Which action is most appropriate for Foster?',
    option_a: 'Delay her report as requested to maintain good relations with company management',
    option_b: 'Immediately publish a report based on the information received',
    option_c: 'Not use the information in any report and encourage the CEO to make a public disclosure',
    correct_answer: 'C',
    explanation: 'Standard II(A) Material Nonpublic Information prohibits trading or causing others to trade on inside information. Foster received material nonpublic information and should not use it. The most appropriate action is to encourage public dissemination and not use the information until it becomes public. Publishing immediately would violate the standard.',
    difficulty: 2
  },
  {
    id: 'eth-023',
    topic_id: 'ethical-standards',
    question_text: 'James Anderson, CFA, manages a growth equity fund with a stated benchmark of the Russell 3000 Growth Index. In his marketing presentations, he compares the fund\'s performance to the S&P 500 Index (not the Russell 3000 Growth), stating that the fund outperformed by 3.2% annually over five years. The fund underperformed the Russell 3000 Growth Index by 1.1% annually during the same period. Anderson\'s performance presentation most likely violates:',
    option_a: 'Standard III(D) Performance Presentation only',
    option_b: 'Standard I(C) Misrepresentation only',
    option_c: 'Both Standard III(D) and Standard I(C)',
    correct_answer: 'C',
    explanation: 'Anderson violated both standards. Standard III(D) requires fair and accurate performance presentation including appropriate benchmarks. Standard I(C) prohibits misrepresentation. By comparing to an inappropriate benchmark that makes performance appear better, Anderson misrepresented the fund\'s results and violated performance presentation standards.',
    difficulty: 2
  },
  {
    id: 'eth-024',
    topic_id: 'ethical-standards',
    question_text: 'Catherine Zhang, CFA, works for a small investment firm that lacks formal written compliance procedures for several areas covered by the Standards. Zhang identifies this deficiency and proposes developing comprehensive written procedures. Her supervisor rejects the proposal, stating that their current informal practices are sufficient. Zhang\'s most appropriate action is to:',
    option_a: 'Continue working at the firm since she attempted to address the deficiency',
    option_b: 'Document her concerns in writing and continue to advocate for written procedures',
    option_c: 'Resign immediately as the firm is not in compliance with the Standards',
    correct_answer: 'B',
    explanation: 'Standard IV(C) Responsibilities of Supervisors and Standard I(A) Knowledge of the Law require reasonable procedures but do not mandate immediate resignation. Zhang should document her concerns and continue to work toward implementing proper procedures. If the firm refuses to address serious compliance gaps that enable violations, she may need to consider dissociation.',
    difficulty: 3
  },
  {
    id: 'eth-025',
    topic_id: 'ethical-standards',
    question_text: 'Robert Chen, CFA, manages a portfolio for a tax-exempt foundation. He executes a trading strategy that generates substantial short-term capital gains, resulting in a 16.5% annual return but creating a tax liability of $850,000 for the foundation. Chen did not consider the tax implications before implementing the strategy. Has Chen most likely violated the Standards?',
    option_a: 'No, because the foundation is tax-exempt and should not owe taxes',
    option_b: 'Yes, he violated Standard III(A) Loyalty, Prudence, and Care by not considering the client\'s tax situation',
    option_c: 'No, because the 16.5% return demonstrates appropriate investment skill',
    correct_answer: 'B',
    explanation: 'Standard III(A) requires understanding and considering clients\' needs, including tax circumstances. Even if the foundation is tax-exempt for most purposes, Chen should have understood its complete tax situation before implementing a strategy with significant tax consequences. Performance alone does not excuse failure to consider client-specific constraints.',
    difficulty: 2
  },
  {
    id: 'eth-026',
    topic_id: 'ethical-standards',
    question_text: 'Victoria Nguyen, CFA, receives a research report from an independent firm that identifies significant accounting concerns at GlobalTech Corp. Nguyen reviews the report, conducts additional analysis that confirms the concerns, and publishes her own report recommending investors sell GlobalTech shares. She includes a footnote stating "This analysis incorporates research from independent sources." Has Nguyen most likely violated the Standards?',
    option_a: 'No, because she conducted her own independent analysis to verify the concerns',
    option_b: 'Yes, she violated Standard I(C) Misrepresentation by not specifically identifying the source',
    option_c: 'No, because the footnote provides adequate attribution to third-party sources',
    correct_answer: 'A',
    explanation: 'Standard I(C) requires proper attribution when using third-party research, but when members conduct their own independent analysis and reach their own conclusions, they are not required to cite every source that contributed to their thinking. Nguyen used the initial report as a starting point but performed her own due diligence, making the recommendation her own work.',
    difficulty: 3
  },
  {
    id: 'eth-027',
    topic_id: 'ethical-standards',
    question_text: 'Steven Park, CFA, is a fixed income analyst who discovers during a company visit that IndustryCorp plans to call its outstanding bonds at 102% of par value next month. This information has not been publicly announced. Park immediately returns to his office and recommends that his firm\'s bond traders sell their holdings of IndustryCorp bonds. Which of the following statements is most accurate?',
    option_a: 'Park violated Standard II(A) Material Nonpublic Information',
    option_b: 'Park acted appropriately by protecting his firm from losses',
    option_c: 'Park should have first determined whether the information was material before acting',
    correct_answer: 'A',
    explanation: 'Standard II(A) prohibits acting on material nonpublic information. The bond call information is clearly material as it would affect bond prices. Park received it in a private company meeting, making it nonpublic. He should not have recommended trading on this information regardless of intent to avoid losses.',
    difficulty: 1
  },
  {
    id: 'eth-028',
    topic_id: 'ethical-standards',
    question_text: 'Alexandra Petrova, CFA, is preparing a research report on EuroBank. She includes projected earnings per share of €4.25 for next year based on the consensus estimate from 12 sell-side analysts. She does not independently verify or analyze the earnings projection. The report clearly states "Earnings projections based on consensus analyst estimates." Has Petrova most likely violated the Standards?',
    option_a: 'No, because using consensus estimates is an acceptable practice when properly disclosed',
    option_b: 'Yes, she violated Standard V(A) Diligence and Reasonable Basis',
    option_c: 'No, because the projection is attributed to other analysts rather than claimed as her own',
    correct_answer: 'B',
    explanation: 'Standard V(A) requires members to have a reasonable and adequate basis for investment analysis. Simply using consensus estimates without independent analysis or verification does not satisfy this requirement. Even with disclosure, Petrova must conduct sufficient due diligence to ensure her recommendations have a reasonable basis.',
    difficulty: 2
  },
  {
    id: 'eth-029',
    topic_id: 'ethical-standards',
    question_text: 'David Morrison, CFA, receives an unexpected gift basket worth approximately $200 from BioPharm Inc., a company he covers as an analyst. Morrison has a firm policy that prohibits accepting gifts valued over $100. Morrison should most likely:',
    option_a: 'Return the gift basket to BioPharm Inc.',
    option_b: 'Accept the gift but disclose it in his next research report on BioPharm',
    option_c: 'Donate the gift basket to charity and inform BioPharm of the firm\'s policy',
    correct_answer: 'A',
    explanation: 'Standard I(B) Independence and Objectivity requires compliance with the strictest applicable rules. Morrison\'s firm policy is stricter than general guidance, so he must follow it. Returning the gift is most appropriate as it enforces the policy and avoids any appearance of compromise. Disclosure or donation does not address the policy violation.',
    difficulty: 2
  },
  {
    id: 'eth-030',
    topic_id: 'ethical-standards',
    question_text: 'Jennifer Walsh, CFA, supervises five junior analysts at her firm. She notices that one analyst, who recently joined from a competitor, has been producing research reports of exceptional quality with detailed company information. Walsh later discovers that the analyst brought proprietary research and client lists from his previous employer. Walsh should most likely:',
    option_a: 'Allow the analyst to continue if the research quality benefits clients',
    option_b: 'Instruct the analyst to return the materials and establish procedures to prevent future violations',
    option_c: 'Terminate the analyst immediately and report the violation to regulatory authorities',
    correct_answer: 'B',
    explanation: 'Standard IV(C) Responsibilities of Supervisors requires taking steps to prevent and detect violations. Walsh should stop the improper use of materials, ensure they are returned, and implement controls to prevent recurrence. Immediate termination may not be necessary if the analyst complies, but Walsh must address the violation and prevent continued misuse of confidential information.',
    difficulty: 2
  },
  {
    id: 'eth-031',
    topic_id: 'ethical-standards',
    question_text: 'Christopher Lee, CFA, manages a retirement account for his client Harold Burton. Burton instructs Lee to invest 100% of his $600,000 portfolio in a single technology stock because Burton believes the company will "make him rich." Lee believes this concentration violates basic diversification principles and is unsuitable for a retirement account. Lee should most appropriately:',
    option_a: 'Follow Burton\'s instructions since the client has the right to make investment decisions',
    option_b: 'Refuse to implement the strategy as it violates Lee\'s fiduciary duty',
    option_c: 'Discuss the risks with Burton, document the discussion, and seek a written acknowledgment if Burton insists',
    correct_answer: 'C',
    explanation: 'Standard III(A) Loyalty, Prudence, and Care requires acting in clients\' best interests while respecting their autonomy. Lee should thoroughly explain the risks and attempt to dissuade Burton. If Burton insists after being fully informed, Lee should document the discussion and obtain written acknowledgment. This balances fiduciary duty with client choice.',
    difficulty: 3
  },
  {
    id: 'eth-032',
    topic_id: 'ethical-standards',
    question_text: 'Rachel Kim, CFA, works for Pacific Advisors and is responsible for voting proxies for client accounts. She receives proxy materials for RetailMart Inc. regarding a merger proposal. Rather than analyzing the proposal herself, Kim routinely votes all proxies in accordance with recommendations from an independent proxy voting service. This practice is most likely:',
    option_a: 'A violation of Standard III(A) Loyalty, Prudence, and Care',
    option_b: 'Acceptable if the proxy voting service is reputable and independent',
    option_c: 'A violation unless Kim\'s clients have specifically authorized this delegation',
    correct_answer: 'B',
    explanation: 'Standard III(A) permits delegation of proxy voting to a qualified third party as long as the service is independent, reputable, and acting in clients\' best interests. Members are not required to personally analyze every proxy if they have established reasonable procedures using qualified services. However, Kim should monitor the service\'s performance and process.',
    difficulty: 2
  },
  {
    id: 'eth-033',
    topic_id: 'ethical-standards',
    question_text: 'Paul Anderson, CFA, publishes a newsletter that includes the following statement: "My proprietary stock selection model has correctly predicted the direction of S&P 500 movements in 18 of the last 20 quarters, achieving a 90% accuracy rate." In reality, Anderson\'s model made predictions for 35 quarters, but he only counted the most recent 20 quarters in his calculation. This statement most likely violates:',
    option_a: 'Standard I(C) Misrepresentation',
    option_b: 'Standard III(D) Performance Presentation',
    option_c: 'Both Standard I(C) and Standard III(D)',
    correct_answer: 'C',
    explanation: 'Anderson violated both standards. Standard I(C) prohibits misrepresentation, and his selective time period misrepresents the model\'s track record. Standard III(D) requires fair and complete performance presentation. Cherry-picking favorable periods while excluding unfavorable data creates a misleading presentation of the model\'s actual capabilities.',
    difficulty: 2
  },
  {
    id: 'eth-034',
    topic_id: 'ethical-standards',
    question_text: 'Melissa Turner, CFA, serves on the investment committee for her local charity foundation. At a committee meeting, she learns that the foundation will receive a $5 million donation next month that will be invested in equity securities. Before the donation is announced publicly, Turner purchases shares in several small-cap growth funds for her personal account, anticipating they will benefit from the foundation\'s future purchases. Has Turner most likely violated the Standards?',
    option_a: 'No, because the information concerns a client (the foundation) rather than a company',
    option_b: 'Yes, she violated Standard II(A) Material Nonpublic Information',
    option_c: 'No, because she did not trade securities that the foundation will purchase directly',
    correct_answer: 'B',
    explanation: 'Standard II(A) applies broadly to material nonpublic information. While the mosaic theory allows combining public information, Turner used specific nonpublic information about the foundation\'s future actions to benefit her personal account. This violates the standard even though it does not involve inside information about a publicly traded company.',
    difficulty: 3
  },
  {
    id: 'eth-035',
    topic_id: 'ethical-standards',
    question_text: 'Gregory Hansen, CFA, is a portfolio manager who executes a personal trade to purchase 1,000 shares of TechVenture Inc. at $42 per share. Later that day, he places client orders to purchase 50,000 shares of TechVenture, which causes the price to rise to $46. Hansen\'s actions most likely violate:',
    option_a: 'Standard VI(B) Priority of Transactions',
    option_b: 'Standard II(B) Market Manipulation',
    option_c: 'Standard III(A) Loyalty, Prudence, and Care',
    correct_answer: 'A',
    explanation: 'Standard VI(B) requires that client transactions take priority over personal transactions. Hansen violated this by trading ahead of anticipated client orders, allowing him to benefit from the price movement caused by the subsequent client trades. This is a clear case of front-running, which harms clients by allowing personal benefit from client order flow.',
    difficulty: 2
  },
  {
    id: 'eth-036',
    topic_id: 'ethical-standards',
    question_text: 'Diana Reyes, CFA, is asked to review a research report prepared by her junior analyst Martin Cole. The report recommends purchasing shares of GlobalMining Corp based primarily on a bullish commodities outlook. Reyes notices that Cole did not analyze GlobalMining\'s financial statements, competitive position, or management quality. Reyes approves and publishes the report under both their names. Which Standard has Reyes most likely violated?',
    option_a: 'Standard V(A) Diligence and Reasonable Basis',
    option_b: 'Standard IV(C) Responsibilities of Supervisors',
    option_c: 'Both Standard V(A) and Standard IV(C)',
    correct_answer: 'C',
    explanation: 'Reyes violated both standards. Standard V(A) requires a reasonable basis for recommendations, which Cole\'s incomplete analysis did not provide. Standard IV(C) requires supervisors to ensure that those they supervise comply with applicable standards. By approving inadequate research, Reyes failed in both her analytical and supervisory responsibilities.',
    difficulty: 2
  },
  {
    id: 'eth-037',
    topic_id: 'ethical-standards',
    question_text: 'Nathan Brooks, CFA, manages a value-oriented mutual fund with an average holding period of 3-4 years. His marketing brochure states: "Our patient, long-term approach avoids the high costs and tax inefficiency of frequent trading." In reality, the fund\'s turnover ratio last year was 185%, indicating an average holding period of approximately 6.5 months. Brooks\' brochure most likely violates:',
    option_a: 'Standard I(C) Misrepresentation',
    option_b: 'Standard III(D) Performance Presentation',
    option_c: 'Standard V(B) Communication with Clients',
    correct_answer: 'A',
    explanation: 'Standard I(C) prohibits misrepresentation of services, qualifications, or characteristics. Brooks misrepresented the fund\'s actual investment approach by claiming a long-term holding period that contradicts the high turnover rate. The statement creates a false impression of the fund\'s strategy and could mislead prospective investors.',
    difficulty: 2
  },
  {
    id: 'eth-038',
    topic_id: 'ethical-standards',
    question_text: 'Olivia Martinez, CFA, discovers that her firm has been allocating IPO shares to senior executives\' personal accounts while retail clients receive no allocations. The executives pay standard commissions. Martinez discusses this with compliance, which confirms the practice complies with applicable securities laws. This practice most likely:',
    option_a: 'Does not violate the Standards since it complies with securities laws',
    option_b: 'Violates Standard III(B) Fair Dealing',
    option_c: 'Violates Standard VI(A) Disclosure of Conflicts only',
    correct_answer: 'B',
    explanation: 'Standard III(B) requires fair dealing with all clients. Systematically allocating desirable IPO shares to executives while excluding retail clients violates this standard regardless of legal compliance. The Standards often impose stricter requirements than legal regulations. The practice creates unfair treatment that benefits firm insiders at the expense of regular clients.',
    difficulty: 2
  },
  {
    id: 'eth-039',
    topic_id: 'ethical-standards',
    question_text: 'Thomas Fitzgerald, CFA, is an analyst who covers EnergyTech Inc. He attends the company\'s annual meeting where management provides detailed guidance for the upcoming year, including specific revenue and margin targets. This information is provided to all attendees (approximately 200 shareholders and analysts) but has not been filed with regulators or issued in a press release. Fitzgerald writes a research report incorporating this guidance. Has he most likely violated the Standards?',
    option_a: 'Yes, he violated Standard II(A) Material Nonpublic Information',
    option_b: 'No, because the information was disclosed to multiple attendees at a public meeting',
    option_c: 'Yes, unless he waited 24 hours for the information to be disseminated',
    correct_answer: 'B',
    explanation: 'Standard II(A) relates to material nonpublic information. Information disclosed at a public meeting attended by numerous shareholders and analysts, even if not yet filed with regulators, is generally considered public. The company made the information available to a broad audience, which constitutes public disclosure under the mosaic theory.',
    difficulty: 3
  },
  {
    id: 'eth-040',
    topic_id: 'ethical-standards',
    question_text: 'Sarah Johnson, CFA, manages portfolios for high-net-worth clients. She develops a new investment strategy that she believes has significant potential. She implements the strategy first in her largest client accounts (those over $10 million), planning to extend it to smaller accounts after monitoring initial results for six months. This approach most likely:',
    option_a: 'Violates Standard III(B) Fair Dealing',
    option_b: 'Is acceptable as a reasonable method to manage implementation risk',
    option_c: 'Violates Standard III(C) Suitability',
    correct_answer: 'A',
    explanation: 'Standard III(B) requires fair dealing with all clients. Using larger accounts as test cases for a new strategy before offering it to smaller clients is unfair. If the strategy succeeds, smaller clients miss out on gains; if it fails, larger clients suffer losses. All suitable clients should have simultaneous access to new strategies.',
    difficulty: 3
  },
  {
    id: 'eth-041',
    topic_id: 'ethical-standards',
    question_text: 'William Chen, CFA, interviews for a position at Quantum Investments. During the interview, the hiring manager asks whether Chen\'s current employer, Sterling Capital, has plans to launch any new products. Chen has knowledge of Sterling\'s confidential plans to launch an emerging markets debt fund in three months. Chen should most appropriately:',
    option_a: 'Provide the information to help secure the position at Quantum',
    option_b: 'Decline to answer and explain that the information is confidential',
    option_c: 'Provide general information about market trends without revealing specific plans',
    correct_answer: 'B',
    explanation: 'Standard III(E) Preservation of Confidentiality prohibits disclosing confidential employer information. Chen must protect Sterling\'s proprietary business plans regardless of his job search. He should decline to answer questions that would require revealing confidential information and explain that doing so would violate his professional obligations.',
    difficulty: 2
  },
  {
    id: 'eth-042',
    topic_id: 'ethical-standards',
    question_text: 'Karen Whitfield, CFA, discovers that a colleague has been directing trades to a broker who charges excessive commissions in exchange for providing the colleague with expensive meals and entertainment. Whitfield reports this to her supervisor, who thanks her for the information but takes no action. Three months later, the practice continues. Whitfield should most appropriately:',
    option_a: 'Dissociate from the colleague by refusing to work on joint projects',
    option_b: 'Escalate the matter to higher management or the firm\'s legal department',
    option_c: 'Report the violation directly to regulatory authorities',
    correct_answer: 'B',
    explanation: 'Standard I(A) Knowledge of the Law requires attempting to stop violations through appropriate channels. After the initial report to her supervisor failed, Whitfield should escalate within the firm before going to external authorities. Dissociation alone is insufficient when ongoing violations harm clients. External reporting is appropriate only after exhausting internal remedies.',
    difficulty: 2
  },
  {
    id: 'eth-043',
    topic_id: 'ethical-standards',
    question_text: 'James Wilson, CFA, writes a research report stating: "Based on our analysis, PharmaTech Corp represents an attractive investment opportunity with 25% upside potential over the next 12 months." Wilson\'s detailed financial model actually projects 18% upside, but he rounded up to 25% because he believes the company has additional catalysts not captured in his model. This practice most likely violates:',
    option_a: 'Standard V(B) Communication with Clients',
    option_b: 'Standard I(C) Misrepresentation',
    option_c: 'Standard V(A) Diligence and Reasonable Basis',
    correct_answer: 'B',
    explanation: 'Standard I(C) prohibits misrepresentation of facts. Wilson misrepresented his actual analysis results by inflating the projected return. If he believes additional factors justify higher returns, he should either incorporate them into his model or explain them separately. Arbitrarily adjusting quantitative projections upward misrepresents his analysis.',
    difficulty: 2
  },
  {
    id: 'eth-044',
    topic_id: 'ethical-standards',
    question_text: 'Emily Rodriguez, CFA, manages a balanced fund with a 60% equity / 40% fixed income target allocation. Market movements cause the fund to drift to 67% equity / 33% fixed income. Rodriguez does not rebalance for eight months because the equity market has been performing well. This practice most likely violates:',
    option_a: 'Standard III(A) Loyalty, Prudence, and Care',
    option_b: 'Standard III(C) Suitability',
    option_c: 'Both Standard III(A) and Standard III(C)',
    correct_answer: 'C',
    explanation: 'Rodriguez violated both standards. Standard III(A) requires adhering to the investment mandate and acting in clients\' best interests. Standard III(C) requires maintaining suitability. By allowing significant drift from the stated allocation without client approval, Rodriguez changed the risk profile beyond what clients agreed to, even if her decision was motivated by good performance.',
    difficulty: 2
  },
  {
    id: 'eth-045',
    topic_id: 'ethical-standards',
    question_text: 'Daniel O\'Connor, CFA, is a research analyst who receives a surprise visit from two SEC investigators who request documents related to his research on MicroDevice Corp. O\'Connor\'s firm has a policy requiring employees to contact legal counsel before speaking with regulators. O\'Connor should most appropriately:',
    option_a: 'Cooperate immediately with the SEC as required by Standard I(A) Knowledge of the Law',
    option_b: 'Follow firm policy by contacting legal counsel before providing documents or information',
    option_c: 'Provide the documents but refuse to answer questions without counsel present',
    correct_answer: 'B',
    explanation: 'Standard I(A) requires compliance with laws and cooperation with regulatory investigations, but members have the right to legal representation. Following firm policy to involve legal counsel before responding is appropriate and does not constitute obstruction. Counsel can facilitate proper cooperation while protecting O\'Connor\'s rights and ensuring compliance.',
    difficulty: 2
  },
  {
    id: 'eth-046',
    topic_id: 'ethical-standards',
    question_text: 'Michelle Taylor, CFA, is a portfolio manager who receives an email from her firm\'s trading desk stating that a large block of RetailGroup shares became available at $28.50, below the current market price of $29.75. Taylor holds RetailGroup in several client accounts. She instructs the trading desk to purchase shares for the accounts of her three largest clients only. This action most likely violates:',
    option_a: 'Standard III(B) Fair Dealing',
    option_b: 'Standard VI(B) Priority of Transactions',
    option_c: 'Standard III(A) Loyalty, Prudence, and Care',
    correct_answer: 'A',
    explanation: 'Standard III(B) requires fair treatment of all clients when investment opportunities are limited. Taylor should have distributed the block purchase fairly among all client accounts holding RetailGroup, not just the largest accounts. Pro-rata allocation or a rotation system would be more appropriate than favoring large accounts.',
    difficulty: 2
  },
  {
    id: 'eth-047',
    topic_id: 'ethical-standards',
    question_text: 'Andrew Mitchell, CFA, works for a small advisory firm that experiences financial difficulties. To reduce costs, the firm eliminates its compliance department and assigns compliance responsibilities to portfolio managers in addition to their regular duties. Mitchell expresses concern about this arrangement but is told it is temporary. Mitchell continues working at the firm. Has he most likely violated the Standards?',
    option_a: 'No, because the arrangement is temporary and he expressed his concerns',
    option_b: 'Yes, unless he takes on reasonable compliance responsibilities for his own activities',
    option_c: 'No, because small firms are not required to have dedicated compliance staff',
    correct_answer: 'B',
    explanation: 'Standard IV(C) Responsibilities of Supervisors requires adequate compliance procedures but does not mandate a separate compliance department. While Mitchell cannot control firm-wide compliance, he must ensure reasonable procedures for his own activities. If he can implement adequate controls for his work, he may continue. If the firm creates an environment where compliance is impossible, he should dissociate.',
    difficulty: 3
  },
  {
    id: 'eth-048',
    topic_id: 'ethical-standards',
    question_text: 'Linda Zhao, CFA, is preparing marketing materials for her firm\'s international equity fund. She includes the statement: "Our portfolio managers have an average of 15 years of investment experience and all hold advanced degrees from top universities." Two of the four portfolio managers have 8 and 9 years of experience respectively, while the other two have 22 and 25 years of experience. This statement most likely:',
    option_a: 'Does not violate the Standards because the average is mathematically correct',
    option_b: 'Violates Standard I(C) Misrepresentation by creating a misleading impression',
    option_c: 'Violates Standard III(D) Performance Presentation',
    correct_answer: 'B',
    explanation: 'Standard I(C) prohibits misrepresentation even when statements are technically accurate. While the average is correct mathematically, it creates a misleading impression that all managers are experienced when two are relatively junior. A more accurate disclosure would provide the range of experience or note that experience levels vary among the team.',
    difficulty: 2
  },
  {
    id: 'eth-049',
    topic_id: 'ethical-standards',
    question_text: 'Robert Taylor, CFA, is a buy-side analyst who develops a proprietary valuation model for technology companies. He leaves his employer to join a competitor. Taylor recreates the model at his new employer from memory without referring to any documents from his previous firm. The model uses the same methodology and formulas he developed previously. Taylor\'s actions are most likely:',
    option_a: 'A violation of Standard IV(A) Loyalty because the model belongs to his former employer',
    option_b: 'Acceptable because he did not take any physical or electronic materials from his former employer',
    option_c: 'A violation of Standard III(E) Preservation of Confidentiality',
    correct_answer: 'A',
    explanation: 'Standard IV(A) prohibits using employer property for personal benefit. Even though Taylor recreated the model from memory, the intellectual property belongs to his former employer. The methodology and formulas he developed while employed are the employer\'s property. Taylor should have negotiated rights to use the model or developed a sufficiently different approach at his new firm.',
    difficulty: 3
  },
  {
    id: 'eth-050',
    topic_id: 'ethical-standards',
    question_text: 'Jessica Palmer, CFA, serves as chief investment officer for a pension fund. She is offered a consulting position with an investment firm that occasionally does business with the pension fund. The consulting role would pay $50,000 annually and require approximately 10 hours per month. Palmer should most appropriately:',
    option_a: 'Decline the offer as it represents an inappropriate conflict of interest',
    option_b: 'Accept the offer and disclose it to the pension fund board',
    option_c: 'Obtain written consent from the pension fund board before accepting',
    correct_answer: 'C',
    explanation: 'Standard VI(A) Disclosure of Conflicts and Standard IV(A) Loyalty require both disclosure and consent for outside activities that could create conflicts. Since the consulting firm does business with the pension fund, Palmer must obtain written permission before accepting. Disclosure alone is insufficient; she needs explicit consent from her employer to avoid conflicts of interest.',
    difficulty: 2
  }
];
