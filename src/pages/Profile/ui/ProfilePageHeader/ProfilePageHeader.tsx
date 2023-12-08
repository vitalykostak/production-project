import { memo, type FC, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import profilePageHeaderStyles from './ProfilePageHeader.module.scss'
import { Button, ButtonTheme, Text } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileReadonly } from 'entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { profileActions, updateProfileData } from 'entities/Profile'

interface ProfilePageHeaderProps {
  className?: string
}

const ProfilePageHeader: FC<ProfilePageHeaderProps> = memo((props) => {
  const { className } = props

  const { t } = useTranslation(['translation', 'profile'])
  const dispatch = useAppDispatch()

  const profileReadonly = useSelector(getProfileReadonly)

  const mods = {}

  const additionsClasses = [className]

  const onEdit = useCallback(
    () => dispatch(profileActions.setReadonly(false)),
    [dispatch]
  )

  const onCancelEdit = useCallback(
    () => dispatch(profileActions.cancelUpdate()),
    [dispatch]
  )

  const onSave = useCallback(
    async () => dispatch(updateProfileData()),
    [dispatch]
  )

  return (
    <div
      className={classNames(
        profilePageHeaderStyles.ProfilePageHeader,
        mods,
        additionsClasses
      )}
    >
      <Text title={t('profile:profile')}></Text>
      {profileReadonly
        ? (
        <Button
          theme={ButtonTheme.OUTLINE}
          className={profilePageHeaderStyles.editBtn}
          onClick={onEdit}
        >
          {t('translation:edit')}
        </Button>
          )
        : (
        <>
          <Button
            theme={ButtonTheme.OUTLINE_RED}
            className={profilePageHeaderStyles.editBtn}
            onClick={onCancelEdit}
          >
            {t('translation:cancel')}
          </Button>
          <Button
            theme={ButtonTheme.OUTLINE}
            className={profilePageHeaderStyles.saveBtn}
            onClick={onSave}
          >
            {t('translation:save')}
          </Button>
        </>
          )}
    </div>
  )
})

export default ProfilePageHeader