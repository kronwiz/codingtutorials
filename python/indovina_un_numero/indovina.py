#!/usr/bin/env python
# -*- coding: utf8 -*-

from kivy.app import App
from kivy.uix.boxlayout import BoxLayout
from kivy.properties import ObjectProperty

from kivy.config import Config
Config.set ( "graphics", "width", "400" )
Config.set ( "graphics", "height", "120" )

from random import randint


class IndovinaGame ( BoxLayout ):
	ordine = ObjectProperty ( None )
	messaggio = ObjectProperty ( None )

	def estrai_numero ( self ):
		self.estratto = randint ( 0, 50 )

	def controlla_numero ( self, w_numero ):
		try:
			numero = int ( w_numero.text )
		except ValueError:
			numero = 0


		if numero < self.estratto:
			self.ordine.text = "<"

		if numero > self.estratto:
			self.ordine.text = ">"

		if numero == self.estratto:
			self.ordine.text = "="
			self.messaggio.text = "Bravo hai indovinato!"


class IndovinaApp ( App ):
	def build ( self ):
		game = IndovinaGame ()
		game.estrai_numero ()
		return game


if __name__ == '__main__':
	IndovinaApp ().run ()

