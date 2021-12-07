import { LinkStatus, MenuEntry } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://bee.honeyfarm.finance/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      //      {
      //        label: '1inch (Recommended)',
      //        href: 'https://app.1inch.io/#/56/swap/BNB/0xc3EAE9b061Aa0e1B9BD3436080Dc57D2d63FEdc1',
      //        target: "_blank"
      //      },
      {
        label: 'Exchange',
        href: 'https://pancakeswap.finance/swap?outputCurrency=0x1A8d7AC01d21991BF5249A3657C97b2B6d919222',
        target: '_blank',
      },
      {
        label: 'Liquidity',
        href: 'https://pancakeswap.finance/add/BNB/0x1A8d7AC01d21991BF5249A3657C97b2B6d919222',
        target: '_blank',
      },
      {
        label: 'Bridge (Anyswap)',
        href: 'https://anyswap.exchange/#/bridge',
        target: '_blank',
      },
      {
        label: 'Multi Chain Swap',
        href: 'changeNow',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Vaults',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Royal Jelly',
    icon: 'RoyalJellyIcon',
    href: '/royaljelly',
  },
  {
    label: 'NFT Jelly',
    icon: 'NftIcon',
    href: '/nftjelly',
  },
  {
    label: 'IHO',
    icon: 'TicketIcon',
    href: '/iho',
  },
  //  {
  //    label: 'Honey Keeper Protocol',
  //    icon: 'BuybackIcon',
  //    href: '/buyback',
  //  },
  {
    label: 'Referrals',
    icon: 'GroupsIcon',
    href: '/referrals',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Layered Farming',
        icon: 'LayerIcon',
        items: [
          {
            label: 'Layer 1 Honey',
            href: 'https://honey.honeyfarm.finance/',
            target: '_blank',
          },
          {
            label: 'Layer 2 Bear',
            href: 'https://bear.honeyfarm.finance/',
            target: '_blank',
          },
          {
            label: 'Layer 3 Moon',
            href: 'https://moon.honeyfarm.finance/',
            target: '_blank',
          },
          {
            label: 'Layer 4 Bee',
            href: 'https://bee.honeyfarm.finance/',
          },
        ],
      },
      {
        label: 'Partners',
        icon: 'TeamBattleIcon',
        href: '/partners',
      },
      {
        label: 'Docs',
        icon: 'TicketIcon',
        href: 'https://docs.honeyfarm.finance/',
        target: '_blank',
      },
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x1A8d7AC01d21991BF5249A3657C97b2B6d919222',
        target: '_blank',
      },
      {
        label: 'PooCoin',
        href: 'https://poocoin.app/tokens/0x1A8d7AC01d21991BF5249A3657C97b2B6d919222',
        target: '_blank',
      },
      {
        label: 'ApeBoard',
        href: 'https://apeboard.finance/',
        target: '_blank',
      },
      {
        label: 'Pacoca',
        href: 'https://pacoca.io/',
        target: '_blank',
      },
      {
        label: 'Arken Chart',
        href: 'https://swap.arken.finance/tokens/bsc/0x1A8d7AC01d21991BF5249A3657C97b2B6d919222',
        target: '_blank',
      },
    ],
  },
];

export const socials = [
  {
    label: "Discord",
    icon: "TelegramIcon",
    items: [
      {
        label: "Announcement",
        href: "https://t.me/HoneyFarmAnn"
      },
      {
        label: "Community",
        href: "https://t.me/HoneyFarmChat"
      },
    ],
  },
  {
    label: "Medium",
    icon: "MediumIcon",
    href: "https://medium.com/@honeyfarmchef",
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/HoneyFarmFi",
  },
  {
    label: "Reddit",
    icon: "RedditIcon",
    href: "https://www.reddit.com/r/HoneyFarm_Official/",
  },
];

export const MENU_HEIGHT = 160;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
