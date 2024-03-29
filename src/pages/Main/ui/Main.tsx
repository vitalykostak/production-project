import { useTranslation } from 'react-i18next'

import { Page } from '@/widgets/Page'

const Main = () => {
  const { t } = useTranslation('main')

  return <Page data-testid='MainPage'>{t('main_page')}</Page>
}

export default Main
