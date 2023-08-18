package com.example.prueba

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import android.widget.Toast

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val btnRandomize: Button = findViewById(R.id.randomize)
        val textValue: TextView = findViewById(R.id.textValue)

        btnRandomize.setOnClickListener{
            textValue.text = rand(50).toString()
        }
    }

    private fun rand(max: Int): Int{
        return (0..max).random()
    }
}