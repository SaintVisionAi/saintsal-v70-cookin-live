'use client';

import ReferralEngine from '@/components/ReferralEngine';
import GPTScheduleForm from '@/components/GPTScheduleForm';
import ContactTable from '@/components/ContactTable';
import CRMTimeline from '@/components/CRMTimeline';
import CRMPanel from '@/components/StreamlitBridge';
import CRMStream from '@/components/CRMStream';
import AgentMemory from '@/components/AgentMemory';
import InsightChartButton from '@/components/InsightChartButton';
import { useSession } from 'next-auth/react';

export default function CRMCommandCenter() {
  const { data: session } = useSession();
  const userId = session?.user?.id || 'demo-user';

  return (
    <main className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-6">📡 PartnerTech CRM Command</h1>

      <ReferralEngine />
      <GPTScheduleForm />
      <ContactTable />
      <CRMTimeline />

      <div className="mt-12">
        <CRMPanel />
      </div>

      <div className="mt-12">
        <CRMStream />
      </div>

      <div className="mt-12">
        <AgentMemory userId={userId} />
      </div>

      <div className="mt-12">
        <InsightChartButton
          insights={[
            { label: 'Jenny Smith', score: 9.3 },
            { label: 'David R.', score: 8.6 },
          ]}
        />
      </div>

      <div className="mt-12 p-6 bg-yellow-100 border border-yellow-400 rounded">
        ⚠️ <strong>MemoryAwareAssistant temporarily disabled</strong> – backend model in progress.
      </div>
    </main>
  );
}
