import { useTranslation } from 'react-i18next'

import { Page } from '@/widgets/Page'

const Forbidden = () => {
  const { t } = useTranslation('forbidden')

  return <Page>{t('forbidden')}</Page>
}

export default Forbidden
