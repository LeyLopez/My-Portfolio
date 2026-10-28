import type { ReactNode } from 'react';

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (id: string) => void;
  children?: ReactNode;
}

export function Tabs({ tabs, activeTab, onChange, children }: TabsProps) {
  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-border" role="tablist" aria-label="Content sections">
        {tabs.map((tab) => (
          <button
            aria-selected={activeTab === tab.id}
            className={`min-h-11 border-b-2 px-4 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${activeTab === tab.id ? 'border-accent text-accent' : 'border-transparent text-muted hover:text-foreground'}`}
            key={tab.id}
            onClick={() => onChange(tab.id)}
            role="tab"
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      {children}
    </div>
  );
}
