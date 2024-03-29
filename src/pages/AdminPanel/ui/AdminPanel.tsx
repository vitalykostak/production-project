import { useTranslation } from 'react-i18next'

import { Page } from '@/widgets/Page'

const AdminPanel = () => {
  const { t } = useTranslation('admin_panel')

  return <Page data-testid='AdminPanelPage'>{t('admin_panel')}</Page>
}

export default AdminPanel
