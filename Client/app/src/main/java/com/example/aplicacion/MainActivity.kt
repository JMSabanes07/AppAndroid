package com.example.aplicacion

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import io.github.agrevster.pocketbaseKotlin.PocketbaseClient
import io.github.agrevster.pocketbaseKotlin.dsl.login
import io.github.agrevster.pocketbaseKotlin.models.User
import io.ktor.http.URLProtocol

class MainActivity : AppCompatActivity() {
    override suspend fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val client = PocketbaseClient({
            protocol = URLProtocol.HTTP
            host = "localhost"
            port = 8090
        })

        //Logging in
        val loginToken: String = client.records.authWithOauth2<User>("collectionName", "provider", "code", "codeVerifier", "redirectUrl").token
        client.login { token = loginToken }

        val googleBtn: Button = findViewById(R.id.loginGoogleBtn)
        googleBtn.setOnClickListener {
            login()
        }
    }


    private fun login(){
    }
}