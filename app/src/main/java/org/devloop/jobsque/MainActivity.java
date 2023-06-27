package org.devloop.jobsque;

import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.ConsoleMessage;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.ImageView;
import android.widget.RelativeLayout;

//import androidx.swiperefreshlayout.widget.SwipeRefreshLayout;

public class MainActivity extends Activity {

    private static final int FILE_CHOOSER_REQUEST_CODE = 123;
    private WebView myWebView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.webview);

        myWebView=(WebView) findViewById(R.id.webview);
        myWebView.setWebChromeClient(new MyWebChromeClient(){
            @Override
            public boolean onShowFileChooser(WebView webView, ValueCallback<Uri[]> filePathCallback, WebChromeClient.FileChooserParams fileChooserParams) {
//                String[] acceptedMimeTypes = new String[]{"application/pdf", "image/*"};
//                fileChooserParams.setType = acceptedMimeTypes;

                // Create an intent to select file
                Intent intent = fileChooserParams.createIntent();
                intent.setType("application/pdf");
                try {
                    // Start the file selection activity
                    startActivityForResult(intent, FILE_CHOOSER_REQUEST_CODE);

                } catch (ActivityNotFoundException e) {
                    // Handle error if no file selection activity found
                    return false;
                }
                return true;
            }
        });

        myWebView.setWebViewClient(new WebViewClient(){
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                return false;
            }
        });
        myWebView.setScrollBarStyle(WebView.SCROLLBARS_OUTSIDE_OVERLAY);
        myWebView.setVerticalScrollBarEnabled(false);
        myWebView.setScrollbarFadingEnabled(true);


        WebSettings webSettings=myWebView.getSettings();
        webSettings.setDomStorageEnabled(true);
        webSettings.setJavaScriptEnabled(true);
        webSettings.setAllowContentAccess(true);
        webSettings.setAllowFileAccess(true);
        webSettings.setAllowFileAccessFromFileURLs(true);
        webSettings.setAllowUniversalAccessFromFileURLs(true);
        myWebView.loadUrl("file:///android_asset/index.html");
    }

    @Override
    public void onBackPressed() {
        if (myWebView.canGoBack()) {
            myWebView.goBack();
        } else {
            super.onBackPressed();
        }
    }
    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == FILE_CHOOSER_REQUEST_CODE) {
            if (resultCode == RESULT_OK) {
                // Handle the selected file(s) from the data intent
                Uri[] selectedFiles = WebChromeClient.FileChooserParams.parseResult(resultCode, data);
                if (selectedFiles != null) {
                    String filePath = selectedFiles[0].toString(); // Assuming a single file is selected
                    Log.d( "onActivityResult: filepath: ",filePath);
                    String js = "document.getElementById('cv_picker').click();";
                    myWebView.evaluateJavascript(js, null);
                }
            } else {
                Log.e( "onActivityResult: ", "file not found");
                // File selection was canceled or failed
            }
        }
    }

    public boolean isNetworkAvailable() {
        ConnectivityManager cm = (ConnectivityManager)  getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo networkInfo = cm.getActiveNetworkInfo();
        if (networkInfo != null && networkInfo.isConnected()) {
            return true;
        }
        return false;
    }
}
class MyWebChromeClient extends WebChromeClient {
    @Override
    public boolean onConsoleMessage(ConsoleMessage consoleMessage) {
        Log.d("WebViewConsole", consoleMessage.message() + " -- From line "
                + consoleMessage.lineNumber() + " of "
                + consoleMessage.sourceId());
        return true;
    }
}