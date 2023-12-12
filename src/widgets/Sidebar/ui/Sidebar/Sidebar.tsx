import { type FC, useState, memo } from 'react'
import sidebarStyles from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import {
  ThemeSwitcher,
  LanguageSwitcher,
  Button,
  ButtonTheme
} from 'shared/ui'
import { ButtonSize } from 'shared/ui/Button/Button'
import SidebarItem from '../SidebarItem/SidebarItem'
import { useSelector } from 'react-redux'
import { getSidebarItems } from '../../model/selectors/getSidebarItems/getSidebarItems'

interface SidebarProps {
  className?: string
}

const Sidebar: FC<SidebarProps> = memo(({ className }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const SidebarItems = useSelector(getSidebarItems)

  const toggleSidebar = () => setCollapsed((prev) => !prev)

  return (
    <menu
      data-testid={'sidebar'}
      className={classNames(
        sidebarStyles.Sidebar,
        {
          [sidebarStyles.collapsed]: collapsed
        },
        [className]
      )}
    >
      <Button
        onClick={toggleSidebar}
        data-testid="toggle-button"
        className={sidebarStyles.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={sidebarStyles.items}>
        {SidebarItems.map((item) => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ))}
      </div>
      <div className={sidebarStyles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher
          className={classNames(sidebarStyles.languageSwitcherContainer)}
          short={collapsed}
        />
      </div>
    </menu>
  )
})

export default Sidebar
