<% provide(:title, 'Sunsetting Chaincase iOS TestFlight Beta') %>

# Sunsetting Chaincase iOS TestFlight Beta

<span class="by-line">by Dan Gould · 2022-08-01</span>

In 2022 we're keeping laser-eyes focus on the problem Chaincase set out to solve: Commerce is getting captured by surveillance.

In the hundreds of conversations with enthusiastic iOS Beta users, we discovered the fundamental bottlenecks on bitcoin privacy. Having an iOS app is not one of them. Early adopter, we thank you sincerely. Your feedback is shaping the future.

Since the our most promising opportunity to solve the surveillance problem lies outside the iOS app we've decided to shut it down. The Chaincase iOS Beta will expire on November 1, 2022. Funds must be moved before then. Chaincase support will be available on telegram at [t.me/chaincase](https://t.me/chaincase) to facilitate the transition. We are excited to share bitcoin tech that plugs into popular software so that everyone has access to better privacy. Stay tuned.

## Export Options

The following is a guide on the software most compatible with Chaincase. If you're a desktop user, the easiest transition is to Wasabi wallet. On iOS, BlueWallet is a good choice.

### Wasabi Wallet

Wasabi Wallet ([wasabiwallet.io](https://wasabiwallet.io)) uses the same wallet file format as Chaincase.

From the Chaincase Settings menu, tap "Export Wallet File" to bring up the share drawer. The secrets in this wallet file are encrypted. We recommend you move this file to the computer where Wasabi is installed using AirDrop or another encrypted file drop. The file must be placed inside the Wasabi Data Folder.

- Windows: `/Users/{your username}/AppData/Roaming/WalletWasabi/Client`
- Linux: `/home/{your username}/.walletwasabi/client`
- macOS: `/Users/{your username}/.walletwasabi/client`

You may need to mark the “show hidden files” setting to see it.

You can open the folder from inside Wasabi, too: `File > Open > Data Folder`

Once inside the Wasabi Data Folder, restart Wasabi and your bitcoin will be visible after Wasabi finds it by scanning bitcoin network data.

### BlueWallet

BlueWallet ([https://bluewallet.io/](https://bluewallet.io/)) supports Chaincase format by importing seed words and passphrase. Note that the way BlueWallet gets history is not as private as Chaincase or Wasabi. For the best in sync privacy, use Wasabi.

From the Chaincase Settings menu, tap Back Up Seed Words and enter your password to show your seed words.

From BlueWallet, under the Add a wallet heading tap "Add now." Tap the "Bitcoin" wallet type and make sure "HD SegWit (BIP84 Bech32 Native)" is checked before tapping "Import wallet" at the very bottom. **Make sure to switch ON the toggle for Passphrase**. Enter your 12 seed words one by one separating each by a space. Click Import and then **enter your Chaincase password** when prompted for a Passphrase. **The Passphrase must be identical** to your Chaincase password in order for BlueWallet to show you your funds.

Once you're back on the home screen you should be able to find the imported wallet and refresh it to show your history.
