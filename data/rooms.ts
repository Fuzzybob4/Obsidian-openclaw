export type Room = {
  slug: string;
  name: string;
  shortName: string;
  image: string;
  level: number;
  status: string;
  purpose: string;
  summary: string;
  owner: string;
  metrics: string[];
  systems: string[];
  notes: string[];
};

export const rooms: Room[] = [
  {
    slug: 'foundry',
    name: 'The Foundry',
    shortName: 'Foundry',
    image: '/rooms/foundry.png',
    level: 4,
    status: 'Active',
    purpose: 'Build. Craft. Create.',
    summary: 'The build engine for products, automation, blueprints, and launch systems.',
    owner: 'Otis',
    metrics: ['Build Speed', 'Crafting Queue', 'Success Rate', 'Blueprint Value'],
    systems: ['Master Forge', 'Blueprint Hall', 'Testing Chamber', 'Assembly Line', 'Material Refinery'],
    notes: ['Anything that becomes real starts here.', 'Best for RedFox features, workflows, and launch systems.']
  },
  {
    slug: 'market-district',
    name: 'Market District',
    shortName: 'Market',
    image: '/rooms/market-district.png',
    level: 3,
    status: 'Prospering',
    purpose: 'Trade. Invest. Profit.',
    summary: 'The commercial district for offers, deal flow, distribution, and growth channels.',
    owner: 'Scarlett',
    metrics: ['Deal Pipeline', 'Market Sentiment', 'District Revenue', 'Merchant Capacity'],
    systems: ['Trading Hall', 'Live Market Feed', 'Auction House', 'Investors Tower', 'Contract Board'],
    notes: ['This is where value gets monetized.', 'Best for distributor paths, sellers, and channel growth.']
  },
  {
    slug: 'finance-tower',
    name: 'Finance Tower',
    shortName: 'Finance',
    image: '/rooms/finance-tower.png',
    level: 4,
    status: 'Strong',
    purpose: 'Wealth Drives Power.',
    summary: 'The truth center for margin, runway, cash flow, deal value, and business health.',
    owner: 'Pax',
    metrics: ['Cash Position', 'Runway', 'Margin', 'Deal Pipeline'],
    systems: ['Revenue Intelligence', 'Forecast Chamber', 'Capital Allocation', 'Deal War Room', 'Investment Portfolio'],
    notes: ['This room prevents fantasy planning.', 'Every empire-level decision should reconcile with this tower.']
  },
  {
    slug: 'operations-deck',
    name: 'Operations Deck',
    shortName: 'Operations',
    image: '/rooms/operations-deck.png',
    level: 4,
    status: 'Optimal',
    purpose: 'Execute. Automate. Accelerate.',
    summary: 'The execution layer where workflows, tasks, agents, and integrations stay in motion.',
    owner: 'Otto',
    metrics: ['Jobs Run Today', 'Success Rate', 'System Load', 'Time Saved'],
    systems: ['Workflow Engine', 'Automation Suite', 'Task Orchestrator', 'Schedule Center', 'Integration Hub'],
    notes: ['This is the engine room.', 'Every recurring process should eventually be routed here.']
  },
  {
    slug: 'innovation-hub',
    name: 'Innovation Hub',
    shortName: 'Innovation',
    image: '/rooms/innovation-hub.png',
    level: 3,
    status: 'Inspired',
    purpose: 'Shape Tomorrow. Disrupt Today.',
    summary: 'The future factory for ideas, experiments, prototypes, and strategic breakthroughs.',
    owner: 'Sierra',
    metrics: ['Innovation Spark', 'Experiments', 'Breakthroughs', 'Resource Allocation'],
    systems: ['Future Scanner', 'Experiment Lab', 'Prototype Bay', 'IP Vault', 'Future Scenarios'],
    notes: ['Ideas enter here before they earn a slot in the Foundry.', 'This room should score ideas before work begins.']
  },
  {
    slug: 'openclaw-core',
    name: 'OpenClaw Core',
    shortName: 'Core',
    image: '/rooms/openclaw-core.png',
    level: 5,
    status: 'Online',
    purpose: 'The Brain. The System. The Advantage.',
    summary: 'Kal’s central intelligence engine for memory, routing, logic, security, and orchestration.',
    owner: 'Kal',
    metrics: ['Tasks Today', 'Automations', 'Success Rate', 'Memory Used'],
    systems: ['Core Heart', 'Memory Archive', 'Automation Matrix', 'Routing Engine', 'Integration Layer'],
    notes: ['Every room ultimately reports here.', 'This should become the master orchestration screen.']
  },
  {
    slug: 'command-bridge',
    name: 'Command Bridge',
    shortName: 'Bridge',
    image: '/rooms/command-bridge.png',
    level: 5,
    status: 'Online',
    purpose: 'Strategic Control Center.',
    summary: 'The CEO cockpit where empire-level priorities, alerts, and decisions are managed.',
    owner: 'Christian + Kal',
    metrics: ['Empire Score', 'Total Revenue', 'System Health', 'Tasks Completed'],
    systems: ['Empire Map', 'Decision Queue', 'Strategic Timeline', 'Intelligence Brief', 'Command Modules'],
    notes: ['If you only had one screen, this is it.', 'This should become the daily briefing room.']
  },
  {
    slug: 'texting-mission-control',
    name: 'Texting Mission Control HQ',
    shortName: 'Texting HQ',
    image: '/rooms/texting-mission-control.png',
    level: 4,
    status: 'Operational',
    purpose: 'Orchestrating Every Conversation.',
    summary: 'The conversion engine for lead follow-up, campaigns, templates, and active conversations.',
    owner: 'Scout',
    metrics: ['Messages Sent', 'Replies Received', 'Conversions', 'Revenue Generated'],
    systems: ['Live Conversation Feed', 'Campaign Performance', 'AI Agent Activity', 'Automation Workflows', 'Message Templates'],
    notes: ['This room turns attention into booked revenue.', 'Ideal for Lone Star and RedFox outreach flows.']
  },
  {
    slug: 'archives',
    name: 'The Archives',
    shortName: 'Archives',
    image: '/rooms/archives.png',
    level: 5,
    status: 'Online',
    purpose: 'Knowledge. Preserved. Power Amplified.',
    summary: 'The compounding memory vault for SOPs, decision logs, playbooks, and searchable knowledge.',
    owner: 'Sierra',
    metrics: ['Documents', 'Systems Indexed', 'Insights Extracted', 'Value Created'],
    systems: ['SOP Library', 'Playbooks', 'Decision Logs', 'Insights Vault', 'Smart Search'],
    notes: ['This room makes learning permanent.', 'Every major workflow should feed the Archives.']
  },
  {
    slug: 'research-lab',
    name: 'Research Lab',
    shortName: 'Research',
    image: '/rooms/research-lab.png',
    level: 4,
    status: 'Active',
    purpose: 'Discover. Analyze. Innovate.',
    summary: 'The validation engine for assumptions, market intelligence, hypotheses, and forecasts.',
    owner: 'Sierra + Pax',
    metrics: ['Research Points', 'Active Projects', 'Breakthroughs', 'Insights Generated'],
    systems: ['Market Intelligence', 'Competitive Intelligence', 'Data Analytics Hub', 'Experimentation Chamber', 'Forecast Engine'],
    notes: ['This room proves what is true before you build.', 'Use it to validate pricing, positioning, and expansion.']
  },
  {
    slug: 'agent-quarters',
    name: 'Agent Quarters',
    shortName: 'Agents',
    image: '/rooms/agent-quarters.png',
    level: 4,
    status: 'Online',
    purpose: 'Manage. Upgrade. Empower.',
    summary: 'The talent and AI deployment layer for skill growth, mission routing, and crew readiness.',
    owner: 'Kal',
    metrics: ['Agents Active', 'Tasks Completed', 'Avg Efficiency', 'Agent Satisfaction'],
    systems: ['Agent Pods', 'Training Center', 'Active Missions', 'Skill Matrix', 'Agent Wellness'],
    notes: ['This turns agents into force multipliers.', 'Pair it with the Operations Deck for smart assignments.']
  }
];

export const roomMapImage = '/rooms/main-map.png';

export function getRoomBySlug(slug: string) {
  return rooms.find((room) => room.slug === slug);
}
