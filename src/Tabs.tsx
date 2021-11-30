import React, {
  FC,
  HTMLAttributes,
  ReactChild,
  useMemo,
  useState,
} from 'react';

export interface TabProps {
  id: string;
  children: ReactChild;
  label: string;
}

export const Tab: FC<TabProps> = ({ id, children }) => {
  return <div id={id}>{children}</div>;
};

export interface TabButtonProps {
  id: string;
  label: ReactChild;
  isSelected: boolean;
  onClick: (id: string) => void;
}

export const TabButton: FC<TabButtonProps> = ({
  id,
  label,
  isSelected,
  onClick,
}) => {
  return (
    <li
      id={`tab-button-${id}`}
      aria-controls={`tab-${id}`}
      aria-selected={isSelected}
    >
      <a
        className="nav-tab"
        href={`#${id}`}
        onClick={(e) => {
          e.preventDefault();
          onClick(id);
        }}
      >
        {label}
      </a>
    </li>
  );
};

export interface TabContentProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  children: ReactChild;
  isSelected: boolean;
}

export const TabContent: FC<TabContentProps> = ({
  id,
  children,
  isSelected,
}) => {
  return (
    <div
      id={`tab-${id}`}
      className="tabs-content"
      role="tabpanel"
      aria-labelledby={`tab-button-${id}`}
      aria-hidden={!isSelected}
      style={
        isSelected
          ? {
              display: 'block',
              visibility: 'visible',
            }
          : {
              display: 'none',
              visibility: 'hidden',
            }
      }
    >
      {children}
    </div>
  );
};

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
  tabs: TabProps[];
  initialTab?: string;
}

export const Tabs: FC<TabsProps> = (props) => {
  const tabs = useMemo(() => {
    return props.tabs.length ? props.tabs : [];
  }, [props.tabs]);
  const [selectedTab, setSelectedTab] = useState<string | null>(() => {
    if (props.initialTab) {
      return props.initialTab;
    }
    if (!tabs.length) {
      return null;
    }
    return tabs[0].id;
  });

  const isSelectedTab = (tab: TabProps) => selectedTab === tab.id;

  return (
    <div id={props.id}>
      <h2 className="nav-tab-wrapper">
        <ul role="tablist">
          {tabs.map((tab: TabProps) => (
            <TabButton
              key={tab.id}
              isSelected={isSelectedTab(tab)}
              id={tab.id}
              label={tab.label}
              onClick={setSelectedTab}
            />
          ))}
        </ul>
      </h2>

      <>
        {tabs.map((tab: TabProps) => (
          <TabContent key={tab.id} isSelected={isSelectedTab(tab)} id={tab.id}>
            {tab.children}
          </TabContent>
        ))}
      </>
    </div>
  );
};
