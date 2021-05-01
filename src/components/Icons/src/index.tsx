import React from "react";
import SvgIcon from "./SvgIcon";

// Arrows
import ArrowLeftSvg from "./svg/arrows/arrow-left.svg";
import RightArrowSvg from "./svg/arrows/arrow-right.svg";
import ChevronDownSvg from "./svg/arrows/chevron-down.svg";
import ChevronRightSvg from "./svg/arrows/chevron-right.svg";
import ChevronUpSvg from "./svg/arrows/chevron-up.svg";

// Communication
import CallSvg from "./svg/communication/call.svg";
import EmailSvg from "./svg/communication/email.svg";
import MessageSvg from "./svg/communication/message.svg";

// Functional
import CloseSvg from "./svg/functional/close.svg";
import ExternalLinkSvg from "./svg/functional/external-link.svg";
import GridSvg from "./svg/functional/grid.svg";
import HamburgerSvg from "./svg/functional/hamburger.svg";
import HideSvg from "./svg/functional/hide.svg";
import ListSvg from "./svg/functional/list.svg";
import SearchSvg from "./svg/functional/search.svg";
import ShareSvg from "./svg/functional/share.svg";
import ShowSvg from "./svg/functional/show.svg";
import StarterSvg from "./svg/functional/starter.svg";
import TrashSvg from "./svg/functional/trash.svg";

// Informational
import AlertTriangleSvg from "./svg/informational/alert-triangle.svg";
import CheckCircleSvg from "./svg/informational/checkCircle.svg";
import CircleHelpSvg from "./svg/informational/circle-help.svg";
import SettingsSvg from "./svg/informational/settings.svg";

// Objects
import ArchiveSvg from "./svg/objects/archive.svg";
import CalendarSvg from "./svg/objects/calendar.svg";
import CardSvg from "./svg/objects/card.svg";
import ClipboardSvg from "./svg/objects/clipboard.svg";
import CoronaSvg from "./svg/objects/corona.svg";
import DocumentSvg from "./svg/objects/document.svg";
import HouseSvg from "./svg/objects/house.svg";
import InboxSvg from "./svg/objects/inbox.svg";
import ParkingSvg from "./svg/objects/parking.svg";
import StaffSvg from "./svg/objects/staff.svg";
import UserLoggedInSvg from "./svg/objects/user-logged-in.svg";
import UserSvg from "./svg/objects/user.svg";

// Social
import FacebookSvg from "./svg/social/facebook.svg";
import LinkedinSvg from "./svg/social/linkedin.svg";
import TwitterSvg from "./svg/social/twitter.svg";
import WhatsappSvg from "./svg/social/whatsapp.svg";

// Misc
import MegaphoneSvg from "./svg/megaphone.svg";

const buildIcon: React.ElementType = (svg: React.ElementType) => <SvgIcon component={svg} />
type F = React.FunctionComponent; // less typing

// Arrows
export const ArrowLeftIcon: F = () => buildIcon(ArrowLeftSvg);
export const ArrowRightIcon: F = () => buildIcon(RightArrowSvg);
export const ChevronDownIcon: F = () => buildIcon(ChevronDownSvg);
export const ChevronRightIcon: F = () => buildIcon(ChevronRightSvg);
export const ChevronupIcon: F = () => buildIcon(ChevronUpSvg);

// Communication
export const CallIcon: F = () => buildIcon(CallSvg);
export const EmailIcon: F = () => buildIcon(EmailSvg);
export const MessageIcon: F = () => buildIcon(MessageSvg);

// Functional
export const CloseIcon: F = () => buildIcon(CloseSvg);
export const ExternalLinkIcon: F = () => buildIcon(ExternalLinkSvg);
export const GridIcon: F = () => buildIcon(GridSvg);
export const HamburgerIcon: F = () => buildIcon(HamburgerSvg);
export const HideIcon: F = () => buildIcon(HideSvg);
export const ListIcon: F = () => buildIcon(ListSvg);
export const SearchIcon: F = () => buildIcon(SearchSvg);
export const ShareIcon: F = () => buildIcon(ShareSvg);
export const ShowIcon: F = () => buildIcon(ShowSvg);
export const StarterIcon: F = () => buildIcon(StarterSvg);
export const TrashIcon: F = () => buildIcon(TrashSvg);

// Informational
export const AlertTraingleIcon: F = () => buildIcon(AlertTriangleSvg);
export const CheckCircleIcon: F = () => buildIcon(CheckCircleSvg);
export const CircleHelpIcon: F = () => buildIcon(CircleHelpSvg);
export const SettingsIcon: F = () => buildIcon(SettingsSvg);

// Objects
export const ArchiveIcon: F = () => buildIcon(ArchiveSvg);
export const CalendarIcon: F = () => buildIcon(CalendarSvg);
export const CardIcon: F = () => buildIcon(CardSvg);
export const ClipboardIcon: F = () => buildIcon(ClipboardSvg);
export const CoronaIcon: F = () => buildIcon(CoronaSvg);
export const DocumentIcon: F = () => buildIcon(DocumentSvg);
export const HouseIcon: F = () => buildIcon(HouseSvg);
export const InboxIcon: F = () => buildIcon(InboxSvg);
export const ParkingIcon: F = () => buildIcon(ParkingSvg);
export const StaffIcon: F = () => buildIcon(StaffSvg);
export const UserLoggedInIcon: F = () => buildIcon(UserLoggedInSvg);
export const UserIcon: F = () => buildIcon(UserSvg);

// Social
export const FacebookIcon: F = () => buildIcon(FacebookSvg);
export const LinkedinIcon: F = () => buildIcon(LinkedinSvg);
export const TwitterIcon: F = () => buildIcon(TwitterSvg);
export const WhatsappIcon: F = () => buildIcon(WhatsappSvg);

// Misc
export const MegaphoneIcon: F = () => buildIcon(MegaphoneSvg);

export default SvgIcon;
export * from "./SvgIcon";
