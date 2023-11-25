import { type FC } from 'react'
import loaderStyle from './PageLoader.module.scss'
import EllipsisLoader from 'shared/ui/EllipsisLoader/EllipsisLoader'
import { classNames } from 'shared/lib/classNames/classNames'

interface PageLoaderProps {
  className?: string
}

const PageLoader: FC<PageLoaderProps> = (props) => {
  const { className } = props

  return (
    <div className={classNames(loaderStyle.PageLoader, {}, [className])}>
      <EllipsisLoader />
    </div>
  )
}

export default PageLoader