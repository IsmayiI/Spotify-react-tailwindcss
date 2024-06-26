import { forwardRef, useEffect } from "react"
import PlaylistContextMenuItem from "./PlaylistContextMenuItem"
import PlaylistContextMenuItemWithSubmenu from "./PlaylistContextMenuItemWithSubmenu"

const PlaylistContextMenu = ({ menuItems, classes, onClose: handleClose }, ref) => {

   let closePreviousSubmenu = null

   const closePreviousSubmenuIfOpen = (closeSubmenu = null) => {
      if (closePreviousSubmenu) {
         closePreviousSubmenu()
      }

      closePreviousSubmenu = closeSubmenu
   }

   useEffect(() => {
      if (!handleClose) return

      function handleClickAway(e) {
         if (!ref.current.contains(e.target)) {
            handleClose()
         }
      }

      function handleEsc(e) {
         if (e.keyCode === 27) {
            handleClose()
         }
      }

      document.addEventListener('mousedown', handleClickAway)
      document.addEventListener('keydown', handleEsc)

      return () => {
         document.removeEventListener('mousedown', handleClickAway)
         document.removeEventListener('keydown', handleEsc)

      }
   })

   return (
      <ul ref={ref} className={classes}>
         {menuItems.map(({ label, subMenuItems }) => {
            if (subMenuItems) {
               return <PlaylistContextMenuItemWithSubmenu onMouseEnter={closePreviousSubmenuIfOpen} key={label} subMenuItems={subMenuItems} label={label} />
            }

            return <PlaylistContextMenuItem onMouseEnter={closePreviousSubmenuIfOpen} key={label} label={label} />

         })}
      </ul>
   )
}

export default forwardRef(PlaylistContextMenu) 