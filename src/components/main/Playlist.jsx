
import PlaylistBtnPlay from "./PlaylistBtnPlay"
import PlaylistDescr from "./PlaylistDescr"
import PlaylistImg from "./PlaylistImg"
import PlaylistTitle from "./PlaylistTitle"
import PlaylistContextMenu from "./PlaylistContextMenu"

const menuItems = [
   {
      label: 'Add To Your Library'
   },
   {
      label: 'Share',
      subMenuItems: [
         {
            label: 'Copy link to playlist'
         },
         {
            label: 'Embed playlist'
         }
      ]
   },
   {
      label: 'About recommendations'
   },
   {
      label: 'Open in Desktop app'
   },
]

const menuClasses = `absolute top-14 left-16 z-10 divide-y divide-[#3e3e3e]
bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default hidden group-hover:block text-nowrap`

const Playlist = ({ title, descr, img, classes }) => {
   return (
      <a href="#" className={classes}>
         <div className="mb-4 relative">
            <PlaylistImg img={img} />
            <PlaylistBtnPlay />
         </div>
         <PlaylistTitle title={title} />
         <PlaylistDescr descr={descr} />
         <PlaylistContextMenu menuItems={menuItems} classes={menuClasses} />
      </a>
   )
}

export default Playlist