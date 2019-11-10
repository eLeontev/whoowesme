import React from 'react';
import { SendInvitationForm } from 'Components/form';
import DashboardPageLayout from 'Layout/DashboardPageLayout';
import { Breadcrumb, Layout } from 'antd';
const { Content } = Layout;

export const menu = {
  to: '/send-invitation',
  label: 'Send Invitation',
};

type Props = {};

const SendInvitation: React.FunctionComponent<Props> = () => {
  return (
    <DashboardPageLayout>
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>Send Invitation</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <SendInvitationForm />
        </div>
      </Content>
    </DashboardPageLayout>
  );
};

export default SendInvitation;
