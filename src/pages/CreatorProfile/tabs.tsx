import './index.css'
import { SetStateAction, useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import classnames from 'classnames'
import Dashboard from 'pages/Dashboard'
import { Table } from './table'
import { TYPE } from 'theme'
import { CTA1 } from 'pages/ICTO'

export const Tabs = (props: { creatorIdFromUrl: string; isCreator: boolean; isVaultGenerated: boolean }) => {
  const [activeTab, setActiveTab] = useState('1')
  const toggle = (tab: SetStateAction<string>) => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  const style = {
    paddingLeft: '50px',
    paddingRight: '50px',
    color: 'blue',
  }

  return (
    <>
      <Nav tabs style={{ width: '100%', justifyContent: 'center', cursor: 'pointer' }}>
        {props.isCreator && props.isVaultGenerated && (
          <NavItem style={{ color: 'blue' }}>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => {
                toggle('1')
              }}
              style={style}
            >
              <TYPE.label>Vault NFTs</TYPE.label>
            </NavLink>
          </NavItem>
        )}

        {props.isCreator && props.isVaultGenerated && (
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => {
                toggle('2')
              }}
              style={style}
            >
              Redeemed NFTs
            </NavLink>
          </NavItem>
        )}

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => {
              toggle('3')
            }}
            style={style}
          >
            Owned NFTs
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => {
              toggle('4')
            }}
            style={style}
          >
            Owned Tokens
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">{Dashboard()}</TabPane>
        <TabPane tabId="2">{Dashboard()}</TabPane>
        <TabPane tabId="3">{Dashboard()}</TabPane>
        <TabPane tabId="4">
          <>
            <div style={{ marginTop: '20px' }}></div>
            <CTA1
              to={'/creator/' + props.creatorIdFromUrl}
              style={{
                background: 'whitesmoke',
              }}
            >
              <Table
                products={[
                  { Name: 'creator', Symbol: 'CT1', Price: '100 WTH' },
                  { Name: 'creator', Symbol: 'CT1', Price: '100 WTH' },
                  { Name: 'creator', Symbol: 'CT1', Price: '100 WTH' },
                  { Name: 'creator', Symbol: 'CT1', Price: '100 WTH' },
                  { Name: 'creator', Symbol: 'CT1', Price: '100 WTH' },
                  { Name: 'creator', Symbol: 'CT1', Price: '100 WTH' },
                ]}
                caption={''}
                nftURL={props.creatorIdFromUrl}
              />
            </CTA1>
          </>
        </TabPane>
      </TabContent>
    </>
  )
}
