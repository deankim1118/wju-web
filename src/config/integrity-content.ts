export type IntegrityItem = {
    heading: string;
    body: string;
  };
  
  export const INTEGRITY_CONTENT = {
    title: 'Institutional Integrity',
    subtitle: `The Code of Ethics and Conduct of Washington Jabez University requires directors, faculties, officers and employees to observe high standards of business and personal ethics in the conduct of their duties and responsibilities. The school operates with integrity and is represented accurately and honestly to students, the public.

As employees and representatives of the University, we must practice honesty and integrity in fulfilling our responsibilities and comply with all applicable laws and regulations. This is not only proper business practice; it is, more importantly, an expression of our Christian stewardship and faith. The University has adopted this policy to address the submission of complaints, suspected violations or any concerns in relation to:

• Financial transactions, including questionable accounting practices and internal accounting controls
• Use of the University's property
• Compliance with legal and regulatory requirements`,
    items: [
      {
        heading: 'Reporting Responsibility',
        body: `It is the responsibility of all directors, faculties, officers and employees to comply with the Code and to report violations or suspected violations in accordance with this Policy.`,
      },
      {
        heading: 'No Retaliation',
        body: `No director, faculties, officer or employee who in good faith reports a violation of the Code shall suffer harassment, retaliation or adverse employment consequence. An employee who retaliates against someone who has reported a violation in good faith is subject to discipline up to and including termination of employment. This Policy is intended to encourage and enable employees and others to raise serious concerns within the University prior to seeking resolution outside the University.`,
      },
      {
        heading: 'Reporting Violations',
        body: `The Code underscores the University's policy and encourages employees to share their property. In most cases, employees' supervisor is the best person to address an area of concern. However, if you are not comfortable speaking with your supervisor or you are not satisfied with your supervisor's response, you are encouraged to speak with someone in the Office of Administration or anyone in management whom you are comfortable in approaching. Supervisors and managers are required to report suspected violations of the Code of Conduct to the University's Compliance Officer, who has specific and express responsibility to investigate all reported violations. For suspected fraud, or when you are not satisfied or uncomfortable with following the University's policy, individuals should contact the University's Compliance Officer directly.

For investigating and resolving all reported complaints and allegations concerning violations of the Code and, at his/her discretion, shall advise the School Dean and/or the finance committee of the Board of Trustees. The Compliance Officer has direct access to the finance committee of the Board of Trustees and is required to report to the finance committee at least annually on violations which have been brought to his/her attention.`,
      },
      {
        heading: 'Accounting and Auditing Matters',
        body: `The Chief Financial Officer and/or the School Dean (or in rare cases, the finance committee of the Board of Trustees) shall address all reported concerns or complaints regarding corporate accounting practices, internal controls or auditing. The Compliance Officer shall immediately notify the Chief Financial Officer and/or the School Dean, or if necessary, the Chairman of the Board of Trustees or if needed the finance committee of any such complaint and work with the proper individuals until the matter is resolved.`,
      },
      {
        heading: 'Acting in Good Faith',
        body: `Anyone filing a complaint concerning a violation or suspected violation of the Code must be acting in good faith and have reasonable grounds for believing the information disclosed indicates a violation of the Code. Any allegations that prove not to be substantiated and which prove to have been made maliciously or knowingly to be false will be viewed as a serious disciplinary offense.`,
      },
      {
        heading: 'Confidentiality',
        body: `Violations or suspected violations may be submitted on a confidential basis by the complainant or may be submitted anonymously. Reports of violations or suspected violations will be kept confidential to the extent possible, consistent with the need to conduct an adequate investigation.`,
      },
      {
        heading: 'Handling of Reported Violations',
        body: `The Compliance Officer will notify the sender and acknowledge receipt of the reported violation or suspected violation within five business days. All reports will be promptly investigated and appropriate corrective action will be taken if warranted by the investigation.`,
      },
    ] satisfies IntegrityItem[],
  } as const;
  
 
 
