'use strict';

const { Events, BaseInteraction } = require("discord.js");
const DIH4DJS = require("../DIH4DJS");
const ActionListener = require("../structures/interfaces/ActionListener");

class ActionInteractionCreate extends ActionListener {
    constructor() {
        super(Events.InteractionCreate);
    }

    /**
     * @param {DIH4DJS} dih4djs 
     * @param {BaseInteraction} interaction 
     */
    async execute(dih4djs, interaction) {
        /**
         * Interaction Handlers
         */
        const inManager = dih4djs.interactionManager;
        if (interaction.isChatInputCommand()) { inManager.handleSlashCommand(interaction); }
        if (interaction.isUserContextMenuCommand()) { inManager.handleUserContextCommand(interaction); }
        if (interaction.isMessageContextMenuCommand()) { inManager.handleMessageContextCommand(interaction); }

        /**
         * Component Handlers
         */
        const coManager = dih4djs.componentManager;
        if (interaction.isButton()) { coManager.handleButton(interaction); }
        if (interaction.isAnySelectMenu()) { coManager.handleSelectMenu(interaction); }
        if (interaction.isModalSubmit()) { coManager.handleModal(interaction); }
    }
}

module.exports = ActionInteractionCreate;