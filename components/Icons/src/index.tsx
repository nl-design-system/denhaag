import React from 'react';
import SvgIcon, { SvgIconProps } from './SvgIcon';

import './index.scss';

// Arrows
import ArrowLeftSvg from './svg/arrows/arrow-left.svg';
import RightArrowSvg from './svg/arrows/arrow-right.svg';
import ChevronDownSvg from './svg/arrows/chevron-down.svg';
import ChevronRightSvg from './svg/arrows/chevron-right.svg';
import ChevronUpSvg from './svg/arrows/chevron-up.svg';
import ChevronLeftSvg from './svg/arrows/chevron-left.svg';

// Communication
import CallSvg from './svg/communication/call.svg';
import EmailSvg from './svg/communication/email.svg';
import MessageSvg from './svg/communication/message.svg';

// Functional
import CloseSvg from './svg/functional/close.svg';
import CheckedSvg from './svg/functional/checked.svg';
import DownloadSvg from './svg/functional/download.svg';
import EditSvg from './svg/functional/edit.svg';
import ExternalLinkSvg from './svg/functional/external-link.svg';
import FavoriteSvg from './svg/functional/favorite.svg';
import GridSvg from './svg/functional/grid.svg';
import HamburgerSvg from './svg/functional/hamburger.svg';
import HideSvg from './svg/functional/hide.svg';
import ListSvg from './svg/functional/list.svg';
import LogOutSvg from './svg/functional/log-out.svg';
import SearchSvg from './svg/functional/search.svg';
import ShareSvg from './svg/functional/share.svg';
import ShowSvg from './svg/functional/show.svg';
import StarterSvg from './svg/functional/starter.svg';
import TrashSvg from './svg/functional/trash.svg';
import UncheckedBoxSvg from './svg/functional/uncheckedbox.svg';

// Informational
import AlertTriangleFilledSvg from './svg/informational/alert-triangle-filled.svg';
import AlertTriangleSvg from './svg/informational/alert-triangle.svg';
import CheckCircleSvg from './svg/informational/checkCircle.svg';
import CircleHelpSvg from './svg/informational/circle-help.svg';
import CircleInformationSvg from './svg/informational/circle-information.svg';
import CircleWarningSvg from './svg/informational/circle-warning.svg';
import SettingsSvg from './svg/informational/settings.svg';

// Objects
import ArchiveSvg from './svg/objects/archive.svg';
import BookSvg from './svg/objects/book.svg';
import BuildingSVG from './svg/objects/building.svg';
import CalendarSvg from './svg/objects/calendar.svg';
import CardSvg from './svg/objects/card.svg';
import ClipboardSvg from './svg/objects/clipboard.svg';
import CoronaSvg from './svg/objects/corona.svg';
import DocumentSvg from './svg/objects/document.svg';
import EuroSvg from './svg/objects/euro.svg';
import FilestorageSVG from './svg/objects/filestorage.svg';
import FileSvg from './svg/objects/file.svg';
import HouseSvg from './svg/objects/house.svg';
import HouseWithEuroSvg from './svg/objects/house-with-euro.svg';
import ImageSvg from './svg/objects/image.svg';
import InboxSvg from './svg/objects/inbox.svg';
import MapSvg from './svg/objects/map.svg';
import MegaphoneSvg from './svg/objects/megaphone.svg';
import ParkingSvg from './svg/objects/parking.svg';
import StaffSvg from './svg/objects/staff.svg';
import UserLoggedInSvg from './svg/objects/user-logged-in.svg';
import UserSvg from './svg/objects/user.svg';

// Social
import FacebookSvg from './svg/social/facebook.svg';
import InstagramSvg from './svg/social/instagram.svg';
import LinkedInSvg from './svg/social/linkedin.svg';
import TwitterSvg from './svg/social/twitter.svg';
import WhatsAppSvg from './svg/social/whatsapp.svg';
import YouTubeSvg from './svg/social/youtube.svg';

const buildIcon: React.ElementType = (svg: React.ElementType, props: SvgIconProps) => (
  <SvgIcon component={svg} {...props} />
);
type F = React.FunctionComponent<SvgIconProps>; // less typing

// Arrows
export const ArrowLeftIcon: F = (props: SvgIconProps) => buildIcon(ArrowLeftSvg, props);
export const ArrowRightIcon: F = (props: SvgIconProps) => buildIcon(RightArrowSvg, props);
export const ChevronDownIcon: F = (props: SvgIconProps) => buildIcon(ChevronDownSvg, props);
export const ChevronRightIcon: F = (props: SvgIconProps) => buildIcon(ChevronRightSvg, props);
export const ChevronUpIcon: F = (props: SvgIconProps) => buildIcon(ChevronUpSvg, props);
export const ChevronLeftIcon: F = (props: SvgIconProps) => buildIcon(ChevronLeftSvg, props);

// Communication
export const CallIcon: F = (props: SvgIconProps) => buildIcon(CallSvg, props);
export const EmailIcon: F = (props: SvgIconProps) => buildIcon(EmailSvg, props);
export const MessageIcon: F = (props: SvgIconProps) => buildIcon(MessageSvg, props);

// Functional
export const CloseIcon: F = (props: SvgIconProps) => buildIcon(CloseSvg, props);
export const CheckedIcon: F = (props: SvgIconProps) => buildIcon(CheckedSvg, props);
export const DownloadIcon: F = (props: SvgIconProps) => buildIcon(DownloadSvg, props);
export const EditIcon: F = (props: SvgIconProps) => buildIcon(EditSvg, props);
export const ExternalLinkIcon: F = (props: SvgIconProps) => buildIcon(ExternalLinkSvg, props);
export const FavoriteIcon: F = (props: SvgIconProps) => buildIcon(FavoriteSvg, props);
export const GridIcon: F = (props: SvgIconProps) => buildIcon(GridSvg, props);
export const HamburgerIcon: F = (props: SvgIconProps) => buildIcon(HamburgerSvg, props);
export const HideIcon: F = (props: SvgIconProps) => buildIcon(HideSvg, props);
export const ListIcon: F = (props: SvgIconProps) => buildIcon(ListSvg, props);
export const LogOutIcon: F = (props: SvgIconProps) => buildIcon(LogOutSvg, props);
export const SearchIcon: F = (props: SvgIconProps) => buildIcon(SearchSvg, props);
export const ShareIcon: F = (props: SvgIconProps) => buildIcon(ShareSvg, props);
export const ShowIcon: F = (props: SvgIconProps) => buildIcon(ShowSvg, props);
export const StarterIcon: F = (props: SvgIconProps) => buildIcon(StarterSvg, props);
export const TrashIcon: F = (props: SvgIconProps) => buildIcon(TrashSvg, props);
export const UncheckedBoxIcon: F = (props: SvgIconProps) => buildIcon(UncheckedBoxSvg, props);

// Informational
export const AlertTriangleFilledIcon: F = (props: SvgIconProps) => buildIcon(AlertTriangleFilledSvg, props);
export const AlertTriangleIcon: F = (props: SvgIconProps) => buildIcon(AlertTriangleSvg, props);
export const CheckCircleIcon: F = (props: SvgIconProps) => buildIcon(CheckCircleSvg, props);
export const CircleHelpIcon: F = (props: SvgIconProps) => buildIcon(CircleHelpSvg, props);
export const CircleInformationIcon: F = (props: SvgIconProps) => buildIcon(CircleInformationSvg, props);
export const CircleWarningIcon: F = (props: SvgIconProps) => buildIcon(CircleWarningSvg, props);
export const SettingsIcon: F = (props: SvgIconProps) => buildIcon(SettingsSvg, props);

// Objects
export const ArchiveIcon: F = (props: SvgIconProps) => buildIcon(ArchiveSvg, props);
export const BookIcon: F = (props: SvgIconProps) => buildIcon(BookSvg, props);
export const BuildingIcon: F = (props: SvgIconProps) => buildIcon(BuildingSVG, props);
export const CalendarIcon: F = (props: SvgIconProps) => buildIcon(CalendarSvg, props);
export const CardIcon: F = (props: SvgIconProps) => buildIcon(CardSvg, props);
export const ClipboardIcon: F = (props: SvgIconProps) => buildIcon(ClipboardSvg, props);
export const CoronaIcon: F = (props: SvgIconProps) => buildIcon(CoronaSvg, props);
export const DocumentIcon: F = (props: SvgIconProps) => buildIcon(DocumentSvg, props);
export const EuroIcon: F = (props: SvgIconProps) => buildIcon(EuroSvg, props);
export const FilestorageIcon: F = (props: SvgIconProps) => buildIcon(FilestorageSVG, props);
export const FileIcon: F = (props: SvgIconProps) => buildIcon(FileSvg, props);
export const HouseIcon: F = (props: SvgIconProps) => buildIcon(HouseSvg, props);
export const HouseWithEuroIcon: F = (props: SvgIconProps) => buildIcon(HouseWithEuroSvg, props);
export const MapIcon: F = (props: SvgIconProps) => buildIcon(MapSvg, props);
export const ImageIcon: F = (props: SvgIconProps) => buildIcon(ImageSvg, props);
export const InboxIcon: F = (props: SvgIconProps) => buildIcon(InboxSvg, props);
export const ParkingIcon: F = (props: SvgIconProps) => buildIcon(ParkingSvg, props);
export const StaffIcon: F = (props: SvgIconProps) => buildIcon(StaffSvg, props);
export const UserLoggedInIcon: F = (props: SvgIconProps) => buildIcon(UserLoggedInSvg, props);
export const UserIcon: F = (props: SvgIconProps) => buildIcon(UserSvg, props);

// Social
export const FacebookIcon: F = (props: SvgIconProps) => buildIcon(FacebookSvg, props);
export const InstagramIcon: F = (props: SvgIconProps) => buildIcon(InstagramSvg, props);
export const LinkedInIcon: F = (props: SvgIconProps) => buildIcon(LinkedInSvg, props);
export const TwitterIcon: F = (props: SvgIconProps) => buildIcon(TwitterSvg, props);
export const WhatsAppIcon: F = (props: SvgIconProps) => buildIcon(WhatsAppSvg, props);
export const YouTubeIcon: F = (props: SvgIconProps) => buildIcon(YouTubeSvg, props);

// Misc
export const MegaphoneIcon: F = (props: SvgIconProps) => buildIcon(MegaphoneSvg, props);

export default SvgIcon;
export * from './SvgIcon';
