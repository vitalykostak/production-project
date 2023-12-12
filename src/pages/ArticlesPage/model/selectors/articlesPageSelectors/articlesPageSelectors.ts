import { type StateSchema } from 'app/providers/StoreProvider'
import { ArticleListView } from 'entities/Articles'

export const getArticlesPageLoading = (state: StateSchema) => state.articlesPage?.isLoading

export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error

export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || ArticleListView.SMALL
