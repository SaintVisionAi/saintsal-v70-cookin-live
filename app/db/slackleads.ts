export const slackleads = [
  {
    id: 'lead-001',
    source: 'Slack #partner-deals',
    contact: 'angel@founderfunds.com',
    message: 'Love what SaintSal is doing — can we white-label this for portfolio founders?',
    tags: ['partner', 'white-label', 'vc'],
    status: 'hot',
    capturedAt: new Date().toISOString(),
    assignedTo: 'JR',
    followUpDate: new Date(Date.now() + 3 * 86400000).toISOString(), // 3 days later
  },
  {
    id: 'lead-002',
    source: 'Slack #alliance-requests',
    contact: 'grace@churchbuilders.org',
    message: 'We want to use your AI platform to train pastors on finance & law. Possible?',
    tags: ['faith', 'institute', 'nonprofit'],
    status: 'warm',
    capturedAt: new Date().toISOString(),
    assignedTo: 'Lalie',
    followUpDate: new Date(Date.now() + 5 * 86400000).toISOString(), // 5 days later
  },
  {
    id: 'lead-003',
    source: 'Slack #ai-dealflow',
    contact: 'chiefai@enterprisebank.com',
    message: 'Can we plug into your underwriting API for DSCR loans?',
    tags: ['lending', 'API', 'enterprise'],
    status: 'hot',
    capturedAt: new Date().toISOString(),
    assignedTo: 'SalBoss',
    followUpDate: new Date(Date.now() + 2 * 86400000).toISOString(), // 2 days later
  },
]
