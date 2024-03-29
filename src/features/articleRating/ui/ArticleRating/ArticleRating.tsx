import { memo, type FC, useCallback } from 'react'
import { useSelector } from 'react-redux'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Rating } from '@/entities/Rating'
import { getUserAuthData } from '@/entities/User'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated'
import { ToggleFeature } from '@/shared/lib/featureFlags'
import { Skeleton } from '@/shared/ui/redesigned'

import {
    useGetArticleRatingQuery,
    useRateArticleMutation,
} from '../../api/articleRatingApi/articleRatingApi'

export interface ArticleRatingProps {
    className?: string
    articleId: string
}

const ArticleRating: FC<ArticleRatingProps> = memo(props => {
    const { className, articleId } = props

    const authData = useSelector(getUserAuthData)
    const userId = authData?.id ?? ''

    const { data, isLoading, refetch } = useGetArticleRatingQuery({ articleId, userId })

    const rating = data?.[0]

    const [rateArticleMutation] = useRateArticleMutation()

    const rateArticleMutationHandler = useCallback(
        (starNumber: number, feedback?: string) => {
            try {
                void rateArticleMutation({
                    articleId,
                    userId,
                    rate: starNumber,
                    feedback,
                })
            } catch (error) {
                void refetch()
            }
        },
        [rateArticleMutation, articleId, userId, refetch],
    )

    const acceptHandler = useCallback(
        (starNumber: number, feedback?: string) => rateArticleMutationHandler(starNumber, feedback),
        [rateArticleMutationHandler],
    )

    const cancelHandler = useCallback(
        (starNumber: number) => rateArticleMutationHandler(starNumber),
        [rateArticleMutationHandler],
    )

    if (isLoading) {
        return (
            <ToggleFeature
                featureFlag="isAppRedesigned"
                onDisabled={<SkeletonDeprecated width="100%" height="124px" />}
                onEnabled={<Skeleton width="100%" height="124px" />}
            />
        )
    }

    const mods = {}

    const additionsClasses = [className]

    return (
        <Rating
            onAccept={acceptHandler}
            onCancel={cancelHandler}
            title={'Rate article'}
            hasFeedback
            feedbackTitle={'Share you thoughts about article'}
            className={classNames('', mods, additionsClasses)}
            rate={rating?.rate || 0}
        />
    )
})

export default ArticleRating
