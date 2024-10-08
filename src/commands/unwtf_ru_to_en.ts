import { ApplicationCommandType, ContextMenuCommandBuilder, MessageContextMenuCommandInteraction } from 'discord.js';

export const options = new ContextMenuCommandBuilder()
    .setName('unwtf_ru_to_en')
    .setType(ApplicationCommandType.Message)
    .setIntegrationTypes(1)
    .setContexts(0, 1, 2)
    .toJSON();

export const run = async (interaction: MessageContextMenuCommandInteraction<'cached'>) => {
    if (interaction.commandType !== ApplicationCommandType.Message) return;

    const russianToEnglish: { [key: string]: string } = {
        й: 'q',
        Й: 'Q',
        ц: 'w',
        Ц: 'W',
        у: 'e',
        У: 'E',
        к: 'r',
        К: 'R',
        е: 't',
        Е: 'T',
        н: 'y',
        Н: 'Y',
        г: 'u',
        Г: 'U',
        ш: 'i',
        Ш: 'I',
        щ: 'o',
        Щ: 'O',
        з: 'p',
        З: 'P',
        х: '[',
        Х: '{',
        ъ: ']',
        Ъ: '}',
        ф: 'a',
        Ф: 'A',
        ы: 's',
        Ы: 'S',
        в: 'd',
        В: 'D',
        а: 'f',
        А: 'F',
        п: 'g',
        П: 'G',
        р: 'h',
        Р: 'H',
        о: 'j',
        О: 'J',
        л: 'k',
        Л: 'K',
        д: 'l',
        Д: 'L',
        ж: ';',
        Ж: ':',
        э: "'",
        Э: '"',
        я: 'z',
        Я: 'Z',
        ч: 'x',
        Ч: 'X',
        с: 'c',
        С: 'C',
        м: 'v',
        М: 'V',
        и: 'b',
        И: 'B',
        т: 'n',
        Т: 'N',
        ь: 'm',
        Ь: 'M',
        б: ',',
        Б: '<',
        ю: '.',
        Ю: '>',
        ' ': ' ',
    };

    return await interaction.reply(
        interaction.targetMessage.content
            .split('')
            .map((letter) => russianToEnglish[letter] || letter)
            .join(''),
    );
};
