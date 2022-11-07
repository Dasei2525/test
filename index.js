const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });


client.on('ready', () => {
    console.log(`${client.user.tag}`);
});

client.on('messageCreate', message => {
    if (message.author.bot) return;

    if (message.content.includes('リュウのコマンド')||message.content.includes('隆のコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/ryu/movelist');
    }

    if (message.content.includes('バーディーのコマンド')||message.content.includes('バーディのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/birdie/movelist');
    }

    if (message.content.includes('ケンのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/ken/movelist');
    }

    if (message.content.includes('ベガのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/vega/movelist');
    }

    if (message.content.includes('春麗のコマンド')||message.content.includes('チュンリーのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/chun-li/movelist');
    }

    if (message.content.includes('ナッシュのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/nash/movelist');
    }

    if (message.content.includes('キャミィのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/cammy/movelist');
    }

    if (message.content.includes('ネカリのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/necalli/movelist');
    }

    if (message.content.includes('バルログのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/balrog/movelist');
    }

    if (message.content.includes('ミカのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/rmika/movelist');
    }

    if (message.content.includes('ラシードのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/rashid/movelist');
    }

    if (message.content.includes('かりんのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/rashid/movelist');
    }

    if (message.content.includes('かりんのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/karin/movelist');
    }

    if (message.content.includes('ザンギエフのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/zangief/movelist');
    }

    if (message.content.includes('ララのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/laura/movelist');
    }

    if (message.content.includes('ダルシムのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/dhalsim/movelist');
    }

    if (message.content.includes('ファングのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/fang/movelist');
    }

    if (message.content.includes('アレックスのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/alex/movelist');
    }

    if (message.content.includes('ガイルのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/guile/movelist');
    }

    if (message.content.includes('いぶきのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/ibuki/movelist');
    }

    if (message.content.includes('バイソンのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/mbison/movelist');
    }

    if (message.content.includes('ジュリのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/juri/movelist');
    }

    if (message.content.includes('ユリアンのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/urien/movelist');
    }

    if (message.content.includes('ゴウキのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/gouki/movelist');
    }

    if (message.content.includes('コーリンのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/kolin/movelist');
    }

    if (message.content.includes('エドのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/ed/movelist');
    }

    if (message.content.includes('アビゲイルのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/abigail/movelist');
    }

    if (message.content.includes('メナトのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/menat/movelist');
    }

    if (message.content.includes('是空のコマンド')||message.content.includes('ゼクウのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/zeku/movelist');
    }

    if (message.content.includes('さくらのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/sakura/movelist');
    }

    if (message.content.includes('ブランカのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/bulanka/movelist');
    }

    if (message.content.includes('ファルケのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/falke/movelist');
    }

    if (message.content.includes('コーディのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/cody/movelist');
    }

    if (message.content.includes('Gのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/g/movelist');
    }

    if (message.content.includes('サガットのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/sagat/movelist');
    }

    if (message.content.includes('影のコマンド')||message.content.includes('カゲのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/kage/movelist');
    }

    if (message.content.includes('ポイズンのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/poison/movelist');
    }
    
    if (message.content.includes('本田のコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/ehonda/movelist');
    }

    if (message.content.includes('ルシアのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/lucia/movelist');
    }

    if (message.content.includes('ギルのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/gill/movelist');
    }

    if (message.content.includes('セスのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/seth/movelist');
    }

    if (message.content.includes('ダンのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/dan/movelist');
    }

    if (message.content.includes('ローズのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/rose/movelist');
    }

    if (message.content.includes('オロのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/oro/movelist');
    }

    if (message.content.includes('アキラのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/akira/movelist');
    }

    if (message.content.includes('ルークのコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/luke/movelist');
    }

});
    
client.on('messageCreate', message => {
    if (message.author.bot) return;

    if (message.content.includes('リュウのコマンド')||message.content.includes('隆のコマンド')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/ryu/frame/table#vt1');
    }

    if (message.content.includes('バーディーのフレーム')||message.content.includes('バーディのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/birdie/frame/table#vt1');
    }

    if (message.content.includes('ケンのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/ken/frame/table#vt1');
    }

    if (message.content.includes('ベガのフレーム')||message.content.includes('チュンリーのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/vega/frame/table#vt1');
    }

    if (message.content.includes('春麗のフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/chun-li/frame/table#vt1');
    }

    if (message.content.includes('ナッシュのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/nash/frame/table#vt1');
    }

    if (message.content.includes('キャミィのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/cammy/frame/table#vt1');
    }

    if (message.content.includes('ネカリのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/necalli/frame/table#vt1');
    }

    if (message.content.includes('バルログのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/balrog/frame/table#vt1');
    }

    if (message.content.includes('ミカのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/rmika/frame/table#vt1');
    }

    if (message.content.includes('ラシードのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/rashid/frame/table#vt1');
    }

    if (message.content.includes('かりんのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/rashid/frame/table#vt1');
    }

    if (message.content.includes('かりんのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/karin/frame/table#vt1');
    }

    if (message.content.includes('ザンギエフのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/zangief/frame/table#vt1');
    }

    if (message.content.includes('ララのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/laura/frame/table#vt1');
    }

    if (message.content.includes('ダルシムのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/dhalsim/frame/table#vt1');
    }

    if (message.content.includes('ファングのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/fang/frame/table#vt1');
    }

    if (message.content.includes('アレックスのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/alex/frame/table#vt1');
    }

    if (message.content.includes('ガイルのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/guile/frame/table#vt1');
    }

    if (message.content.includes('いぶきのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/ibuki/frame/table#vt1');
    }

    if (message.content.includes('バイソンのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/mbison/frame/table#vt1');
    }

    if (message.content.includes('ジュリのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/juri/frame/table#vt1');
    }

    if (message.content.includes('ユリアンのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/urien/frame/table#vt1');
    }

    if (message.content.includes('ゴウキのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/gouki/frame/table#vt1');
    }

    if (message.content.includes('コーリンのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/kolin/frame/table#vt1');
    }

    if (message.content.includes('エドのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/ed/frame/table#vt1');
    }

    if (message.content.includes('アビゲイルのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/abigail/frame/table#vt1');
    }

    if (message.content.includes('メナトのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/menat/frame/table#vt1');
    }

    if (message.content.includes('是空のフレーム')||message.content.includes('ゼクウのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/zeku/frame/table#vt1');
    }

    if (message.content.includes('さくらのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/sakura/frame/table#vt1');
    }

    if (message.content.includes('ブランカのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/bulanka/frame/table#vt1');
    }

    if (message.content.includes('ファルケのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/falke/frame/table#vt1');
    }

    if (message.content.includes('コーディのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/cody/frame/table#vt1');
    }

    if (message.content.includes('Gのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/g/frame/table#vt1');
    }

    if (message.content.includes('サガットのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/sagat/frame/table#vt1');
    }

    if (message.content.includes('影のフレーム')||message.content.includes('カゲのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/kage/frame/table#vt1');
    }

    if (message.content.includes('ポイズンのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/poison/frame/table#vt1');
    }
    
    if (message.content.includes('本田のフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/ehonda/frame/table#vt1');
    }

    if (message.content.includes('ルシアのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/lucia/frame/table#vt1');
    }

    if (message.content.includes('ギルのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/gill/frame/table#vt1');
    }

    if (message.content.includes('セスのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/seth/frame/table#vt1');
    }

    if (message.content.includes('ダンのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/dan/frame/table#vt1');
    }

    if (message.content.includes('ローズのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/rose/frame/table#vt1');
    }

    if (message.content.includes('オロのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/oro/frame/table#vt1');
    }

    if (message.content.includes('アキラのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/akira/frame/table#vt1');
    }

    if (message.content.includes('ルークのフレーム')) {
        message.channel.send('https://game.capcom.com/cfn/sfv/character/luke/frame/table#vt1');
    }

});    

client.login("MTAwODMxNzU5NjcwNzMzMjEyOA.GJNTlq.pw88KXADEddFvScamOH6Zgo4F8bzc-WUfe-mnQ");