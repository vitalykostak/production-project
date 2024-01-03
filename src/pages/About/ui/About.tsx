import { useTranslation } from 'react-i18next'

import { Page } from '@/widgets/Page'

const About = () => {
  const { t } = useTranslation('about')

  return <Page data-testid='AboutPage'>{t('about_page')}</Page>
}

export default About
