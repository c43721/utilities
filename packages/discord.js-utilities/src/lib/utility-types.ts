import type {
	ButtonInteraction,
	CategoryChannel,
	Channel,
	CommandInteraction,
	ContextMenuInteraction,
	DMChannel,
	GuildChannel,
	Message,
	ModalSubmitInteraction,
	NewsChannel,
	PartialDMChannel,
	SelectMenuInteraction,
	StageChannel,
	StoreChannel,
	TextChannel,
	ThreadChannel,
	VoiceChannel
} from 'discord.js';

/**
 * A union of all the various types of channels that Discord.js has
 */
export type ChannelTypes =
	| CategoryChannel
	| DMChannel
	| PartialDMChannel
	| NewsChannel
	| StageChannel
	| StoreChannel
	| TextChannel
	| ThreadChannel
	| VoiceChannel
	| GuildChannel
	| Channel;

/**
 * A union of all the channel types that a message can come from
 */
export type TextBasedChannelTypes = Message['channel'];

/**
 * A union of all the voice-based channel types that Discord.js has
 */
export type VoiceBasedChannelTypes = VoiceChannel | StageChannel;

/**
 * A union of all the channel types that belong to a guild, not including {@link ThreadChannel}
 */
export type NonThreadGuildBasedChannelTypes = Extract<ChannelTypes, GuildChannel>;

/**
 * A union of all the channel types that belong to a guild, including {@link ThreadChannel}
 */
export type GuildBasedChannelTypes = NonThreadGuildBasedChannelTypes | ThreadChannel;

/**
 * A union of guild based message channels, not including {@link ThreadChannel}
 */
export type NonThreadGuildTextBasedChannelTypes = Extract<TextBasedChannelTypes, GuildChannel>;

/**
 * A union of guild based message channels, including {@link ThreadChannel}
 */
export type GuildTextBasedChannelTypes = NonThreadGuildTextBasedChannelTypes | ThreadChannel;

/**
 * The types of a channel, with the addition of `'UNKNOWN'`
 */
export type ChannelTypeString = ChannelTypes['type'] | 'UNKNOWN';

/**
 * A union of {@link CommandInteraction} and {@link ContextMenuInteraction}. Similar to {@link BaseCommandInteraction} class but as a type union.
 */
export type ChatInputOrContextMenuInteraction = CommandInteraction | ContextMenuInteraction;

/**
 * A union of {@link CommandInteraction}, {@link ContextMenuInteraction}, {@link SelectMenuInteraction}, {@link ButtonInteraction}, and {@link ModalSubmitInteraction};
 */
export type NonModalInteraction = ChatInputOrContextMenuInteraction | SelectMenuInteraction | ButtonInteraction;

/**
 * A union of {@link CommandInteraction}, {@link ContextMenuInteraction}, {@link SelectMenuInteraction}, {@link ButtonInteraction}, and {@link ModalSubmitInteraction};
 */
export type AnyInteraction = NonModalInteraction | ModalSubmitInteraction;
