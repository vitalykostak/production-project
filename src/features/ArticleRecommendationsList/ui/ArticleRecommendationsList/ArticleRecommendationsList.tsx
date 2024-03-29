import { memo, type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/classNames/classNames'
import { ArticleList } from '@/entities/Articles'
import { Text, TextSize } from '@/shared/ui/deprecated'
import { VStack } from '@/shared/ui/redesigned'

import { useGetArticleRecommendationListQuery } from '../../api/articleRecommendationsApi/articleRecommendationsApi'

import styles from './ArticleRecommendationsList.module.scss'

interface ArticleRecommendationsListProps {
    className?: string
}

const ArticleRecommendationsList: FC<ArticleRecommendationsListProps> = memo(props => {
    const { className } = props

    const { t } = useTranslation(['translation'])

    const { isLoading, data: articles, error } = useGetArticleRecommendationListQuery(3)

    if (isLoading || error || !articles) {
        return null
    }

    const mods = {}

    const additionsClasses = [className]

    return (
        <VStack
            gap="8"
            className={classNames('', mods, additionsClasses)}
            data-testid="ArticleRecommendationsList"
        >
            <Text size={TextSize.L} title={t('translation:recommend')} />
            <ArticleList
                articles={articles}
                target="_blank"
                className={styles.recommendationsList}
            />
        </VStack>
    )
})

export default ArticleRecommendationsList
